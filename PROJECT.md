# patina-design -- Tracker

**Goal:** Calm, visually led single-page website for Patina Design that converts visitors into project enquiries and showcases the portfolio.
**Type:** integration | **Started:** 2026-03-15 | **Status:** Phase 3.5 (Design Elevation — in progress)

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
- **Status:** In progress
- **Criteria:** [x] 40-item design audit created [x] Structural/accessibility items implemented (26/40) [x] Copy changes reviewed (4 approved, 4 declined) [ ] Visual adjustments (about image effect, remaining tweaks) [ ] Build passes, responsive verified
- **Brief:** briefs/phase-3.5.md (includes continuation prompt)

### Phase 4: Contact Form and Polish
- **Status:** Not started
- **Criteria:** [ ] Formspree integration working [ ] Form validation and submission states [ ] Nav scroll-spy active state [ ] Accessibility audit (keyboard nav, focus, ARIA, contrast) [ ] Performance audit (Lighthouse 90+)

### Phase 5: Content and Image Integration
- **Status:** Not started
- **Criteria:** [ ] All placeholder images replaced [ ] TODO copy markers resolved [ ] SEO meta, OG images, structured data [ ] Sitemap.xml [ ] Cross-browser testing

### Phase 6: Launch
- **Status:** In progress
- **Criteria:** [x] GitHub repo created (private, ask-samm/patina-design) [x] Vercel project connected [ ] Domain configured (patinadesign.uk) [ ] DNS records set (Vercel A/CNAME + Krystal MX/SPF/DKIM) [ ] Formspree env var added [ ] Client review complete [ ] Project completion review

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

## Backlog

### Needs client input (blocking for Phase 5)
- Process step 2 ("Plan") copy: using drafted placeholder, needs client review
- Physical address: omitted pending confirmation (appears residential)
- Phone number: omitted (existing site has incorrect US code for UK studio)
- Technical Design Packages service description: using drafted placeholder

### Future enhancements (not in current scope)
- Add analytics (after cookie/privacy decision)
- Instagram feed embed (currently link only)
- Portfolio project detail pages (if scope expands beyond single page)

## Lessons
- Old portfolio HTML uses different project names than plan suggested. Always use actual saved content as source of truth.

## Session Log
| Date | Goal | Outcome | Focus notes |
|------|------|---------|-------------|
| 2026-03-15 | Build Phases 2-3: scaffold + all sections | Complete. Astro project with all 8 sections, real content/images, builds successfully. Design review: structurally solid but needs experiential elevation. Added Phase 3.5. Next session: use continuation prompt in briefs/phase-3.5.md with example websites. | Minor nested directory issue. Design ambition gap identified early, good. |
| 2026-03-15 | Design audit + copy review + deployment setup | 26/40 audit items implemented. Built copy review UI (standalone tool, moved to change-review project). 4 copy changes approved (#2, #13, #21, #34), 4 declined. GitHub repo created, pushed to Vercel. Node engine fix applied. Footer Ask Samm credit added. DNS guidance provided. Next: about image effect options, remaining visual tweaks. | Good session. Review UI was a useful workflow innovation. |
