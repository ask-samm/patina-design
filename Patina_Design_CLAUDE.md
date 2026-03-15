# Patina Design Website Build Guide

Use this file as the source of truth for Claude Code when planning, designing, and building the Patina Design website.

## Project goal

Build a calm, visually led, high-trust website for Patina Design that attracts qualified enquiries and encourages visitors to discuss a project.

This is a single-page marketing site with portfolio and contact conversion at the centre.

## Brand summary

Patina Design is an interior design studio focused on modern interiors.

The brand should feel:
- Soulful
- Intentional
- Timeless
- Organic
- Calm
- Inspired
- Refined
- Human

The brand should not feel:
- Overly corporate
- Cold
- Trend-chasing
- Generic luxury
- Too laid back
- Overwritten
- Flashy

## Commercial positioning

Patina Design currently needs to appeal to:
- New home buyers
- New food and drink business owners

The brand should also signal enough quality and restraint to support future work with luxury retail and commercial clients.

## Core promise

Patina Design creates modern interiors that feel personal, refined, and deeply considered.

The studio combines:
- Collaborative design thinking
- Project management discipline
- Technical understanding
- Building regulation awareness
- Contractor coordination
- Budget and site progress oversight

## Website objective

Primary objective:
- Generate qualified project enquiries

Secondary objective:
- Showcase portfolio and point of view

## Audience mindset

Visitors should quickly understand:
- This is a design studio with taste
- The work is personal and collaborative
- The studio can handle both creativity and delivery
- They can enquire directly about a project

Visitors should feel:
- Calm
- Inspired
- Confident
- Ready to get in touch

## Approved messaging themes

Prioritise these ideas in the copy:
- Modern interiors with soul
- Spaces shaped around real people and how they live or host
- Creative vision backed by practical execution
- A collaborative process from concept to completion
- Thoughtful, timeless outcomes rather than trend-led styling

## Voice and tone

Voice attributes:
- Welcoming
- Collaborative
- Calm
- Creative
- Focused
- Reasonably technical

Writing rules:
- Sound person-focused and professional
- Use clear, elegant language
- Keep sentences short to medium in length
- Show technical competence without heavy jargon
- Use warmth and reassurance
- Avoid sounding too casual or lifestyle-influencer-like
- Do not use em dashes

## Example voice direction

Good:
- Thoughtful, clear, warm, assured
- Visually expressive but verbally restrained
- Specific about services and delivery

Avoid:
- Hype language
- Startup language
- Vague design clichés
- Fake luxury language
- Invented claims or invented projects

## Services to support

The website should support and present these service areas:
- Interior design
- Space planning and concept development
- Furniture, fittings, finishes, and lighting selection
- Procurement and supplier coordination
- Site support and contractor coordination
- Installation and styling
- Technical designs and drawings
- Project management

## Site architecture

This is a single-page website.

Primary sections:
- Hero
- About
- Portfolio
- Services
- Process
- Contact

Suggested navigation:
- Home
- About
- Portfolio
- Services
- Contact

## Hero direction

Hero should communicate:
- A modern interior design offer
- A warm but refined point of view
- A clear invitation to discuss a project

Recommended CTA structure:
- Primary CTA: Book a Consultation
- Secondary CTA: View Portfolio

## Visual direction

Overall style:
- Light mode only for v1
- Minimal
- Playful in subtle ways
- Technical in structure
- Spacious
- Editorial
- Image-led

Design principles:
- Let imagery do the emotional work
- Keep layout calm and uncluttered
- Use whitespace generously
- Use typography with restraint
- Avoid noisy UI and decorative effects that do not support the work

## Color system

Use these brand colors as the foundation:

- Pink Shadow: `#DEC3B9`
- Jasper Stone: `#8D9E97`
- Indigo Batik: `#3E5063`
- Dusty Rose: `#a45e60`

