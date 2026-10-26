import React from 'react';
import './Badge.css';

/**
 * Reusable Badge / Pill component
 * Supports subtle oceanic glass backgrounds and soaring icon slot
 */
export function Badge({
  children,
  icon,
  variant = 'ocean', // 'ocean' | 'subtle' | 'glow'
  className = '',
}) {
  return (
    <div className={`badge badge--${variant} ${className}`}>
      {icon && <span className="badge__icon">{icon}</span>}
      <span className="badge__text">{children}</span>
    </div>
  );
}

export default Badge;
