import React from 'react';

export interface BadgeProps {
  /** Count or text content — omit for a status dot */
  children?: React.ReactNode;
  /** Color variant */
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'accent';
  /** Additional inline styles */
  style?: React.CSSProperties;
}

/**
 * Small status dot or count indicator.
 */
export function Badge(props: BadgeProps): React.ReactElement;
