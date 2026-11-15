# Sohwaz Financial Consultants: round 2 polish

For an AI coding agent. The first round is done and works. This round makes the site look premium, professional, modern and clean. Same rules as round 1 (`INSTRUCTIONS.md`): work on a new branch, make targeted changes, reuse existing components and tokens, keep shared logic in one place, and **do not rewrite client copy** (`CONTENT.md`). Layout, spacing, structure and styling may change. Words may not.

Live site: https://sohwaz-financial-consultancy.vercel.app/

Start by taking screenshots of all pages at 390, 768 and 1440 px so you can compare before and after. Some items below were spotted from page text, not from the rendered page, so confirm each one in the browser before fixing (marked "verify").

## 1. Logo

1. **Remove the logo from the Home hero banner.** The hero shows the globe, headline, buttons and chart only.
2. **Use the polished logo lockup** (the version the agent made for the hero banner, which the client likes) **in the header** on every page. Keep the existing header height and make it look balanced.
3. **Footer and dark areas:** the eagle is black, so it disappears on dark backgrounds. Put the logo on a **white (or very light) rounded badge** wherever it sits on a dark background, especially the footer. Use one shared `Logo` component with a `onDark` variant, not per-place hacks.
4. Verify: the wordmark shows "SOHWAZ Financial Consultants" with a space (the page text suggests "SOHWAZFinancial" in the header and footer). Fix the spacing between the two parts if it is missing.

## 2. Globe and orbiting currencies (Home)

Problem: the currency symbols get **cut off** when they reach the edge of their box and **pop in** when they appear. Cause: the drawing area is smaller than the orbit, and `overflow: hidden` clips it. Fix it properly:

- Draw the globe and the currencies in **one canvas** (or one WebGL scene) that is **larger than the biggest orbit plus the symbol size plus glow**. Add padding on all sides. Set `overflow: visible` on every wrapper. Make sure no parent clips it.
- Give each currency a continuous 3D position on a tilted elliptical orbit. Compute depth from it. Scale size and opacity with depth, so symbols at the back are smaller and dimmer, and symbols at the front are larger and brighter. No abrupt appear or disappear anywhere.
- When a symbol goes **behind the globe**, hide it by the globe's actual shape (occlusion) with a short soft fade, so it looks like it passes behind. When it comes round again it fades in softly.
- Use different speeds and different tilts for 2 or 3 orbits (inner orbit faster, outer slower), with constant, smooth angular speed. Use `requestAnimationFrame` with delta time, not fixed steps.
- Make each currency a refined **glass-style chip**: symbol plus code, a thin gold border, a faint blur or glow. Draw the orbit paths as thin, low-opacity gold ellipses that fade at the back.
- Keep earlier rules: blue ocean, green land, real continents from bundled data, atmosphere glow, reduced-motion static frame, pause when off-screen or the tab is hidden, handle resize and high-DPI, lighter on phones.
- Test at 390, 768 and 1440 px. Nothing may touch or cross the edge of the container, the header, or the text and buttons beside it.

## 3. Inner-page heroes (Services, Consultancy, About, Contact, Terms)

1. **Spacing:** remove the extra empty space under the tagline. Check for stray `min-height`, `padding-bottom`, `margin-bottom` or an empty block under the subtitle. Use one hero spacing rule (shared component) with balanced top and bottom padding. The hero should not push the first section far down the page.
2. **One image only:** the pages appear to carry two images in the hero (an unlabelled image and the "Stewardship Emblem"). Keep a single hands-and-dollar image per hero.
3. **Hands-and-dollar image must blend with the background.** It currently looks boxed and cheap.
   - Use a transparent **SVG** (or transparent PNG) with no white box and no hard edges.
   - Draw it in the brand palette (gold and soft light tones) on the hero background. Use a CSS mask or gradient so its edges fade smoothly into the hero background.
   - Place it on the right side of the hero (desktop), partly behind the heading area, with controlled opacity so the title stays readable. On phones, place it smaller, above or behind the title, still fading at the edges.
   - Give it a very slow, subtle float or glow only if it stays elegant, and respect reduced motion.
4. Breadcrumbs: keep them small and subtle, or remove them if they add clutter. Do not duplicate the H1.
5. Give images proper `alt` text (or empty alt if decorative). Several images currently have none.

## 4. Cards (all pages)

Problems: cards only hold text, so they look plain. Content length differs, which leaves empty space in the shorter cards. Odd counts (for example 5) leave the last row lopsided.

1. **Layout: use flex, not grid.** `display: flex; flex-wrap: wrap; justify-content: center; gap: <token>`. Set each card to a fixed share of the row, for example `flex: 0 1 calc((100% - 2 * gap) / 3)` on desktop, 2 per row on tablet and 1 on phones. Then a last row with 1 or 2 cards is **centred**. Build this as one shared `CardGrid` component and use it for every card group.
2. **Equal heights per row:** `align-items: stretch` and make each card a flex column so the body fills the space. Align footers and links to the bottom of the card so rows look even. Where the Services "Infrastructure & Enabling Functions" group has one short card (Real Estate) and two long ones (HR, IT), the layout must still look balanced.
3. **Better card design**, without changing the words:
   - Consistent padding, radius and border or subtle shadow.
   - A small icon badge at the top (simple line icons: treasury, ALM, ALCO, debt, real estate, HR, IT, and so on), in gold on a soft tinted square.
   - Heading in a clear weight, a thin divider line, then body text with comfortable line height and a readable size.
   - Gentle hover state (slight lift, border turns gold). Visible keyboard focus.
   - If a card contains label-and-text pairs (for example "Treasury & Asset-Liability Management: Directed..."), show the label as bold on its own line or as a small heading, with proper spacing. Page text suggests labels currently run into the text ("...Management:Directed"). Verify and fix.
