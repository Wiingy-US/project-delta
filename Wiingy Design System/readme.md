# Wiingy Design System

## Overview

**Wiingy** is an online tutoring marketplace that connects students with expert tutors across subjects like Math, Science, Coding, Music, Languages, and more. The platform serves K-12 students, university students, and lifelong learners with 1-on-1 live tutoring sessions.

### Product Context
- **Primary product**: Web-based tutoring marketplace (wiingy.com)
- **Core flow**: Search for subject → Browse tutor profiles → Book a free trial → Schedule lessons
- **Audience**: Students (and parents) looking for personalized tutoring
- **Key surfaces**: Landing pages (subject-specific), Search/browse, Tutor detail pages, Help center, Articles/blog

### Source Materials
- **Figma file**: "Design system.fig" — comprehensive design system containing colors, typography, spacing, elevation, corner radii, brand logos, icon set (700+ subject icons), component library (buttons, inputs, tags, cards, navigation, modals), and full page layouts for landing pages, search, tutor details, help, and articles.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Approachable and encouraging** — copy speaks directly to students/parents with a warm, supportive tone
- **Action-oriented** — CTAs like "Find and book unique tutors on Wiingy", "Book a free trial", "Message tutor", "Lesson in 3 days"
- **Second person** — addresses the reader as "you" / "your"
- **Concise and scannable** — short headings, brief descriptions, no verbose paragraphs
- **Trust-building** — mentions ratings ("4.95"), credentials, "Certified experts", "Payment Protection"

### Casing
- **Sentence case** for body text and descriptions
- **Title Case** for headings and navigation items ("Book a free trial", "Download App")
- **ALL CAPS** is not used

### Emoji
- Not used in the UI — the brand relies on its custom icon set instead
- One exception: ©️ in the footer copyright

---

## VISUAL FOUNDATIONS

### Colors
- **Brand blue** `#2655A3` — the dominant accent, used for primary buttons, logo, links, and key interactive elements
- **Neutrals/Greys** — a 10-step grey scale from `#222222` (text) to `#FAFAFA` (lightest background), providing the backbone of the UI
- **Supporting palette**: Purple (`#A855F7` range), Orange (`#F97316` range), Green (`#219653`), Amber (`#FBBF24`)
- **Background vibe**: Clean whites (`#FFFFFF`) and very light greys (`#F7F7F7`), never dark mode in the current design

### Typography
- **Primary typeface**: Figtree — a geometric sans-serif used for all UI text (headings, labels, body)
- **Monospace**: IBM Plex Mono — used sparingly for documentation/technical contexts
- **Weight usage**: Regular (400) for body, Medium (500) for labels, SemiBold (600) for sub-headings, Bold (700) for headings
- **Responsive type scale**: The system defines 4 breakpoints (xs, sm, md, lg) with scaled heading sizes
- **No decorative or serif fonts** — the entire system uses Figtree

### Spacing
- **Base unit**: 4px grid
- **Page padding**: 24px (mobile), 40px (tablet), 80px (desktop)
- **Section gaps**: 32px between related blocks, 64px between major sections
- **Card gaps**: 16px between cards in a grid
- **Consistent vertical rhythm** with 8/16/24/32/48/64/80px steps

### Backgrounds
- **Solid whites and light greys** — no gradients for page backgrounds
- **Cards on white** sit on `#F7F7F7` page background
- **Hero sections** use large photos with overlaid content (white text on image, or a floating card with shadow)
- **No full-bleed color backgrounds** — the design is primarily white with blue accents
- **Tags use a subtle gradient**: `linear-gradient(12.78deg, #F1F1F1 3.63%, #FFF 13.83%, #FFF 68.55%, #EFEFEF 90.81%)` — a very soft sheen effect

### Borders & Dividers
- **Light borders**: `#EBEBEB` (1px) for section separators, nav borders, card outlines
- **Input borders**: `#DDDDDD` (1px) for form fields
- **Focus rings**: `2px solid #222222` for focused buttons/inputs
- **Divider style**: Simple 1px solid lines, no decorative treatments