Recommended usage:
- Backgrounds: Pink Shadow and white
- Soft secondary surfaces: Jasper Stone in restrained usage
- Main headings, default text, and accent moments: Indigo Batik
- Primary accent, CTA emphasis, section labels, and interactive highlights: Dusty Rose (`#a45e60`)
- Error states and warm depth moments: Dusty Rose (`#a45e60`)
- Secondary text: Indigo Batik at reduced opacity

Note: The CSS theme uses `--color-copper-pot` and `--color-fireweed` as token names mapped to `#a45e60`. Both resolve to Dusty Rose.

Accessibility rules:
- Indigo Batik should be the default dark text or headline color on light surfaces
- Dusty Rose meets WCAG AA contrast on white backgrounds for large text and UI components
- Do not rely on Dusty Rose for small body text unless contrast is checked
- Meet WCAG AA contrast requirements

## Typography

Use this provisional web type system unless exact licensed brand fonts are later confirmed:

- Headings: Satoshi or General Sans
- Body: Inter or Satoshi
- Section labels: all caps with increased tracking

Typography goals:
- Calm, readable headings
- Clear body text
- Minimal but strong hierarchy
- Premium without becoming cold

Avoid:
- Serif-heavy styling for v1
- Overly geometric fonts
- Corporate-feeling type choices
- Overdecorated typography

## UI and interaction

Prefer:
- Large imagery
- Editorial section rhythm
- Simple cards only where useful
- Refined buttons
- Soft section transitions
- Clean contact form
- Subtle fades and restrained hover states

Avoid:
- Heavy parallax
- Loud animation
- Overly glossy effects
- Dense dashboards
- Overbuilt components

## Technical requirements

Non-negotiable:
- Strong accessibility
- Good performance
- Good SEO fundamentals
- Responsive behaviour
- Clean code that can be extended later

Desktop-first is acceptable for v1, but the final site must still work well across breakpoints.

## AI guardrails

Claude must:
- Only build what is explicitly requested
- Not make up services, testimonials, case studies, or credentials
- Keep copy grounded and believable
- Focus on success criteria and enquiry conversion
- Keep the site calm, spacious, and visually led
- Preserve the single-page structure unless explicitly asked to change it
- Ask before introducing extra sections, features, or interactions

Claude must not:
- Invent portfolio projects
- Add fake social proof
- Add em dashes
- Drift into startup SaaS language
- Make the site feel corporate or generic luxury
- Replace the visual-first approach with text-heavy layouts

## Preferred build defaults

- Theme: light
- Layout density: spacious
- Primary goal: enquiry
- Secondary goal: portfolio browsing
- Visual priority: imagery and composition
- Copy priority: warm trust and technical confidence
- CTA language: Book a Consultation, View Portfolio, Discuss Your Project

## Planning expectations

When planning, Claude should:
- Start with information architecture
- Define section-by-section content blocks
- Propose visual hierarchy before implementation
- Explain component choices briefly
- Flag assumptions clearly
- Keep implementation practical and not overengineered

## Suggested homepage structure

1. Hero with headline, supporting line, and two CTAs
2. Short founder or studio intro
3. Selected portfolio highlights
4. Services overview
5. Process section
6. Contact section with form and email fallback

## Success criteria

A successful build should:
- Feel calm, refined, and memorable
- Showcase the work visually
- Make the service offer easy to understand
- Build trust in both creative and technical capability
- Drive project enquiries without feeling pushy

## Sources

Current site references:
- Homepage: [Patina Design](https://www.patinadesign.uk/)
- Services: [Patina Design Services](https://www.patinadesign.uk/?page_id=25)
- Contact: [Patina Design Contact](https://www.patinadesign.uk/?page_id=33)

Palette references:
- [Pink Shadow SW 0070](https://www.sherwin-williams.com/sherwinwilliams/SW0070-pink-shadow)
- [Jasper Stone SW 9133](https://www.sherwin-williams.com/sherwinwilliams/SW9133-jasper-stone)
- [Indigo Batik SW 7602](https://www.sherwin-williams.com/sherwinwilliams/SW7602-indigo-batik)
- Dusty Rose: `#a45e60` (custom, replaces Fireweed and Copper Pot)
