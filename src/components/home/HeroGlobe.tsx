'use client';

import React, { useEffect, useRef } from 'react';
import { geoOrthographic, geoPath, type GeoPermissibleObjects } from 'd3-geo';
import landData from '../../data/world-land.json';

interface Currency {
  symbol: string;
  code: string;
  orbitIndex: number;
  offset: number;
}

const CURRENCIES: Currency[] = [
  { symbol: '$', code: 'USD', orbitIndex: 0, offset: 0 },
  { symbol: '€', code: 'EUR', orbitIndex: 0, offset: (Math.PI * 2) / 3 },
  { symbol: '¥', code: 'JPY', orbitIndex: 0, offset: (Math.PI * 4) / 3 },

  { symbol: 'د.ك', code: 'KWD', orbitIndex: 1, offset: 0.4 },
  { symbol: 'د.إ', code: 'AED', orbitIndex: 1, offset: 0.4 + (Math.PI * 2) / 3 },
  { symbol: 'Rs', code: 'PKR', orbitIndex: 1, offset: 0.4 + (Math.PI * 4) / 3 },

  { symbol: '£', code: 'GBP', orbitIndex: 2, offset: 0.9 },
  { symbol: 'Fr.', code: 'CHF', orbitIndex: 2, offset: 0.9 + (Math.PI * 2) / 3 },
  { symbol: 'C$', code: 'CAD', orbitIndex: 2, offset: 0.9 + (Math.PI * 4) / 3 },
];

// Preferred orbit shapes, in units of the globe radius. rx is shrunk automatically
// when the container is too narrow, so nothing is ever clipped.
const BASE_ORBITS = [
  { rx: 1.45, ry: 0.52, tilt: -0.32, speed: 0.00042 },
  { rx: 1.58, ry: 0.58, tilt: 0.28, speed: 0.00036 },
  { rx: 1.38, ry: 0.48, tilt: -0.15, speed: 0.00048 },
];

