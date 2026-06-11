import React from 'react';

/**
 * Tag — Pill-shaped label for tutor attributes and status indicators.
 * Uses the signature Wiingy "sheen" gradient.
 */
export function Tag({
  children = 'Student favorite',
  size = 'md',
  variant = 'default',
  style,
  ...rest
}) {
  const isSm = size === 'sm';
  const fontSize = isSm ? 12 : 14;
  const padding = isSm ? '2px 8px' : '4px 10px';

  const variants = {
    default: {
      background: 'linear-gradient(12.78deg, #F1F1F1 3.63%, #FFF 13.83%, #FFF 68.55%, #EFEFEF 90.81%)',
      color: 'var(--grey-1)',
      shadow: '0 0 0 1px #fff, 0px 4px 10px 0px rgba(0,0,0,0.16)',
    },
    success: {
      background: '#E8F5E9',
      color: 'var(--color-success)',
      shadow: 'none',
    },
    warning: {
      background: '#FFF8E1',
      color: '#92400E',
      shadow: 'none',
    },
    accent: {
      background: 'var(--purple-50)',
      color: 'var(--purple-700)',
      shadow: 'none',
    },
    brand: {
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      shadow: 'none',
    },
  };

  const v = variants[variant] || variants.default;

  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding,
    borderRadius: 'var(--radius-pill)',
    background: v.background,
    color: v.color,
    boxShadow: v.shadow,
    fontFamily: 'var(--font-primary)',
    fontWeight: 700,
    fontSize,
    lineHeight: isSm ? '14px' : '16px',
    whiteSpace: 'nowrap',
    ...style,
  };

  return React.createElement('span', { style: tagStyle, ...rest }, children);
}
