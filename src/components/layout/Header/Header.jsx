import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../../common/Logo/Logo';
import Button from '../../common/Button/Button';
import { NAV_LINKS } from '../../../utils/navigation';
import './Header.css';

/**
 * Reusable Responsive Navigation Header
 * Features frosted ocean-glass backdrop, active link states, and accessible mobile drawer.
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Monitor scroll for enhanced glass shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        {/* Brand Logo */}
        <Link to="/" className="site-header__brand" aria-label="M.S Solutions - M.S Tidalyn Home">
          <Logo variant="full" size={76} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="site-header__nav" aria-label="Primary Navigation">
          <ul className="site-header__menu">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="site-header__menu-item">
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `site-header__link ${isActive ? 'site-header__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Action / CTA */}
        <div className="site-header__actions">
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            iconRight={<ArrowUpRight size={14} />}
          >
            Get in Touch
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="site-header__mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`site-header__mobile-drawer ${
          mobileMenuOpen ? 'site-header__mobile-drawer--open' : ''
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container site-header__mobile-drawer-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="site-header__mobile-menu">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="site-header__mobile-item">
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `site-header__mobile-link ${
                        isActive ? 'site-header__mobile-link--active' : ''
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__mobile-cta">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              style={{ width: '100%' }}
              iconRight={<ArrowUpRight size={16} />}
            >
              Get in Touch
            </Button>
            <p className="site-header__mobile-slogan">Where Ideas Take Flight.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
