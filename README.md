# CoreSolutionLabz — Corporate Website

A premium, fully responsive corporate marketing site for **CoreSolutionLabz**, built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Next.js 15** — App Router, Server Components, Metadata API
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** — CSS-first theme configuration (`src/app/globals.css`)
- **Framer Motion** — scroll reveals, page transitions, mobile menu
- **Lenis** — smooth scrolling
- **Lucide React** — iconography
- **next/font** — self-hosted Manrope (headings) and Inter (body) with `display: swap`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project Structure

```
src/
  app/
    layout.tsx          Root layout: fonts, metadata, providers, header/footer
    page.tsx             Homepage — composes all sections
    globals.css          Design tokens (@theme) + base styles
    sitemap.ts / robots.ts
    privacy-policy/      Static legal page
    terms-of-service/    Static legal page
  components/
    layout/              Header, MobileMenu, Footer, PageLoader
    providers/            SmoothScrollProvider (Lenis)
    sections/             One component per homepage section
    ui/                   Reusable primitives (Button, Container, SectionHeading, Reveal)
    icons/                 Custom social icons (LinkedIn/X/GitHub — not shipped by lucide-react)
  lib/
    data.ts               Single source of truth for site copy/content
    utils.ts              `cn()` classname helper

public/
  assets/
    logo/                 Brand logo + icon variants (full color, dark-bg, navy, white)
    illustrations/        Hero + service illustrations (isometric brand artwork)
    patterns/              Background pattern (used at 3–5% opacity)
    brand/                 Office mockup, business card, letterhead, brand book cover
```

## Design System

Defined in `src/app/globals.css` via Tailwind's `@theme` directive:

| Token | Value | Usage |
|---|---|---|
| `primary` | `#0F172A` | Headings, dark surfaces |
| `secondary` | `#2563EB` | Links, primary actions, hover states |
| `accent` | `#0EA5A5` | Small highlights, check marks, icons |
| `surface` | `#F8FAFC` | Section backgrounds |
| `text` | `#111827` | Body copy |
| `muted` | `#64748B` | Secondary copy |
| `border` | `#E2E8F0` | Hairlines, card borders |

- **Container:** `max-w-[1320px]` via the `.container-app` utility
- **Section rhythm:** `.section-padding` → 72px mobile, 120px desktop
- **Headings:** Manrope (`font-heading`) · **Body:** Inter (`font-body`)

## Content

All copy, service descriptions, stats, testimonials, FAQs, and nav links live in `src/lib/data.ts`. Update that file to change site content without touching component markup. Testimonials are illustrative placeholders — swap in real client quotes once available.

## Brand Assets

All imagery is sourced from the approved CoreSolutionLabz brand kit (no AI-generated or placeholder graphics). Files were reorganized into a clean, descriptive folder structure under `public/assets/` for maintainability, but are otherwise unmodified from the originals.

## Accessibility

- Skip-to-content link
- Visible focus rings (`:focus-visible`)
- `aria-label` / `aria-expanded` on interactive controls
- Mobile menu: focus is moved into the dialog on open and restored to the trigger on close; the rest of the page is marked `inert` while the drawer is open
- Respects `prefers-reduced-motion` (disables Lenis smooth scroll and the intro loader animation)
