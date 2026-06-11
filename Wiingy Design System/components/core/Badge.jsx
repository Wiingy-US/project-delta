import React from 'react';

/**
 * Badge — Small status dot or count indicator.
 */
export function Badge({
  children,
  variant = 'default',
  style,
  ...rest
}) {
  const variants = {
    default: { background: 'var(--grey-5)', color: 'var(--grey-2)' },
    brand:   { background: 'var(--blue-600)', color: '#FFFFFF' },
    success: { background: 'var(--color-success)', color: '#FFFFFF' },
    warning: { background: 'var(--color-warning)', color: '#92400E' },
    accent:  { background: 'var(--purple-500)', color: '#FFFFFF' },
  };

  const v = variants[variant] || variants.default;
  const isCount = children !== undefined && children !== null;

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: isCount ? 20 : 8,
    height: isCount ? 20 : 8,
    padding: isCount ? '0 6px' : 0,
    borderRadius: 'var(--radius-pill)',
    background: v.background,
    color: v.color,
    fontFamily: 'var(--font-primary)',
    fontWeight: 700,
    fontSize: 11,
    lineHeight: '12px',
    ...style,
  };

  return React.createElement('span', { style: badgeStyle, ...rest }, children);
}