### Corner Radii
- **Buttons**: 8px
- **Cards**: 12px
- **Input fields**: 8px
- **Tags/badges**: 40px (pill shape)
- **Avatar circles**: 50% (full circle)
- **Modals**: 12px

### Elevation / Shadows
- **Nav shadow**: `0px 0px 6px rgba(0,0,0,0.16)` — very subtle
- **Card default**: `0px 2px 8px rgba(35,39,46,0.08)` — barely visible
- **Card hover**: `0px 4px 16px rgba(0,0,0,0.12)` — noticeable lift
- **Hero card**: `inset 0 0 0 1px rgba(0,0,0,0.04), 0px 6px 20px rgba(0,0,0,0.2)` — prominent floating effect
- **Overall approach**: Minimal, functional shadows that indicate hierarchy — never decorative drop shadows

### Hover & Press States
- **Primary buttons**: Default `#2655A3` → Hover `#1E4482` (darker) → Focus adds `2px solid #222` ring
- **Tertiary/outline buttons**: Hover fills with `#F7F7F7` background
- **Cards**: Gain slightly stronger shadow on hover
- **Links/nav items**: No color change on hover (relies on cursor and subtle background)
- **No opacity-based hover effects** — color changes are used instead
- **No shrink/scale on press**

### Animation
- **Minimal animation** — the design system doesn't define elaborate transitions
- **No bounce, spring, or playful animations**
- **Standard ease transitions** for hover state changes
- **Carousel/slider** for tutor card carousels

### Imagery
- **Warm, natural photography** — real photos of tutors and students
- **3:4, 4:5, 5:3 aspect ratios** for tutor/hero images
- **Rounded corners** on images (8-12px)
- **No filters, grain, or color overlays** — clean, natural image presentation

---

## ICONOGRAPHY

- **Custom icon set**: 700+ subject-specific icons (Math, Physics, Chemistry, Guitar, Piano, etc.) — these are unique to Wiingy and stored as SVG components in the Figma file
- **Icon sizes**: 12px, 16px, 18px, 20px, 24px, 32px — standardized via wrapper components
- **Icon style**: Outlined/line icons with consistent stroke weight, monochrome (uses `currentColor` or explicit fill)
- **Star icon**: Filled variant used for ratings
- **No emoji as icons** — all iconography is SVG-based
- **No external icon font** — icons are embedded SVGs
- **Navigation icons**: Chevrons (left/right), Search, Filter, Tune, Menu (hamburger), Close
- **Social icons**: Present in footer area

---

## Project Structure

```
styles.css              ← Root stylesheet (imports only)
tokens/
  colors.css            ← Color custom properties
  typography.css        ← Type scale tokens + Google Fonts import
  spacing.css           ← Spacing, radii, elevation tokens
assets/
  logo-blue.svg         ← Wiingy logo (brand blue)
  logo-white.svg        ← Wiingy logo (white, for dark backgrounds)
components/
  core/                 ← Button, Tag, Badge
guidelines/
  *.html                ← Foundation specimen cards
ui_kits/
  landing-page/         ← Wiingy landing page recreation
readme.md               ← This file
SKILL.md                ← Agent skill definition
```

---

## Components

| Component | Location | Description |
|-----------|----------|-------------|
| Button    | `components/core/Button.jsx` | Primary, Secondary, Tertiary, Quaternary variants; sizes 48/34 |
| Tag       | `components/core/Tag.jsx` | Pill-shaped labels (Student favorite, Super tutor, etc.) |
| Badge     | `components/core/Badge.jsx` | Status indicators |

## UI Kits

| Kit | Location | Description |
|-----|----------|-------------|
| Landing Page | `ui_kits/landing-page/` | Subject landing page with hero, search, tutor cards, trust builders |
