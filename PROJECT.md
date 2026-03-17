# patina-design -- Tracker

**Goal:** Calm, visually led single-page website for Patina Design that converts visitors into project enquiries and showcases the portfolio.
**Type:** integration | **Started:** 2026-03-15 | **Status:** Phase 6 (Launch — in progress)

## Phases

### Phase 1: Research, Plan & Setup
- **Status:** Complete
- **Criteria:** [x] Research complete [x] Architecture defined [x] Phases planned [x] Plan approved

### Phase 2: Setup and Scaffolding
- **Status:** Complete
- **Criteria:** [x] Astro project initialized [x] Tailwind v4 configured [x] Fonts set up [x] Base layout created [x] Content file with all real text [x] vercel.json with security headers [x] Build succeeds

### Phase 3: Core Sections
- **Status:** Complete
- **Criteria:** [x] All 8 components built (nav, hero, about, services, portfolio, process, contact, footer) [x] Real portfolio images from existing site [x] Smooth scroll navigation [x] Scroll-reveal animations [x] Mobile responsive layout [x] Alternating section backgrounds

### Phase 3.5: Design Elevation
- **Status:** Complete
- **Criteria:** [x] 40-item design audit created [x] All P0/P1/P2 accessibility, performance, and visual consistency fixes [x] 10 review decisions approved and implemented (7 copy, 3 visual) [x] Descriptive alt text for all 12 portfolio images [x] Build passes, responsive verified
- **Brief:** briefs/phase-3.5.md

### Phase 4: Contact Form and Polish
- **Status:** Mostly complete (merged into Phase 3.5 work)
- **Criteria:** [x] Form validation and submission states [x] Nav scroll-spy active state [x] Accessibility audit (keyboard nav, focus, ARIA, contrast) [x] Performance audit (font preloads, LCP optimization, lazy loading) [ ] Formspree integration (needs env var on Vercel)

### Phase 5: Content and Image Integration
- **Status:** Mostly complete (merged into Phase 3.5 work)
- **Criteria:** [x] All portfolio images present with descriptive alt text [x] Copy finalized via review tool [x] SEO meta in base layout [x] Sitemap.xml (via @astrojs/sitemap) [x] robots.txt updated [ ] OG images [ ] Cross-browser testing

### Phase 6: Launch
- **Status:** In progress
- **Criteria:** [x] GitHub repo created (private, ask-samm/patina-design) [x] Vercel project connected [x] Vercel root directory fixed (web/) [x] Vercel production build succeeding [x] Domain added to Vercel (patinadesign.uk + www) [x] DNS A records updated to Vercel (76.76.21.21) [x] Krystal MX/SPF/DKIM/DMARC records preserved [x] mail/ftp CNAMEs converted to A records (Krystal IP) [x] deploy branch created for Krystal static hosting fallback [ ] DNS propagation confirmed [ ] Formspree env var added to Vercel [ ] Client review complete [ ] Project completion review

## Decisions
| Date | Decision | Why |
|------|----------|-----|
| 2026-03-15 | Astro over Next.js | No app state, no auth, no API routes. Astro ships zero JS by default. |
| 2026-03-15 | Tailwind v4 over custom CSS | Design tokens in theme layer, utility-first, no component library overhead. |
| 2026-03-15 | Formspree over custom backend | Free tier (50/month), no server needed, sufficient for launch volume. |
| 2026-03-15 | Real portfolio projects from existing site | Used actual projects from patinadesign.uk portfolio page (12 projects with images). |
| 2026-03-15 | 5 service categories | 4 from existing site + Technical Design Packages. Grouped, not split into 8. |
| 2026-03-15 | Self-host Satoshi fonts | Removed Fontshare CDN dependency. WOFF2 files in public/fonts/. Better performance, no external requests. |
| 2026-03-15 | Add Phase 3.5 for design elevation | Initial build is structurally correct but visually too safe. Need reference-driven design pass before polish phase. |
| 2026-03-15 | DNS at GoDaddy, not Krystal | Keep nameservers at GoDaddy for single DNS panel. Add Vercel A/CNAME + Krystal MX/SPF/DKIM there. |
| 2026-03-15 | Footer credit for Ask Samm | "Website created in partnership with Ask Samm" with link to asksamm.com. |
| 2026-03-16 | Vercel for hosting, not Krystal | Vercel auto-deploys from main, handles SSL, edge CDN. Krystal retained for email only. |
| 2026-03-16 | Dual-branch strategy | `main` = source code (Vercel builds from web/). `deploy` = orphan branch with built static files (Krystal fallback). |
| 2026-03-16 | DNS: A records to Vercel, keep Krystal MX | Changed root + www A records to 76.76.21.21. MX/SPF/DKIM/DMARC unchanged. Converted mail/ftp CNAMEs to A records pointing to Krystal IP. |

