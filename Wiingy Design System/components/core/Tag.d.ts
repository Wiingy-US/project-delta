import React from 'react';

export interface TagProps {
  /** Tag label */
  children?: React.ReactNode;
  /** Size */
  size?: 'sm' | 'md';
  /** Color variant */
  variant?: 'default' | 'success' | 'warning' | 'accent' | 'brand';
  /** Additional inline styles */
  style?: React.CSSProperties;
}

/**
 * Pill-shaped label for tutor attributes and status indicators.
 *
 * @startingPoint section="Components" subtitle="Pill labels and badges" viewport="700x60"
 */
export function Tag(props: TagProps): React.ReactElement;
