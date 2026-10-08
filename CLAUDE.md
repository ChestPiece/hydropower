# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Package manager is **bun** (`bun.lock`). `package.json` still says `pnpm`, so ignore that field.
- `bun install`, `bun run dev`, `bun run build`, `bun run start`.
- There are no lint or test scripts, so there is no single-test command.
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `bun run build` does not catch type errors. `typescript` is not installed in `node_modules`, so `npx tsc` will not work until you `bun add -d typescript`.

## Architecture
- Single-route Next.js 16 App Router site (React 19, Tailwind v4 imported but barely used). `@/*` maps to the repo root.
- `app/page.tsx` composes the sections from `components/site/` in order: SiteHeader, Hero, Capabilities, EquipmentShowcase, TaglineReveal, Applications, Process, RequestSection, Visit, ContactClose, SiteFooter, MobileActionBar, ScrollReveal.
- Styling is hand-written semantic CSS in `app/globals.css`, driven by design tokens in root `tokens.css` (imported at the top of globals.css). All colors are OKLCH and all fonts go through tokens (`--color-*`, `--font-*`, `--space-*`, `--text-*`, `--rule-*`, `--ease-*`, `--dur-*`). Add or change tokens in `tokens.css`; don't write raw hex or `font-family` values in component CSS.
- Fonts (`app/layout.tsx`, `next/font`): Manrope (display and body) and IBM Plex Mono (labels, part numbers), as the owner brief specifies. `tokens.css` maps them to `--font-display/body/outlier`.
- The design was produced with the Hallmark skill: macrostructure Catalogue, N7 slab nav, Ft1 mast-headed footer, custom "Spec Sheet" theme anchored on the brand orange. The stamp comment at the top of `globals.css` and `.hallmark/log.json` record the picks. Future Hallmark runs read them to rotate choices. Hallmark rules in force: no eyebrow kickers, no italic headings, buttons and nav links never wrap (`white-space: nowrap`), accent used sparingly, no invented metrics or testimonials.
- `lib/contact.ts` is the single source of truth for phone, WhatsApp (Kannan Kanda Samy's number, not the company line), email, address, hours and map coordinates. Import `contact` instead of hard-coding. `app/layout.tsx` builds LocalBusiness JSON-LD from it.
- Content rule (owner brief): no invented years, certifications, logos, testimonials, ratings, brands, delivery times or stats, and nothing taken from similarly named "Hydropower" companies. Unconfirmed items are listed in `docs/owner-handover.md`.
- There is no backend. `request-section.tsx` builds a message from the form and opens `https://wa.me/<number>?text=...` in a new tab. Nothing is stored.
- Scroll reveals: `scroll-reveal.tsx` (client) observes `[data-reveal]` and `[data-reveal-group] > *` and adds `is-visible`. It sets `reveal-ready` on `<html>`, and is skipped under prefers-reduced-motion. Content stays visible without JS.
- `components/ui/button.tsx` and `lib/utils.ts` (`cn`) are shadcn leftovers (`components.json`, style base-nova); the site uses its own `.button` classes.
- `next.config.mjs` also sets security headers and `images.unoptimized`. Vercel Analytics renders only in production.
