# Button

Wiingy's primary interactive element. Use for all user actions — CTAs, form submissions, navigation triggers.

```jsx
<Button variant="primary" size="lg">Book a free trial</Button>
<Button variant="tertiary" size="sm">Message tutor</Button>
<Button variant="quaternary" fullWidth>View all subjects</Button>
```

## Variants
- **primary** — Blue background, white text. For primary CTAs.
- **secondary** — Dark background, white text. For secondary emphasis.
- **tertiary** — Transparent with border. For less prominent actions.
- **quaternary** — White background with border. For inline/grouped actions.

## Sizes
- **lg** — 48px height (default). Most CTAs.
- **sm** — 34px height. Dense UIs, secondary actions.

## Props
- `fullWidth` — stretches button to 100% of parent
- `disabled` — greys out + prevents interaction
