import React from 'react';

/**
 * Button — Wiingy's primary interactive element.
 * Supports four variants (primary, secondary, tertiary, quaternary) and two sizes (lg=48px, sm=34px).
 */
export function Button({
  children = 'Button',
  variant = 'primary',
  size = 'lg',
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const isLg = size === 'lg';
  const height = isLg ? 48 : 34;
  const paddingY = isLg ? 14 : 7;
  const fontSize = 16;

  const variants = {
    primary: {
      background: 'var(--color-brand)',
      color: '#FFFFFF',
      border: 'none',
      hoverBg: 'var(--color-brand-hover)',
    },
    secondary: {
      background: 'var(--grey-1)',
      color: '#FFFFFF',
      border: 'none',
      hoverBg: 'var(--grey-2)',
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--grey-1)',
      border: '1px solid var(--grey-1)',
      hoverBg: 'var(--surface-hover)',
    },
    quaternary: {
      background: '#FFFFFF',
      color: 'var(--grey-1)',
      border: '1px solid var(--grey-1)',
      hoverBg: 'var(--surface-hover)',
    },
  };

  const v = variants[variant] || variants.primary;

  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height,
    padding: `${paddingY}px 24px`,
    borderRadius: 'var(--radius-md)',
    border: v.border,
    background: hovered && !disabled ? v.hoverBg : v.background,
    color: v.color,
    fontFamily: 'var(--font-primary)',
    fontWeight: 'var(--weight-medium)',
    fontSize,
    lineHeight: '20px',
    textAlign: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    width: fullWidth ? '100%' : 'auto',
    boxSizing: 'border-box',
    outline: focused && !disabled ? '2px solid var(--grey-1)' : 'none',
    outlineOffset: focused ? '0px' : undefined,
    transition: 'background 150ms ease, box-shadow 150ms ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    ...style,
  };

  return React.createElement('button', {
    style: baseStyle,
    disabled,
    onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    ...rest,
  }, children);
}
