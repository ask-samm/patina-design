# Phase 3.5: Design Elevation

## Objective
Elevate the site from "clean template" to "memorable design experience" based on design review feedback and reference websites.

## Context
After completing Phase 3, the site was reviewed and found to be structurally sound but lacking in experiential quality. The layout, content, and code are correct, but the visual design needs to feel more like a curated experience and less like a template.

## Continuation Prompt
Use this to start the next session:

---

**Patina Design website redesign: elevating the experience**

We've built a working Astro + Tailwind v4 single-page site for Patina Design (interior design studio). It's at `web/` in the repo. All 8 sections are functional with real content and images. The build passes, dev server runs.

**The problem:** The current design is solid structurally but feels too safe and template-like. It needs to feel like an experience, not just a marketing page. The brand is calm, soulful, refined, and image-first. The site should match that ambition.

**What exists:**
- `web/src/content/site.ts` has all real copy (single source of truth)
- `web/src/components/` has nav, hero, about, services, portfolio, process, contact, footer (all .astro except contact-form.tsx)
- `web/src/styles/global.css` has Tailwind theme tokens (brand colors, fonts)
- `web/src/assets/` has real portfolio and about images
- See `PROJECT.md` for full state and `Patina_Design_CLAUDE.md` for brand guidelines

**Your task:** Review the current components, then study the example websites I'll share below. Identify specific techniques, layout patterns, animation approaches, and compositional choices that would elevate the Patina Design site from "clean template" to "memorable design experience." Propose concrete changes section by section. Do not rebuild from scratch. Evolve what exists.

**Constraints:** No heavy JS frameworks. Astro + CSS + minimal JS. No parallax. Respect `prefers-reduced-motion`. Keep it performant (Lighthouse 90+).

**Example websites for inspiration:**

---

(User to add example URLs/screenshots after this line)

## Tasks
- [ ] Review current components against reference websites
- [ ] Identify specific techniques to adopt (layout, animation, composition, typography)
- [ ] Propose section-by-section changes
- [ ] Get approval on approach before implementing
- [ ] Implement design changes
- [ ] Verify build and responsive behaviour

## Acceptance Criteria
- [ ] Site feels experiential, not template-like
- [ ] Brand identity (calm, soulful, refined, image-first) comes through strongly
- [ ] No new JS frameworks introduced
- [ ] Build still passes, Lighthouse scores maintained
- [ ] prefers-reduced-motion still respected
