import React from 'react';
import {
  Monitor,
  Smartphone,
  Cloud,
  GraduationCap,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Code2,
} from 'lucide-react';
import Badge from '../../common/Badge/Badge';
import Button from '../../common/Button/Button';
import { SERVICES } from '../../../data/servicesData';
import './ServicesPreview.css';

const ICON_MAP = {
  Monitor,
  Smartphone,
  Cloud,
  GraduationCap,
  Wrench,
};

export function ServicesPreview() {
  return (
    <section className="services-preview-section" aria-labelledby="services-preview-heading">
      <div className="container">
        {/* Header */}
        <div className="services-preview-header reveal-on-scroll">
          <Badge variant="ocean" icon={<Code2 size={14} />}>
            Focused Offerings
          </Badge>
          <h2 id="services-preview-heading" className="services-preview-title">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="services-preview-lead">
            We focus exclusively on high-impact software engineering domains where we can
            deliver uncompromising quality, scalable architecture, and tangible business value.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="services-preview-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Code2;
            const delayClass = `reveal-delay-${(index % 3) + 1}`;
            const isFeatured = index === 0;

            return (
              <article
                key={service.id}
                className={`services-preview-card ${isFeatured ? 'services-preview-card--featured' : ''} reveal-on-scroll ${delayClass}`}
              >
                <div className="services-preview-card__accent" />

                <div className="services-preview-card__top">
                  <span className="services-preview-card__cat">{service.category}</span>
                  <div className="services-preview-card__icon-wrap">
                    <IconComponent size={22} className="services-preview-card__icon" />
                  </div>
                </div>

                <h3 className="services-preview-card__title">{service.title}</h3>
                <p className="services-preview-card__desc">{service.description}</p>

                <ul className="services-preview-card__features">
                  {service.features.map((feature) => (
                    <li key={feature} className="services-preview-feature">
                      <CheckCircle2 size={14} className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.technologies && service.technologies.length > 0 && (
                  <div className="services-preview-card__tech">
                    <span className="tech-heading">Stack</span>
                    <div className="tech-tags">
                      {service.technologies.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* View All & Consultation CTA */}
        <div className="services-preview-footer reveal-on-scroll">
          <Button
            href="/services"
            variant="secondary"
            size="lg"
            iconRight={<ArrowRight size={16} />}
          >
            Explore Complete Service Details
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
