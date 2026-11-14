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

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 70; // Start focused on Middle East & Pakistan
    let lastTime = performance.now();
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle tab visibility
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Dynamic sizing
    let width = 0;
    let height = 0;
    let radius = 0;
    let cx = 0;
    let cy = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, rect.width < 640 ? 1.5 : 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      radius = Math.min(width, height) * 0.32;
      cx = width * 0.5;
      cy = height * 0.5;
    };

    resize();
    window.addEventListener('resize', resize);

    // Orbit configurations
    const orbits = [
      { rx: 1.45, ry: 0.52, tilt: -0.32, speed: 0.00042 },
      { rx: 1.58, ry: 0.58, tilt: 0.28, speed: 0.00036 },
      { rx: 1.38, ry: 0.48, tilt: -0.15, speed: 0.00048 },
    ];

    const render = (time: number) => {
      if (!isVisible) return;

      const delta = Math.min(time - lastTime, 40);
      lastTime = time;

      if (!prefersReducedMotion) {
        rotation += delta * 0.016; // Smooth rotation ~ 60fps
      }

      ctx.clearRect(0, 0, width, height);

      // Pre-calculate currency positions
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

        // Elliptical orbit in local plane
        const localX = radius * orbit.rx * Math.cos(angle);
        const localY = radius * orbit.ry * Math.sin(angle);

        // Apply tilt rotation around center
        const cosT = Math.cos(orbit.tilt);
        const sinT = Math.sin(orbit.tilt);

        const x = cx + (localX * cosT - localY * sinT);
        const y = cy + (localX * sinT + localY * cosT);
        const z = -Math.sin(angle); // z > 0: in front of globe; z < 0: behind globe

        const scale = z > 0 ? 0.95 + z * 0.12 : 0.75 + (z + 1) * 0.12;

        currencyRenderList.push({ currency: c, x, y, z, scale });
      });

      // 1. Draw back of orbits and back currencies (z < 0)
      orbits.forEach((orbit) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(orbit.tilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * orbit.rx, radius * orbit.ry, 0, Math.PI, Math.PI * 2);
        ctx.strokeStyle = 'rgba(242, 190, 44, 0.14)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.restore();
      });

      currencyRenderList
        .filter((item) => item.z < 0)
        .forEach(({ currency, x, y, scale }) => {
          drawCurrencyBadge(ctx, currency, x, y, scale, 0.4);
        });

      // 2. Draw Globe (Earth)
      // A. Outer Atmosphere Glow
      const atmosphere = ctx.createRadialGradient(cx, cy, radius * 0.96, cx, cy, radius * 1.14);
      atmosphere.addColorStop(0, 'rgba(56, 130, 246, 0.35)');
      atmosphere.addColorStop(0.5, 'rgba(37, 99, 235, 0.14)');
      atmosphere.addColorStop(1, 'rgba(6, 11, 22, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.14, 0, Math.PI * 2);
      ctx.fillStyle = atmosphere;
      ctx.fill();

      // B. Ocean Sphere
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      // Rich Deep Blue Ocean with upper-left illumination
      const oceanGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.08,
        cx,
        cy,
        radius
      );
      oceanGrad.addColorStop(0, '#1d4ed8'); // Bright sapphire highlight
      oceanGrad.addColorStop(0.35, '#1e3a8a'); // Rich royal blue
      oceanGrad.addColorStop(0.75, '#0f2452'); // Deep ocean navy
      oceanGrad.addColorStop(1, '#061024'); // Dark ocean abyss
      ctx.fillStyle = oceanGrad;
      ctx.fill();

      // C. Continents (Real land from bundled TopoJSON)
      const projection = geoOrthographic()
        .scale(radius)
        .translate([cx, cy])
        .rotate([rotation, -18, 0])
        .clipAngle(90);

      const pathGenerator = geoPath(projection, ctx);

      ctx.beginPath();
      pathGenerator(landData as unknown as GeoPermissibleObjects);
      ctx.fillStyle = '#228a56'; // Rich, vibrant emerald green
      ctx.fill();
      ctx.strokeStyle = '#15613c';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // D. 3D Spherical Shading & Lighting Overlay
      const sphereShade = ctx.createRadialGradient(
        cx - radius * 0.38,
        cy - radius * 0.38,
        radius * 0.05,
        cx,
        cy,
        radius
      );
      sphereShade.addColorStop(0, 'rgba(255, 255, 255, 0.18)'); // Specular highlight
      sphereShade.addColorStop(0.55, 'rgba(0, 0, 0, 0)');
      sphereShade.addColorStop(0.85, 'rgba(4, 9, 20, 0.45)'); // Shadow side
      sphereShade.addColorStop(1, 'rgba(2, 5, 12, 0.88)'); // Spherical edge darkening
      ctx.fillStyle = sphereShade;
      ctx.fill();

      // E. Inner Atmospheric Rim Glow
      const innerRim = ctx.createRadialGradient(cx, cy, radius * 0.82, cx, cy, radius);
      innerRim.addColorStop(0, 'rgba(96, 165, 250, 0)');
      innerRim.addColorStop(0.8, 'rgba(96, 165, 250, 0.18)');
      innerRim.addColorStop(1, 'rgba(147, 197, 253, 0.42)');
      ctx.fillStyle = innerRim;
      ctx.fill();

      ctx.restore(); // Exit sphere clipping

      // 3. Draw front of orbits
      orbits.forEach((orbit) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(orbit.tilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * orbit.rx, radius * orbit.ry, 0, 0, Math.PI);
        ctx.strokeStyle = 'rgba(242, 190, 44, 0.55)';
        ctx.lineWidth = 1.25;
        ctx.stroke();
        ctx.restore();
      });

      // 4. Draw front currencies (z >= 0) with depth sort
      currencyRenderList
        .filter((item) => item.z >= 0)
        .sort((a, b) => a.z - b.z)
        .forEach(({ currency, x, y, scale }) => {
          drawCurrencyBadge(ctx, currency, x, y, scale, 0.95);
        });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[380px] w-full items-center justify-center sm:h-[460px] md:h-[520px] lg:h-[560px]"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
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

  const badgeW = 68;
  const badgeH = 32;
  const cornerR = 8;

  // Badge background (rich glassmorphism)
  ctx.beginPath();
  ctx.roundRect(-badgeW / 2, -badgeH / 2, badgeW, badgeH, cornerR);
  ctx.fillStyle = 'rgba(6, 11, 22, 0.88)';
  ctx.fill();

  // Badge border in gold
  ctx.strokeStyle = opacity > 0.6 ? '#F2BE2C' : 'rgba(242, 190, 44, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Subtle gold drop shadow on front items
  if (opacity > 0.6) {
    ctx.shadowColor = 'rgba(242, 190, 44, 0.35)';
    ctx.shadowBlur = 8;
  }

  // Symbol (Left in bright gold)
  ctx.font = 'bold 13px var(--font-inter, sans-serif)';
  ctx.fillStyle = '#F5CF5C';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(currency.symbol, -14, 0);

  // Divider
  ctx.beginPath();
  ctx.moveTo(0, -9);
  ctx.lineTo(0, 9);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Code (Right in crisp white)
  ctx.font = '600 11px var(--font-inter, sans-serif)';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(currency.code, 15, 0.5);

  ctx.restore();
}
