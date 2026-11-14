# Sohwaz Financial Consultants: website update instructions

For an AI coding agent. Update the **existing** site (deployed at https://sohwaz-holdings-u2cy.vercel.app/). Do not rebuild it from scratch. Keep its framework, components, styling system and conventions.

Files in this bundle:
- `CONTENT.md`: the client's copy, verbatim. This is the only source of text.
- `assets/eagle-logo.jpg`: company logo (eagle "S", black and gold, white background).
- `assets/ceo-sohail-nawaz.jpg`: CEO photo for the About page.
- `assets/eups-logo.jpeg`: Eastern United Petroleum Services logo, 200x200 px.
- `assets/business-card-watermark-reference.jpg`: photo of the client's business card. The three-hands-and-dollar-sign graphic (circled in blue) is the image to reproduce for the inner-page heroes.

## 0. Ground rules

1. Work on a new git branch. Do not push to the main or production branch. Open a pull request or leave the branch for review.
2. Do not write, rewrite, shorten or "improve" any copy. Use `CONTENT.md` as is. Allowed changes are in section 7 only.
3. Make targeted changes that reuse existing components and tokens. Keep shared logic (header, footer, layout, page shell, inner-page hero) in one place each, not copied per page.
4. Before editing, read the repo: framework and router, layout and header/footer components, the services pages, the contact form, global styles. Report the stack you found.
5. If the repo contradicts this brief, stop and list the conflicts instead of guessing.

## 1. Final site map (5 pages plus legal)

| Nav label | Route | Content source in CONTENT.md |
|---|---|---|
| Home | `/` | hero and globe (section 3), liquidity overview (keep as is) |
| Services | `/services` | "When you tap on Explore Our Services..." intro, "Specialized Advisory Frameworks", "Driven by Qualified Personnel" |
| Consultancy | `/consultancy` | "Consulting Services" (all six practices), "Expert Guidance. Actionable Strategy." block, "Consultancy Delivered Professionally" (EUPS) |
| About | `/about` | "About:" Executive Profile, Core Sectors, "Core Values" |
| Contact | `/contact` | "Contact Us:" form and legal notice |
| (footer link only) | `/terms` | "Terms of Service & Advisory Disclaimer" |

Keep the existing `/privacy` page and link. The consent line in the contact form refers to it.

Remove from the nav: **Management**, **Markets**, and the eight service sub-pages (Real Estate, Treasury, Investment & Portfolio, Corporate Financing, Debt Restructuring, Regulatory Compliance, HR, IT).
- Add redirects so old URLs do not 404: `/management` to `/about`, `/markets` to `/`, every old `/services/<slug>` to `/services`.
- Remove deleted pages from the sitemap and any `generateStaticParams`/route lists.
- The header "Request a Consultation" button stays and points to `/contact`.

## 2. Branding, applied everywhere

- Company name is **Sohwaz Financial Consultants**. Replace "Sohwaz Holdings" and every variant (SOHWAZ Holdings, Showaz, SHOWAZ) in: header wordmark, footer, page `<title>` and meta descriptions, Open Graph tags, JSON-LD, alt text, form consent text, pull quotes, image filenames shown to users, and `package.json` metadata if user-facing. Search the whole repo case-insensitively for `holdings`, `showaz`, and `sohwaz` and review every hit.
- Header wordmark reads **SOHWAZ FINANCIAL CONSULTANTS**, with the eagle logo, on **every page**. The logo links to `/`.
- Replace the old logo image with `assets/eagle-logo.jpg`. The white background will look wrong on a dark header, so either convert to a transparent PNG/SVG (preferred: remove the white, keep black and gold) or place it on a white or light chip. Also generate the favicon and Open Graph image from it. Save optimised copies under the repo's public/assets folder.

## 3. Home page

1. **Hero globe (new).** A globe that rotates slowly and automatically, with currency symbols orbiting around it. This is the client's own idea. It must look polished and make a strong first impression ("demands respect", "dashing", "eye catcher").
   - **Globe colours (client requirement):** ocean is **blue** and land is **green**, so it reads clearly as Earth. Use rich, deep tones that suit the black and gold branding: deep blue ocean with a lighter blue rim glow, and green continents. Add subtle shading (a light source from one side, a soft atmosphere glow) so it looks 3D and premium, not flat.
   - **Land shapes:** the continents must be real. Bundle world land data in the repo (for example the `world-atlas` land TopoJSON with `topojson-client`, or a small pre-built equirectangular land mask or texture saved in `public/`). Do not fetch it from a CDN at runtime. Render it with a rotating orthographic projection (canvas 2D with `d3-geo`, or a textured sphere in WebGL). Do not use a dot-only or wireframe globe.
   - Implement with canvas or WebGL. If you add a library, pin an exact version and keep it small.
   - Orbiting currencies: use the set already on the site (USD, EUR, JPY, CAD, KWD, GBP, CHF) and add PKR and AED. Show symbol and code. Place them on tilted orbital paths, with the ones at the back smaller and dimmer.
   - The orbiting currency symbols and rings use the logo's gold so they stand out against the blue and green globe. The globe is the visual focus. The headline and buttons must stay readable over the animation.
   - Rotation stays slow and smooth at 60 fps. Respect `prefers-reduced-motion` (render a static frame), pause when the tab is hidden, handle resize and high-DPI screens, and keep it light on phones (fewer points, lower pixel ratio).
   - The logo is shown larger on this page than on the others, as is the heading type.
2. **No hands-and-dollar image on Home.** The globe is the hero there.
3. **Hero buttons.** Keep "Request a consultation" (to `/contact`). "Explore our services" goes to `/services`, where the page opens with the services intro paragraph from `CONTENT.md`. Do not change their labels.
4. **Group liquidity overview:** leave exactly as it is, including the `[Value]` placeholders (client decision).
5. **Remove** the client-logos section ("[Client logo]" placeholders).
6. **Remove** the four-person Leadership section with placeholder profiles. Leadership content now lives only on About, as the CEO profile. The client does not want any team shown anywhere.
7. Other existing Home sections (market advisory intro, service cards, "Who we advise", advisory approach, quote): if they link to deleted pages, repoint the links to `/services` or `/consultancy`. Do not rewrite their text. List in your PR notes any section whose text clashes with the new content so the client can decide. Replace "Sohwaz Holdings" in the pull quote attribution.

## 4. Hands-and-dollar hero image (all pages except Home)

- This is **not a watermark and not a faded background**. It is a normal, clearly visible **image in the hero section** of Services, Consultancy, About, Contact and Terms. Home does not use it because it has the globe.
- The image is the **three hands around a dollar sign** from the business card photo.
- Preferred source is the client's original file (made by "Pasha bhai"). If it is not in the repo, recreate it as an **original SVG** that matches the card closely (three open hands arranged around a central `$`). A near match is fine ("19/20 difference is fine"). On the card it is a light grey line drawing. For the hero, render it crisply in the brand palette (gold and light tones that work on the site's hero background). Do not trace the eagle logo for it.
- Build it as one shared hero component or layout slot that every inner page uses, so the image sits in the same place on each page: beside or behind-to-the-side of the page title, not under body text. Do not repeat the markup per page.
- Make it responsive: on large screens it sits beside the heading, and on phones it stacks above or below the heading at a sensible size. Give it `alt=""` (decorative) or a short alt text, and make sure it does not push the page title below the first screen.

