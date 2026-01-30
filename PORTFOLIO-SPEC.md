# Amna Shahid — Interior Designer Portfolio — Spec & Steps

A single-page landing portfolio with consistent colors, typography, animations, and sections. Use this doc as the source of truth while building.

---

## 1. Design direction

### Color palette (choose one and stick to it)

**Option A — Warm**
| Token    | Hex       | Use              |
|----------|-----------|------------------|
| `--bg`   | `#F8F6F3` | Page background  |
| `--bg-alt` | `#EDE9E3` | Section alt / CTA |
| `--text` | `#2C2C2C` | Headings, body   |
| `--text-muted` | `#6B6B6B` | Secondary text |
| `--accent` | `#C17F59` | CTAs, links, highlights |
| `--accent-hover` | `#A86A47` | Hover states |
| `--border` | `#E0DBD4` | Dividers, cards |

**Option B — Cool**
| Token    | Hex       | Use              |
|----------|-----------|------------------|
| `--bg`   | `#FAFAF8` | Page background  |
| `--bg-alt` | `#F0EEEA` | Section alt / CTA |
| `--text` | `#3D3D3D` | Headings, body   |
| `--text-muted` | `#6B6B6B` | Secondary text |
| `--accent` | `#9CAF88` | CTAs, links (sage) |
| `--accent-hover` | `#7D9370` | Hover states |
| `--border` | `#E5E2DD` | Dividers, cards |

### Typography

- **Headings:** One display font (e.g. Playfair Display, Cormorant Garamond) — use `next/font/google` in `layout.tsx`.
- **Body:** One clean sans (e.g. DM Sans, Outfit) — use `next/font/google` in `layout.tsx`.
- Apply via CSS variables in `globals.css` and `@theme` so all sections use the same fonts.

### Spacing & layout

- **Section padding:** Same vertical rhythm — e.g. `py-20 md:py-28` for each section.
- **Container:** `max-w-6xl mx-auto px-6` (or `px-8`) for all sections so alignment is consistent.
- **Gaps:** Use consistent gaps (e.g. `gap-8` or `gap-12`) between section content blocks.

---

## 2. Sections (required)

| # | Section | Purpose | Content / behavior |
|---|---------|---------|--------------------|
| 1 | **Hero** | First impression | Full-height or near full-height. “Amna Shahid” + “Interior Designer” (or short tagline). Optional subtle background image or gradient. CTA: “View work” or “Let’s work together” (smooth scroll to Work or CTA). |
| 2 | **About** | Who she is | Short bio, photo, philosophy (e.g. “Spaces that tell your story”). Concise copy; one strong image. |
| 3 | **Work** | Portfolio | Grid of projects (image + title + optional category). Cards link to detail or lightbox. Hover: slight scale + shadow transition. |
| 4 | **Study** | Education / approach | Qualifications, courses, or “how I work”. Two-column or list with icons. |
| 5 | **Let’s Work Together** | Contact / CTA | Headline + short line (e.g. “Ready to transform your space?”). Email, contact form, or “Book a consultation” button. Visually distinct (e.g. darker or accent background) but same palette. |
| 6 | **Footer** | Legal + links | Name, copyright. Optional: Instagram/LinkedIn, email. Same font and colors as rest of page. |

---

## 3. File structure

```
amna-portfolio/
├── app/
│   ├── globals.css          # CSS variables, @theme, scroll-behavior
│   ├── layout.tsx           # Fonts, metadata (Amna Shahid | Interior Designer)
│   ├── page.tsx             # Renders: Hero, About, Work, Study, LetsWorkTogether, Footer
│   └── components/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Work.tsx
│       ├── WorkCard.tsx      # Optional: reusable project card
│       ├── Study.tsx
│       ├── LetsWorkTogether.tsx
│       └── Footer.tsx
├── public/
│   ├── amna.jpg             # About section photo (add when ready)
│   └── work/                # Project images (01.jpg, 02.jpg, …)
└── PORTFOLIO-SPEC.md        # This file
```

---

## 4. Colors in code (`globals.css`)

