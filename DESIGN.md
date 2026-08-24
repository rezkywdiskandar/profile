---
name: Rezky Widi Iskandar Portfolio
description: High-performance frontend engineering paired with editorial design aesthetics
colors:
  primary: "#111114"
  neutral-bg: "#f4f4f1"
  neutral-subtle: "#111114"
  neutral-card: "#17181c"
  accent-sage: "#aeb8b0"
  accent-emerald: "#10b981"
  border-hairline: "rgba(17, 17, 20, 0.12)"
  border-dark: "rgba(255, 255, 255, 0.12)"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(5rem, 16vw, 17rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Plus Jakarta Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, Plus Jakarta Sans, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.65rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.22em"
rounded:
  sm: "9999px"
  md: "16px"
  lg: "24px"
  xl: "35px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  xxl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.neutral-card}"
  capsule-pill:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "10px 18px"
---

# Design System: Rezky Widi Iskandar Portfolio

## Overview

**Creative North Star: "The Editorial Engineer's Atelier"**

The visual language bridges bespoke editorial typography with high-rigor frontend engineering. Rather than relying on generic cards and colored gradients, the interface establishes a cinematic rhythm between warm limestone grounds (`#f4f4f1`) and deep obsidian volumes (`#111114`), punctuated by muted sage (`#aeb8b0`) and active emerald (`#10b981`) telemetry beacons.

**Key Characteristics:**
- High-contrast section pacing transitioning seamlessly between light canvas and deep obsidian chambers.
- Dramatic typography hierarchy led by italic `Instrument Serif` display statements and balanced by structured `Manrope` text and `JetBrains Mono` telemetry labels.
- Floating capsule navigation with multi-stage staggered background reveals.
- Micro-interactions characterized by exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), 3D perspective tilts, and smooth kinetic reveals.

## Colors

The palette is restrained, organic, and committed to high contrast without visual fatigue.

### Primary
- **Deep Obsidian Ink** (`#111114`): Forms the primary text on limestone canvas, primary action buttons, and entire deep-mode sections (About, Experiences, Contact).

### Secondary
- **Warm Limestone Ground** (`#f4f4f1`): The primary light canvas tone, offering warmth, high readability, and physical paper-like substance.

### Accent
- **Sage Mist** (`#aeb8b0`): Used for navigation pre-layers, section badges, and subtle highlights.
- **Signal Emerald** (`#10b981`): Used exclusively for live activity states, status beacons, and GitHub contribution heatmap intensity tiers.

### Neutral
- **Obsidian Card Surface** (`#17181c`): Elevated container color within dark sections.
- **Hairline Border (Light)** (`rgba(17, 17, 20, 0.12)`): Subtle dividers and capsule contours.
- **Hairline Border (Dark)** (`rgba(255, 255, 255, 0.12)`): Precise structural separation in dark modes.

### Named Rules
**The Rhythmic Contrast Rule.** Light and dark surfaces own complete full-viewport sections rather than isolated card islands. Light brings clarity to projects and credentials; dark creates intimacy for philosophy, career archives, and closing contact.

## Typography

**Display Font:** Instrument Serif (with Georgia, serif fallback)
**Body Font:** Manrope / Plus Jakarta Sans (with system sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (monospace fallback)

**Character:** The pairing of fluid, editorial serif italics with geometric sans and technical monospace evokes the precision of an architectural monograph.

### Hierarchy
- **Display** (400 italic/normal, clamp(3.5rem, 9vw, 8rem), line-height: 0.95): Used for hero greetings and closing contact headers.
- **Headline** (700 bold uppercase, clamp(1.75rem, 4vw, 3.5rem), line-height: 1.05): Section titles, manifesto phrases, and major milestones.
- **Title** (700 bold, 1.5rem–2.2rem, line-height: 1.15): Project titles, experience roles, and certificate titles.
- **Body** (400 regular, 0.95rem–1.05rem, line-height: 1.65): Explanatory summaries, philosophy descriptions, and case study overviews (measure restricted to 65–75ch).
- **Label** (600 bold uppercase, 0.65rem–0.75rem, letter-spacing: 0.22em): Breadcrumbs, tags, timestamps, and step indicators.

### Named Rules
**The No-Gradient-Text Rule.** Text emphasis is communicated through deliberate weight shifts, font style changes (italic serif accents), and contrast, never multi-stop color gradients.

## Layout

- Full-bleed responsive stream with container max-width at 1280px (`max-w-7xl`).
- Generous padding rhythm: `px-6 sm:px-10 lg:px-24` and `py-20 sm:py-28`.
- Asymmetric 2-column alternating layouts for project showcases.
- Organic geometric transitions (`rounded-[50%]` curved headers and `-mt-[8vh] rounded-t-[2.5rem]` overlapping panels).

## Elevation & Depth

Surfaces rely on structural tonal layering and physical perspective rather than blurry drop shadows.

### Shadow Vocabulary
- **Floating Capsule** (`box-shadow: 0 8px 30px rgba(17, 17, 20, 0.08)`): Used on floating navigation and badge pills.
- **3D Card Elevation** (`box-shadow: 0 28px 70px rgba(17, 17, 20, 0.22)`): Used on 3D perspective hero profile card.
- **Section Overlap** (`box-shadow: 0 -24px 60px rgba(0, 0, 0, 0.18)`): Used on overlapping curved section headers.

## Shapes

- Pill / Capsule language (`rounded-full`) for all interactive triggers, buttons, and telemetry chips.
- Rounded chambers (`rounded-2xl` to `rounded-[2.2rem]`) for major card containers.
- Curved continuous arches (`rounded-[50%]`) for section threshold boundaries.

## Components

### Buttons & Pills
- **Shape:** Full pill radius (`rounded-full`).
- **Primary:** Deep Obsidian background (`#111114`), Limestone text (`#f4f4f1`), uppercase monospace typography with tracking (`0.18em`).
- **Capsule Toggle:** Glassmorphic limestone background with 1px hairline border and blur (`backdrop-blur-md`).

### Multi-Layer Staggered Drawer
- Multi-layer colored background cascade (`#aeb8b0` -> `#25282a` -> `#111114`).
- Oversized uppercase numbered navigation links (`01 HOME` to `07 CONTACT`).

### 3D Perspective Hero Stage
- `perspective: 1200px` container with mouse-tracking `rotateX` and `rotateY` tilt.
- Floating status beacon with double-ring pulse animation.

### Multi-Slide Media Viewer
- Aspect ratio `16/10` with gradient scrim, previous/next controls, and pill slide indicators.

### GitHub Contribution Heatmap
- 52-week SVG grid with 5 levels of emerald fill intensity and interactive cell tooltips.

## Do's and Don'ts

### Do:
- **Do** maintain strict spacing proportion: more space above a heading than below it.
- **Do** preserve the authentic grayscale-to-color hover interaction on imagery.
- **Do** keep monospace uppercase micro-copy tracked at `0.18em` to `0.28em`.
- **Do** use exponential ease-out curves (`cubic-bezier(0.16, 1, 0.3, 1)`) for all transitions.

### Don't:
- **Don't** introduce generic icon boxes or card grids with identical heights.
- **Don't** use bounce or elastic easing; motion must feel physical and decelerated.
- **Don't** use pure black (`#000000`) or stark pure white (`#ffffff`) for backgrounds; use `#111114` and `#f4f4f1`.
