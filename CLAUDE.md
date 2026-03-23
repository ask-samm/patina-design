# patina-design

## Project
**What:** Website for Patina Design interior design sercices, hosting a porfolio and contact form
**Systems:** Website
**Type:** integration

## Architecture
```
Astro (static) + Tailwind v4 + React island (contact form)
Deployed to Vercel (Hobby tier, root dir: web/)
Form backend: Formspree (free tier, 50 submissions/month)
Fonts: Satoshi (self-hosted WOFF2) + Inter (Fontsource)

web/
  astro.config.mjs
  src/
    pages/index.astro        # Single page
    layouts/base.astro       # HTML shell, meta, fonts
    components/              # nav, hero, about, services, portfolio, process, contact, footer
    content/site.ts          # All text content (single source of truth)
    styles/global.css        # Tailwind theme tokens, animations
    assets/                  # Build-time optimized images (hero, portfolio, about)
  public/
    fonts/                   # Self-hosted Satoshi (Regular, Medium, Bold WOFF2)
    favicon.svg
    robots.txt
  vercel.json                # Security headers, caching
```

## Git
**Remote:** GitHub (ask-samm/patina-design)
**Branches:**
- `main` — Source code. Vercel auto-deploys from this branch (root dir: `web/`).
- `deploy` — Orphan branch with built static files at repo root. Krystal fallback hosting.

**Deploy script:** `~/Developer/tools/deploy-static.sh` rebuilds and updates the `deploy` branch:
```bash
git stash --include-untracked
~/Developer/tools/deploy-static.sh --build-dir web/dist --build-cmd "cd web && npm run build" --exclude "backlog.md review.html"
git stash pop
```

## Key Files
| File | Purpose |
|------|---------|
| CLAUDE.md | Project instructions (this file) |
| PROJECT.md | Phase tracker, decisions, backlog |
| Patina_Design_CLAUDE.md | Brand guidelines, voice, visual direction |
| briefs/ | Phase briefs (1, 2, 3, 3.5, 4, 5, 6) |
| web/src/content/site.ts | All site copy (single source of truth) |
| web/src/styles/global.css | Tailwind theme tokens, animations |
| web/src/components/ | All section components |

## Environment Variables
| Variable | Required | Environment | Safety |
|----------|----------|-------------|--------|
| `PUBLIC_FORMSPREE_ID` | Yes | Vercel | PROD, write (form submissions) |

**Environments:** Single environment (Vercel Hobby). No staging. Pushing to main deploys to production.
**Safe for testing:** Local dev server (`npm run dev` in web/). No external writes without Formspree ID.

## Hosting & DNS
| Service | Role | Details |
|---------|------|---------|
| Vercel | Website hosting | Auto-deploys from `main`, root dir `web/`. Domain: patinadesign.uk + www |
| Krystal | Email + cPanel | MX records (mx1/mx2.krystal.io), SPF, DKIM, DMARC. cPanel subdomains at 77.72.2.136 |

**DNS (managed at Krystal):**
- `patinadesign.uk` A → `76.76.21.21` (Vercel)
- `www` A → `76.76.21.21` (Vercel)
- `mail`, `ftp` A → `77.72.2.136` (Krystal)
- `cpanel`, `webmail`, `whm`, `webdisk`, `cpcontacts`, `cpcalendars` A → `77.72.2.136` (Krystal)
- MX → `mx1.krystal.io` (pri 10), `mx2.krystal.io` (pri 20)

## Cost Model
| Service | Pricing Model | Current Plan | Est. Monthly Cost |
|---------|---------------|-------------|-------------------|
| Vercel | Tier-based | Hobby (free) | $0 |
| Formspree | Usage-based | Free (50/month) | $0 |
| Satoshi (self-hosted) | Free | Free | $0 |
| Inter (Fontsource) | Self-hosted | Free | $0 |

**Total: $0/month.** No usage-based cost risk. Formspree limit (50/month) sufficient for launch.

## Escalation Policy
Proceed autonomously UNLESS:
- Irreversible or production action
- Trade-off with real alternatives
- Scope expansion beyond brief
- Stuck after 2 attempts
- Phase complete -- notify and wait
