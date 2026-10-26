import React from 'react';
import {
  Monitor,
  Smartphone,
  Cloud,
  GraduationCap,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import Badge from '../../components/common/Badge/Badge';
import Button from '../../components/common/Button/Button';
import { BRAND } from '../../utils/navigation';
import { SERVICES } from '../../data/servicesData';
import useScrollReveal from '../../utils/useScrollReveal';
import './ServicesPage.css';

/* Map icon names from data to actual Lucide components */
const ICON_MAP = {
  Monitor: Monitor,
  Smartphone: Smartphone,
  Cloud: Cloud,
  GraduationCap: GraduationCap,
  Wrench: Wrench,
};

/**
 * ServicesPage Component
 * Showcases all M.S Tidalyn service offerings in a premium card layout.
 */
export function ServicesPage() {
  useScrollReveal();

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="services-hero reveal-on-scroll" aria-labelledby="services-title">
        <div className="container">
          <div className="services-hero__content">
            <h1 id="services-title" className="services-hero__title">
              What We <span className="text-gradient">Build</span>
            </h1>
            <p className="services-hero__lead">
              From full-stack web applications and mobile apps to SaaS platforms and
              school websites — {BRAND.shortName} delivers modern, scalable technology
              solutions crafted with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section" aria-label="Service Offerings">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((service, index) => {
              const IconComponent = ICON_MAP[service.icon] || Zap;
              const delayClass = `reveal-delay-${(index % 4) + 1}`;
              return (
                <article
                  key={service.id}
                  className={`service-card service-card--${index === 0 ? 'featured' : 'standard'} reveal-on-scroll ${delayClass}`}
                >
                  {/* Card Top Accent */}
                  <div className="service-card__accent" />

                  {/* Category Tag */}
                  <span className="service-card__category">{service.category}</span>

                  {/* Icon */}
                  <div className="service-card__icon-wrap">
                    <IconComponent size={26} className="service-card__icon" />
                  </div>

                  {/* Title & Description */}
                  <h2 className="service-card__title">{service.title}</h2>
                  <p className="service-card__desc">{service.description}</p>

                  {/* Features List */}
                  <ul className="service-card__features">
                    {service.features.map((feature) => (
                      <li key={feature} className="service-card__feature">
                        <CheckCircle2
                          size={16}
                          className="service-card__feature-icon"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  {service.technologies.length > 0 && (
                    <div className="service-card__tech">
                      <span className="service-card__tech-label">Tech Stack</span>
                      <div className="service-card__tech-tags">
                        {service.technologies.map((tech) => (
                          <span key={tech} className="service-card__tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Link */}
                  <div className="service-card__cta">
                    <Button
                      href={`/contact?service=${service.id}`}
                      variant="outline"
                      size="sm"
                      iconRight={<ArrowRight size={14} />}
                    >
                      Inquire
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="services-cta" aria-labelledby="services-cta-title">
        <div className="container">
          <div className="services-cta__card">
            <div className="services-cta__content">
              <span className="eyebrow">Have a Project in Mind?</span>
              <h2 id="services-cta-title" className="services-cta__title">
                Let's bring your vision to life.
              </h2>
              <p className="services-cta__desc">
                Whether you need a custom web application, a mobile app for your
                school, or ongoing software support — our team is ready to deliver.
              </p>
            </div>
            <div className="services-cta__action">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight size={18} />}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