const MIN_RX = 1.16; // orbit stays at least this far outside the globe (in radii)
const BADGE_W = 68;
const BADGE_H = 32;
const BADGE_MAX_SCALE = 1.07; // largest depth scale used for a badge
const GLOW_PAD = 8; // badge shadow blur

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let rotation = 70;
    let lastTime = performance.now();
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Sizing state, recalculated in resize()
    let width = 0; // canvas drawing width (container + horizontal bleed)
    let height = 0; // canvas drawing height (container + vertical bleed)
    let radius = 0;
    let cx = 0;
    let cy = 0;
    let badgeScale = 1;
    let orbits = BASE_ORBITS.map((o) => ({ ...o }));

    function resize() {
      const rect = container!.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      if (!W || !H) return;

      const dpr = Math.min(window.devicePixelRatio || 1, W < 640 ? 1.5 : 2);

      // Room to the left and right of the column on desktop (the grid gap), so the
      // orbits can be wider than the column without touching the text.
      const bleedX = window.innerWidth >= 1024 ? 24 : 0;

      // 1. The globe fills the full height of the container (equal to the left content).
      const radiusByHeight = (H / 2) * 0.98;
      // 2. ...unless the width cannot hold the globe plus the smallest orbit and a badge.
      const worstBadgeHalf = (BADGE_W / 2) * BADGE_MAX_SCALE + GLOW_PAD;
      const maxCos = Math.max(...BASE_ORBITS.map((o) => Math.cos(o.tilt)));
      const radiusByWidth = (W / 2 + bleedX - worstBadgeHalf) / (MIN_RX * maxCos);
      radius = Math.max(40, Math.min(radiusByHeight, radiusByWidth));

      // Smaller badges on small globes
      badgeScale = clamp(radius / 210, 0.78, 1);
      const badgeHalf = (BADGE_W / 2) * BADGE_MAX_SCALE * badgeScale + GLOW_PAD;

      // 3. Fit each orbit's width to the space available.
      const availableHalfW = W / 2 + bleedX - badgeHalf;
      orbits = BASE_ORBITS.map((o) => {
        const rxMax = availableHalfW / (radius * Math.cos(o.tilt));
        const rx = Math.max(MIN_RX, Math.min(o.rx, rxMax));
        const s = rx / o.rx;
        return { ...o, rx, ry: o.ry * s };
      });

      // 4. Canvas is larger than the container so the atmosphere glow is never cut.
      const bleedY = Math.ceil(radius * 0.18);
      width = W + bleedX * 2;
      height = H + bleedY * 2;

      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      canvas!.style.left = `${-bleedX}px`;
      canvas!.style.top = `${-bleedY}px`;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      cx = width / 2;
      cy = height / 2;

      if (prefersReducedMotion) render(0);
    }

    function smoothstep(edge0: number, edge1: number, value: number) {
      const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
      return t * t * (3 - 2 * t);
    }

    function render(time: number) {
      if (!isVisible || !width) return;

      const delta = Math.min(time - lastTime, 40);
      lastTime = time;

      if (!prefersReducedMotion) {
        rotation += delta * 0.016;
      }

      ctx!.clearRect(0, 0, width, height);

      const currencyRenderList: {
        currency: Currency;
        x: number;
        y: number;
        z: number;
        scale: number;
      }[] = [];

      CURRENCIES.forEach((c) => {
        const orbit = orbits[c.orbitIndex];
        const angle = time * orbit.speed + c.offset;

        const localX = radius * orbit.rx * Math.cos(angle);
        const localY = radius * orbit.ry * Math.sin(angle);

        const cosT = Math.cos(orbit.tilt);
        const sinT = Math.sin(orbit.tilt);

        const x = cx + (localX * cosT - localY * sinT);
        const y = cy + (localX * sinT + localY * cosT);
        const z = -Math.sin(angle); // z > 0: in front of globe; z < 0: behind globe

        const depthScale = z > 0 ? 0.95 + z * 0.12 : 0.75 + (z + 1) * 0.12;

        currencyRenderList.push({ currency: c, x, y, z, scale: depthScale * badgeScale });
      });

      // 1. Back halves of the orbits and the currencies behind the globe
      orbits.forEach((orbit) => {
        ctx!.save();
        ctx!.translate(cx, cy);
        ctx!.rotate(orbit.tilt);
        ctx!.beginPath();
        ctx!.ellipse(0, 0, radius * orbit.rx, radius * orbit.ry, 0, Math.PI, Math.PI * 2);
        ctx!.strokeStyle = 'rgba(242, 190, 44, 0.14)';
        ctx!.lineWidth = 1;
        ctx!.setLineDash([4, 6]);
        ctx!.stroke();
        ctx!.restore();
      });

      currencyRenderList
        .filter((item) => item.z < 0)
        .forEach(({ currency, x, y, scale, z }) => {
          drawCurrencyBadge(ctx!, currency, x, y, scale, 0.45 * smoothstep(-0.18, 0, z));
        });

      // 2. Globe
      const atmosphere = ctx!.createRadialGradient(cx, cy, radius * 0.96, cx, cy, radius * 1.14);
      atmosphere.addColorStop(0, 'rgba(56, 130, 246, 0.35)');
      atmosphere.addColorStop(0.5, 'rgba(37, 99, 235, 0.14)');
      atmosphere.addColorStop(1, 'rgba(6, 11, 22, 0)');
      ctx!.beginPath();
      ctx!.arc(cx, cy, radius * 1.14, 0, Math.PI * 2);
      ctx!.fillStyle = atmosphere;
      ctx!.fill();

      ctx!.save();
      ctx!.beginPath();
      ctx!.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx!.clip();

      const oceanGrad = ctx!.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.08,
        cx,
        cy,
        radius
      );
      oceanGrad.addColorStop(0, '#1d4ed8');
      oceanGrad.addColorStop(0.35, '#1e3a8a');
      oceanGrad.addColorStop(0.75, '#0f2452');
      oceanGrad.addColorStop(1, '#061024');
      ctx!.fillStyle = oceanGrad;
      ctx!.fill();

      const projection = geoOrthographic()
        .scale(radius)
        .translate([cx, cy])
        .rotate([rotation, -18, 0])
        .clipAngle(90);

      const pathGenerator = geoPath(projection, ctx!);

      ctx!.beginPath();
      pathGenerator(landData as unknown as GeoPermissibleObjects);
      ctx!.fillStyle = '#228a56';
      ctx!.fill();
      ctx!.strokeStyle = '#15613c';
      ctx!.lineWidth = 0.5;
      ctx!.stroke();

      const sphereShade = ctx!.createRadialGradient(
        cx - radius * 0.38,
        cy - radius * 0.38,
        radius * 0.05,
        cx,
        cy,
        radius
      );
      sphereShade.addColorStop(0, 'rgba(255, 255, 255, 0.18)');
      sphereShade.addColorStop(0.55, 'rgba(0, 0, 0, 0)');
      sphereShade.addColorStop(0.85, 'rgba(4, 9, 20, 0.45)');
      sphereShade.addColorStop(1, 'rgba(2, 5, 12, 0.88)');
      ctx!.fillStyle = sphereShade;
      ctx!.fill();

      const innerRim = ctx!.createRadialGradient(cx, cy, radius * 0.82, cx, cy, radius);
      innerRim.addColorStop(0, 'rgba(96, 165, 250, 0)');
      innerRim.addColorStop(0.8, 'rgba(96, 165, 250, 0.18)');
      innerRim.addColorStop(1, 'rgba(147, 197, 253, 0.42)');
      ctx!.fillStyle = innerRim;
      ctx!.fill();

      ctx!.restore();

      // 3. Front halves of the orbits
      orbits.forEach((orbit) => {
        ctx!.save();
        ctx!.translate(cx, cy);
        ctx!.rotate(orbit.tilt);
        ctx!.beginPath();
        ctx!.ellipse(0, 0, radius * orbit.rx, radius * orbit.ry, 0, 0, Math.PI);
        ctx!.strokeStyle = 'rgba(242, 190, 44, 0.55)';
        ctx!.lineWidth = 1.25;
        ctx!.stroke();
        ctx!.restore();
      });

      // 4. Front currencies, depth sorted
      currencyRenderList
        .filter((item) => item.z >= 0)
        .sort((a, b) => a.z - b.z)
        .forEach(({ currency, x, y, scale, z }) => {
          const horizonFade = smoothstep(0, 0.18, z);
          const depthOpacity = 0.72 + z * 0.28;
          drawCurrencyBadge(ctx!, currency, x, y, scale, horizonFade * depthOpacity);
        });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    }

    function handleVisibilityChange() {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // ResizeObserver also catches the container changing height when the hero text
    // reflows (web font loads, different screen size), not only window resizes.
    const observer = new ResizeObserver(() => resize());
    observer.observe(container);
    window.addEventListener('resize', resize);

    resize();
    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-visible">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute select-none"
        aria-label="Interactive 3D globe with orbiting global currency nodes"
      />
    </div>
  );
}

function drawCurrencyBadge(
  ctx: CanvasRenderingContext2D,
  currency: Currency,
  x: number,
  y: number,
  scale: number,
  opacity: number
) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  const cornerR = 8;

  ctx.beginPath();
  ctx.roundRect(-BADGE_W / 2, -BADGE_H / 2, BADGE_W, BADGE_H, cornerR);
  ctx.fillStyle = 'rgba(6, 11, 22, 0.88)';
  ctx.fill();

  ctx.strokeStyle = opacity > 0.6 ? '#F2BE2C' : 'rgba(242, 190, 44, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  if (opacity > 0.6) {
    ctx.shadowColor = 'rgba(242, 190, 44, 0.35)';
    ctx.shadowBlur = GLOW_PAD;
  }

  ctx.font = 'bold 13px var(--font-inter, sans-serif)';
  ctx.fillStyle = '#F5CF5C';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(currency.symbol, -14, 0);

  ctx.beginPath();
  ctx.moveTo(0, -9);
  ctx.lineTo(0, 9);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.font = '600 11px var(--font-inter, sans-serif)';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(currency.code, 15, 0.5);

  ctx.restore();
}