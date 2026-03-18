# Website Audit Backlog — Patina Design
Generated: 2026-03-17 | Updated: 2026-03-18

## P0: Must Fix — ALL RESOLVED

### ~~Process section not rendered on page~~ FIXED
### ~~CSP blocks Google Fonts (Dancing Script)~~ FIXED (self-hosted)
### ~~Services section CTA not rendered~~ FIXED

## P1: Should Fix — ALL RESOLVED

### ~~Form error message not specific enough~~ FIXED
Differentiated network errors, 429 rate limit, 422 validation, and generic server errors.

### ~~Missing preload for Satoshi Regular weight~~ FIXED
Added preload for Satoshi-Regular.woff2 in base.astro.

### ~~Google Fonts preconnect without usage~~ FIXED
Removed alongside Dancing Script self-hosting.

### ~~Portfolio category labels inconsistent~~ FIXED
Corrected: Dior Bodrum (Retail), Chanel GUM (Retail), MNKY HSE Lounge (Hospitality), DMR Canary Wharf (Retail).

### ~~Contact form missing noValidate~~ FIXED
Added noValidate to form element to prevent duplicate validation.

### X-Frame-Options DENY blocks review.html iframe preview
**Status:** Won't fix. Only affects deployed site (dev server unaffected). Not a production issue.

## P2: Nice to Have — MOSTLY RESOLVED

### ~~Portfolio items tabindex="0"~~ FIXED
Removed tabindex="0" from non-interactive portfolio cards. Kept role="figure" and aria-label.

### Heading hierarchy skip in portfolio
**Status:** No action needed. Hierarchy is technically valid.

### ~~Mobile menu bg-white/98~~ FIXED
Changed to bg-white/95 for intentional transparency.

### Footer nav duplicates main nav
**Status:** Won't fix. Design decision — footer nav provides quick access without scrolling.

### ~~No 404 page~~ FIXED
Created branded 404.astro with link back to homepage.

### ~~Hero kitchen image loading="lazy"~~ FIXED
Resolved during hero grid restructure. All above-fold images now eager-loaded.