## Backlog

### Needs client input
- COPY-05: Award attribution — "Interiors of the Year 2024" needs the awarding body name
- PERF-12: SVG logo — need an SVG version from the client (currently raster PNG)
- Physical address: omitted pending confirmation (appears residential)
- Phone number: omitted (existing site has incorrect US code for UK studio)
- Formspree: need to add `PUBLIC_FORMSPREE_ID` env var in Vercel dashboard

### Future enhancements (not in current scope)
- Add analytics (after cookie/privacy decision)
- Instagram feed embed (currently link only)
- Portfolio project detail pages (if scope expands beyond single page)
- OG images for social sharing

### Change-Review Tool — Vision & Roadmap (cross-project, lives in ~/Developer/Projects/change-review)

**Vision:** Evolve the review UI into the ultimate collaborative interface between a human and Claude Code for all UI/UX work. Not just audit findings, but any visual iteration: layout exploration, color palette testing, copy direction, component variants. The tool becomes the primary way to give visual direction to Claude Code.

**Design Inspiration Library:** Build a curated library of favorite brands, websites, presentations, and design systems at `~/shared-ai-context/design-library/`. Markdown files with YAML frontmatter per reference (colors, typography, layout patterns, mood tags, "what works" notes). Auto-generated index for fast LLM lookup. Claude Code consults the library when generating proposals so decisions and iterations reflect accumulated taste, not just generic knowledge. Claude-assisted curation workflow: fetch URL, extract design tokens, human adds subjective notes.

**Phase 1 — Dynamic Proposal Pipeline:**
- Replace static HTML generation with a live proposals API on the companion server (GET/POST/PATCH /api/proposals)
- SSE stream for real-time push to browser (no polling, no page refresh)
- Template fetches proposals on load instead of embedding baked-in data
- Ad-hoc proposals: human says "make the hero bigger" in terminal, Claude POSTs variant proposals to server, browser shows them instantly
- Conversation threading on proposals (collapsible thread per card, human replies feed back to Claude)
- Claude Code hooks for post-edit browser refresh

**Phase 2 — Multi-Variant Exploration & Component Isolation:**
- Variant mutations: CSS (existing) + HTML patches + isolated component render
- Side-by-side comparison mode in modal (split iframes)
- Optional Puppeteer thumbnails for variant cards
- Component isolation preview (extract single section, render in clean harness)
- Proposal template generators for common explorations (color, typography, spacing, layout)

**Phase 3 — Design Intelligence Layer:**
- Structured brand context file (machine-readable tokens from brand guidelines)
- Reference image integration on proposal cards (inspiration sources)
- Taste profile: analyze decision history to bias proposals toward likely-approved options
- Auto a11y/perf impact annotations on every proposal (contrast ratios, CLS risk)

**Phase 4 — Tight Loop & Session Continuity:**
- Bidirectional live loop: propose → review → implement → hot-reload → verify, no manual refresh
- Session persistence with history archive
- Click-to-annotate in iframe preview (select element, type comment)
- Export: Figma tokens, commit message generation, markdown session report

**Architecture principles:** Single HTML file + single Node server, no build step, no dependencies. File-based source of truth (proposals.json, decisions.json). SSE for server-to-browser, POST for browser-to-server. Same proposal schema for audit findings and ad-hoc changes.

## Lessons
- Old portfolio HTML uses different project names than plan suggested. Always use actual saved content as source of truth.

## Session Log
| Date | Goal | Outcome | Focus notes |
|------|------|---------|-------------|
| 2026-03-15 | Build Phases 2-3: scaffold + all sections | Complete. Astro project with all 8 sections, real content/images, builds successfully. Design review: structurally solid but needs experiential elevation. Added Phase 3.5. Next session: use continuation prompt in briefs/phase-3.5.md with example websites. | Minor nested directory issue. Design ambition gap identified early, good. |
| 2026-03-15 | Design audit + copy review + deployment setup | 26/40 audit items implemented. Built copy review UI (standalone tool, moved to change-review project). 4 copy changes approved (#2, #13, #21, #34), 4 declined. GitHub repo created, pushed to Vercel. Node engine fix applied. Footer Ask Samm credit added. DNS guidance provided. Next: about image effect options, remaining visual tweaks. | Good session. Review UI was a useful workflow innovation. |
| 2026-03-16 | Production polish + review decisions + launch | All P0/P1/P2 fixes committed. 10 review decisions implemented (7 copy, 3 visual). Vercel root dir fixed, production build succeeding. Domains added to Vercel. DNS A records changed from Krystal to Vercel. mail/ftp CNAMEs converted to A records. Created reusable deploy-static.sh tool. deploy branch with built files for Krystal fallback. | Smooth session. DNS config was the main interactive piece. |