## 5. Page notes

**Services:** the intro paragraph first, then "Specialized Advisory Frameworks" with the two groups ("Capital, Liquidity & Governance", "Infrastructure & Enabling Functions") and their items, then "Driven by Qualified Personnel" and its three bullets.

**Consultancy:** the six practices from "Consulting Services" in the doc's order: Treasury, ALCO and ALM functions; Real Estate Advisory; Credit & Restructuring; Portfolio Management Advisory; Governance, Risk & Compliance (GRC). Then the "Expert Guidance. Actionable Strategy." block with its four items. Then "Consultancy Delivered Professionally" with the EUPS paragraph and `assets/eups-logo.jpeg`. The logo is only 200x200 px, so display it at 200 px or smaller and do not upscale. If the client sends a better file later, swap it in.
- Note: the doc heads the fourth practice (the portfolio one) as "Credit & Restructuring", a copy and paste error, since the text underneath is about Portfolio Management Advisory. Use **Portfolio Management Advisory** as its heading and mention this in the PR notes.

**About:** CEO only. Nothing about a team, staff, associates or contractors.
- Photo: `assets/ceo-sohail-nawaz.jpg`. Crop to a clean portrait, keep faces unaltered, give it a proper `alt`.
- Name **Sohail Nawaz**, title **Founder & CEO**, then the "Executive Profile" text, "Core Sectors & Executed Capabilities" groups, and "Core Values", as written in `CONTENT.md`.
- Remove the old Management page and any leadership cards.

