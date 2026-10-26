import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Reusable Button component for M.S Tidalyn
 *
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} variant - Visual style variant
 * @param {'sm' | 'md' | 'lg'} size - Button size
 * @param {string} href - If provided, renders as router Link or anchor
 * @param {React.ReactNode} iconLeft - Optional icon before label
 * @param {React.ReactNode} iconRight - Optional icon after label
 * @param {boolean} isExternal - Whether link is external
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  iconLeft,
  iconRight,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  const content = (
    <>
      {iconLeft && <span className="btn__icon btn__icon--left">{iconLeft}</span>}
      <span className="btn__text">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith('#')) {
      return (
        <a
          href={href}
          className={classes}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
}

export default Button;