4. Apply the same card system to: Services (frameworks, qualified-personnel cards), Consultancy (5 practices, 4 "Expert Guidance" cards), About (sector groups, core values), Home (service cards and "Who we advise").
5. Keep heading order valid: H1, then H2, then H3, then H4. The "Driven by Qualified Personnel" cards currently jump from H2 to H4.

## 5. Other improvements found on review

**Content that is not in the client's document (confirm or remove):**
- **Contact page "Business hours"** (Mon to Fri open, Sat and Sun closed, no time zone): not in the doc and may not suit Kuwait and Pakistan work weeks. Remove it unless the client approves.
- **LinkedIn links** (header, contact, footer): the URL slug contains "sohwaz-holdings". Remove the link, or keep only with a confirmed real URL.
- **Legal notice repeated twice** on the Contact page (once in the body, once in the footer). Keep one on Contact: use the small fine print at the bottom of the page and drop the repeat, or drop the footer one on that page only.
- **Home page:** it still has sections from the old site (eight service cards with "Learn more" links, "Who we advise", "Advisory approach", the pull quote, the closing CTA). The eight service cards do not match the new service list, and "Learn more" must not lead anywhere that no longer exists. Either map them to the new service list and link them to `/services`, or remove the links. Do not rewrite their text. Report to me which old Home sections should stay.
- **Footer description** lists services and regions in different wording from the client's doc (for example "Debt Restructuring" on one page and "Credit & Restructuring" on another, and HR and IT where the page has none). Make the footer text match the doc.
- **Hours, phone, extra emails:** the client removed the phone number. Keep it that way.

**Bugs to verify and fix:**
- **Home chart:** an axis label reads "KWKWCA", which looks garbled. Check the labels. The `[Value]` placeholders stay (client decision).
- **Terms page:** raw metadata (og, twitter or front-matter text) may be showing as visible text at the top. The table of contents numbering does not match the section headings: it lists "Overview & Acceptance" as item 1, but no heading has that name. Make the table of contents match the real headings.
- **Metadata:** an empty `og:description` and an empty `next-size-adjust` tag. Give every page its own `<title>`, meta description and Open Graph tags using the company name, and generate the Open Graph image from the logo.
- **Images:** the same photo file is reused in the hero, intro and audience sections on Home. Use different images or remove the repeats. Compress and serve images through the framework's image component.
- **Capitalisation:** make the "Request a Consultation" button text consistent everywhere (header and closing CTA currently differ in case). Same for card titles (for example "Treasury, ALCO and ALM functions").

**Polish for a premium feel:**
- One spacing scale and one type scale, applied to all pages. Consistent section padding, a max content width (about 1200 px), body text at about 65 characters per line.
- Sticky header with a subtle backdrop blur, a clear active state for the current page, and a clean mobile menu (check it at 390 px).
- Buttons: consistent primary (gold) and secondary (outline) styles with hover, focus and pressed states.
- Subtle scroll-in animation for sections (fade and small rise), disabled for reduced motion. Content must still be visible if scripts fail.
- Form: clear labels, visible focus, inline validation messages, a clear success state after submit, and no loss of existing submit behaviour. Do not change where submissions go.
- Footer: tidy columns, the logo on a white badge, a single legal notice in small print, consistent link styles.
- Terms page: add a clean reading layout (readable width, spacing between numbered sections). Do not change the legal wording.
- Performance and accessibility: pass Lighthouse checks for accessibility and best practices, fix colour contrast on gold-on-dark and grey-on-dark text, and check there is no horizontal scroll at any width.

## 6. Things NOT to change

- Client copy in `CONTENT.md`. If a phrase looks odd (for example the About profile switches between "this executive" and "they"), leave it and list it in the PR notes for the client.
- The `[Value]` placeholders in the Home chart.
- The 5-page structure and routes from round 1.
- The legal notice wording, including the 5 business day line. (Suggest to the client in the PR notes that a lawyer reviews the Terms and the "deemed declined" wording.)

## 7. Checks before handing back

- Lint, typecheck and production build pass.
- Screenshots of all pages at 390, 768 and 1440 px, before and after, in the PR.
- Globe test: watch a full rotation at 3 sizes. No symbol is clipped, cut or popping at any point.
- Card test: every card group with 1, 2, 3, 4, 5 and 7 items stays centred, with equal-height cards per row.
- Footer logo is visible on the dark background. Home hero has no logo.
- Search the source for `Holdings`, `Showaz`, `[Client logo]` and leftover `Management` or `Markets` links.
- PR description lists: what changed, the open questions from section 5, and anything skipped.