- Define all palette tokens under `:root` (see Section 1).
- In Tailwind v4 `@theme`, map to Tailwind colors, e.g.:
  - `--color-bg: var(--bg);`
  - `--color-text: var(--text);`
  - `--color-accent: var(--accent);`
  - etc.
- Use only these tokens in components (e.g. `bg-bg`, `text-text`, `text-accent`) — no arbitrary hex in JSX for consistency.

---

## 5. Animations & transitions

- **Scroll-in:** Fade-in + slight upward motion when section enters view. Use same duration (e.g. 0.6s) and easing (e.g. `ease-out`) for every section. Option: Framer Motion or IntersectionObserver.
- **Hover:** Buttons and cards: `transition-all duration-300 ease-out`. Cards: `hover:scale-[1.02]` and `hover:shadow-lg` (or your chosen shadow).
- **Page load:** Hero: stagger name → tagline → CTA with short delay (e.g. 0.1–0.2s).
- **Smooth scroll:** `scroll-behavior: smooth` on `html` in `globals.css`. Use `id` on sections (e.g. `id="work"`, `id="lets-work"`) and anchor links for “View work” / “Let’s work together”.

---

## 6. Technical notes

- **Stack:** Next.js 16 (App Router), React 19, Tailwind v4.
- **Images:** Use `next/image`; place files in `public/` (e.g. `public/amna.jpg`, `public/work/01.jpg`).
- **Metadata:** In `layout.tsx`, set `title` and `description` to “Amna Shahid | Interior Designer” and a short portfolio description.
- **Single page:** All sections on `app/page.tsx`; no extra routes required for this structure.

---

## 7. Build steps (order of work)

1. **Setup**
   - [ ] Pick palette (Option A or B) and add variables to `globals.css` + `@theme`.
   - [ ] Add Google fonts in `layout.tsx` and wire to `globals.css` / Tailwind.
   - [ ] Set `scroll-behavior: smooth` on `html` in `globals.css`.
   - [ ] Update `metadata` in `layout.tsx` (title, description).

2. **Layout & sections**
   - [ ] Create `app/components/` and section components (Hero, About, Work, Study, LetsWorkTogether, Footer).
   - [ ] In each section, use same container: `max-w-6xl mx-auto px-6` and section padding `py-20 md:py-28`.
   - [ ] Add section IDs: `id="hero"`, `id="about"`, `id="work"`, `id="study"`, `id="lets-work"`, `id="footer"` for smooth scroll.
   - [ ] Compose all sections in `app/page.tsx` in order.

3. **Content & styling**
   - [ ] Hero: headline, tagline, CTA links to `#work` and `#lets-work`.
   - [ ] About: short bio, placeholder or real image, same typography and colors.
   - [ ] Work: grid of project cards (use `WorkCard.tsx` if desired); same hover transition on all cards.
   - [ ] Study: headings and list/columns; same text and accent colors.
   - [ ] Let’s Work Together: headline, CTA button/link, optional form or email link; use `--bg-alt` or `--accent` for background.
   - [ ] Footer: name, copyright, optional social/email links; use `--text-muted` and same font.

4. **Animations**
   - [ ] Add scroll-in animation (same duration/easing) for each section.
   - [ ] Add hover transitions to buttons and Work cards.
   - [ ] Optional: stagger Hero content on load.

5. **Polish**
   - [ ] Replace placeholders with real copy and images.
   - [ ] Run through checklist below.

---

## 8. Consistency checklist

Before considering the page “done”, verify:

- [ ] One palette only — all sections use tokens from `globals.css` / `@theme` (no random hex in JSX).
- [ ] One heading font and one body font used everywhere.
- [ ] Same section padding and max-width on Hero, About, Work, Study, CTA, Footer.
- [ ] Same transition duration and easing on all interactive elements.
- [ ] Scroll-in animation uses same timing for every section (and optionally for Work cards).
- [ ] Footer uses same `text-muted` and link styles as the rest of the site.
- [ ] All CTA links smooth-scroll to the correct section (`#work`, `#lets-work`).

---

*Last updated: Jan 2026. Use this file as the single reference for structure and consistency.*
