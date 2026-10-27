import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, ShieldCheck, Instagram, Linkedin } from 'lucide-react';
import Logo from '../../common/Logo/Logo';
import WaveDecor from '../../../assets/icons/WaveDecor';
import { BRAND, FOOTER_SECTIONS } from '../../../utils/navigation';
import './Footer.css';

/**
 * Reusable Corporate Footer
 * Features company brand, exact slogan, purposeful navigation pillars, and ocean accent.
 */
export function Footer() {
  return (
    <footer className="site-footer">
      {/* Subtle ocean wave top border */}
      <WaveDecor opacity={0.25} className="site-footer__wave" />

      <div className="container site-footer__main">
        <div className="site-footer__grid">
          <div className="site-footer__brand-col">
            <Link to="/" className="site-footer__brand-badge" aria-label="M.S Solutions Home">
              <Logo size={44} />
            </Link>

            <p className="site-footer__desc">
              {BRAND.description}
            </p>

            {/* Direct Connected Channels */}
            <div className="site-footer__social-row">
              <a
                href={`mailto:${BRAND.email}`}
                className="site-footer__social-circle"
                aria-label={`Email us at ${BRAND.email}`}
                title={`Email: ${BRAND.email}`}
              >
                <Mail size={17} />
              </a>
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-circle"
                aria-label="Connect on LinkedIn"
                title="LinkedIn Company Page"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-circle"
                aria-label="Follow us on Instagram"
                title="Instagram Profile"
              >
                <Instagram size={17} />
              </a>
            </div>

            <div className="site-footer__trust-tag">
              <ShieldCheck size={15} className="site-footer__trust-icon" />
              <span>Reliable Engineering &bull; Modern Cloud Systems</span>
            </div>
          </div>

          {/* 3 Balanced Navigation Columns */}
          <div className="site-footer__nav-cols">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="site-footer__col">
                <h4 className="site-footer__col-title">{section.title}</h4>
                <ul className="site-footer__links">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('#') || link.href.startsWith('mailto:') ? (
                        <a href={link.href} className="site-footer__link">
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.href} className="site-footer__link">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Company Recognition Bar */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            &copy; {new Date().getFullYear()} <strong>M.S Solutions</strong>. All rights reserved.
          </p>
          <p className="site-footer__slogan">
            &ldquo;{BRAND.slogan}&rdquo;
          </p>
          <div className="site-footer__bottom-links">
            <Link to="/about" className="site-footer__bottom-link">About</Link>
            <span className="dot-divider">&bull;</span>
            <Link to="/services" className="site-footer__bottom-link">Services</Link>
            <span className="dot-divider">&bull;</span>
            <Link to="/contact" className="site-footer__bottom-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
