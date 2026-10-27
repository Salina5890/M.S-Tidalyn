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
            <Link to="/" className="site-footer__brand-link" aria-label="M.S Solutions Home">
              <Logo size={70} />
            </Link>

            <p className="site-footer__desc">
              {BRAND.description}
            </p>

            {/* Direct Channels */}
            <div className="site-footer__socials">
              <a
                href={`mailto:${BRAND.email}`}
                className="site-footer__social-link"
                aria-label={`Email ${BRAND.email}`}
                title={`Email: ${BRAND.email}`}
              >
                <Mail size={16} />
                <span>{BRAND.email}</span>
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label="Instagram profile"
                title="Follow us on Instagram"
              >
                <Instagram size={16} />
                <span>{BRAND.instagramHandle}</span>
              </a>
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label="LinkedIn profile"
                title="Connect on LinkedIn"
              >
                <Linkedin size={16} />
                <span>{BRAND.linkedinHandle}</span>
              </a>
            </div>

            <div className="site-footer__trust-tag">
              <ShieldCheck size={16} className="site-footer__trust-icon" />
              <span>Dedicated to reliability, scalability & digital clarity</span>
            </div>
          </div>

          {/* Navigation Columns */}
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
