# Phase 2: Setup and Scaffolding

## Objective
Initialize the Astro project, configure tooling, and establish the foundation for building.

## Tasks
- [x] Init Astro in `web/` with minimal template
- [x] Add integrations: Tailwind v4, React, Vercel adapter
- [x] Self-host Satoshi font (WOFF2, 3 weights)
- [x] Install Inter via Fontsource
- [x] Configure Tailwind theme with brand colors and font stacks
- [x] Create `src/layouts/base.astro` with meta tags, font preloads, OG tags
- [x] Create `src/content/site.ts` with all real text content
- [x] Create `src/styles/global.css` with theme tokens, scroll reveal, skip-to-content
- [x] Create `vercel.json` with security headers and font caching
- [x] Create `robots.txt` and `favicon.svg`
- [x] Copy and organize images from old portfolio into `src/assets/`
- [x] Verify `npm run build` succeeds
- [x] Verify `npm run dev` starts

## Acceptance Criteria
- [x] Astro project initialized with all integrations
- [x] Tailwind v4 configured with brand tokens
- [x] Fonts self-hosted and preloaded
- [x] Base layout renders
- [x] Content file complete with all real text
- [x] vercel.json with security headers
- [x] Build passes cleanly