**Terms (`/terms`):** the full "Terms of Service & Advisory Disclaimer" (the intro plus sections 1 to 4) as written. Link it from the footer.

## 6. Contact page and footer

**Contact:**
- Keep the existing form and its design: heading "Send an enquiry", the intro line, fields (Full name*, Company optional, Work email*, Service of interest*, How can we help?*), consent checkbox, "Your enquiry is confidential.", and the "Submit enquiry" button. Wording comes from `CONTENT.md`.
- **Remove the phone number** from the contact details.
- Show these email addresses as selectable text: `sohwazfincons@gmail.com`, and the domain email already used on the site (`enquiries@sohwaz.com`). Confirm with the client that this is the second address they meant. `mailto:` links are fine as a convenience, but the address must be visible.
- Consent text names **Sohwaz Financial Consultants** and links to `/privacy`.
- Keep existing form handling and validation. Do not change where submissions go without asking.
- Disclaimer ("Legal Notice & Enquiry Policy") appears as **small fine print at the bottom** of the page, using the doc's text.

**Footer (all pages), based on the new doc:**
- Logo and the name Sohwaz Financial Consultants, links to the 5 pages, Terms, Privacy, the two emails, and the small fine-print Legal Notice.
- Region wording follows the doc: **Middle East and Pakistan**. Remove the old "Kuwait, UAE and Bahrain" tagline and the Canada reference where it appears in footer text.
- Remove the bracketed regulatory-status placeholder, the "Design System" link, and the old four-column link lists that point to deleted pages. Keep the copyright line (2026) with the new company name. If a LinkedIn link exists, keep it only if its URL is real and not a placeholder.

## 7. Allowed text edits to the client copy

Only these, and list each one in the PR description:
1. Company-name spelling: "Showaz", "SHOWAZ" and "Showaz Financial Company" become "Sohwaz Financial Consultants" (the client chose this name for use everywhere). In the legal notice this also means "Showaz Financial Company" becomes "Sohwaz Financial Consultants". Everything else in the notice stays exactly as written, including the five (5) business day wording.
2. The header line in the doc says "SHOWAZ FINANCIAL CONSULTANTS": render it as SOHWAZ FINANCIAL CONSULTANTS.
3. The fourth practice heading, as noted in section 5.
4. Headings may be split across lines, text sizes and punctuation tuned to fit the design, but not the words.
5. The first line of the doc, "(Updated version 08 Nov 2026)", and the instruction lines addressed to the developer ("Home Page", "Header will show as...", "Anas below keep it same...", "Top of Form", "Bottom of Form", "Disclaimer: ( will be at the bottom in small fine print)") are directions, not website copy. Do not publish them.

## 8. Quality checks before handing back

- `npm install` (or the repo's package manager), then lint, typecheck and production build all pass.
- Every nav link, footer link and redirect works. No page links to a removed route. No 404s in the browser console.
- Search the built output and source for `Holdings`, `Showaz`, `SHOWAZ`, `[Client logo]` and "Management" in nav. Only intended hits remain (the `[Value]` placeholders on Home are intentional).
- Check at 390 px, 768 px and 1440 px: no horizontal scroll, logo and wordmark fit in the header, the globe is not clipped, the hero image sits cleanly beside the title without crowding it, the About photo is cropped well.
- Check light and dark themes if the site supports both.
- Check reduced-motion behaviour and that the globe uses no more than a few percent CPU at idle.
- Take screenshots of all 5 pages plus Terms at desktop and phone widths and attach them to the PR.
- In the PR description, list: what changed, the section 7 text edits, the open questions below, and anything you chose not to do.

## 9. Open questions to report, not to guess

1. Second contact email: is it `enquiries@sohwaz.com`?
2. Is "Explore our services" meant to open the Services page (assumed), or a section or panel on Home?
3. Does the client have the original hands-and-dollar image file and a higher-resolution EUPS logo?
4. Should the Home sections that remain from the old site (market advisory intro, service cards, "Who we advise", approach, pull quote) stay, or should Home be hero and liquidity overview only?
5. Is the legal notice's "deemed declined after 5 business days" wording approved by the client's lawyer? It is used exactly as written.
