import React from 'react';
import {
  Search,
  Layers,
  Palette,
  Code,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  Workflow,
  Cpu,
  GitBranch,
  Headphones,
} from 'lucide-react';
import Badge from '../../common/Badge/Badge';
import { WORKFLOW_STEPS } from '../../../data/workflowData';
import './HowWeWork.css';

const ICON_MAP = {
  Search,
  Layers,
  Palette,
  Code,
  ShieldCheck,
  Rocket,
};

export function HowWeWork() {
  return (
    <section className="how-we-work-section" aria-labelledby="workflow-heading">
      <div className="container">
        {/* Header */}
        <div className="how-we-work-header reveal-on-scroll">
          <Badge variant="ocean" icon={<Workflow size={14} />}>
            Structured Delivery
          </Badge>
          <h2 id="workflow-heading" className="how-we-work-title">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="how-we-work-lead">
            Great software requires discipline, clarity, and precision. Our 6-step development
            methodology ensures transparent collaboration, clean architecture, and reliable
            delivery at every milestone.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Code;
            const delayClass = `reveal-delay-${(index % 3) + 1}`;

            return (
              <div
                key={item.step}
                className={`workflow-card reveal-on-scroll ${delayClass}`}
              >
                <div className="workflow-card__top">
                  <span className="workflow-card__step-num">{item.step}</span>
                  <div className="workflow-card__icon-wrap">
                    <IconComponent size={22} className="workflow-card__icon" />
                  </div>
                </div>

                <h3 className="workflow-card__title">{item.title}</h3>
                <span className="workflow-card__subtitle">{item.subtitle}</span>

                <p className="workflow-card__desc">{item.description}</p>

                <div className="workflow-card__deliverables">
                  <span className="deliverables-heading">Deliverables</span>
                  <ul className="deliverables-list">
                    {item.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="deliverable-item">
                        <CheckCircle2 size={14} className="deliverable-icon" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Startup Working Principles Bar */}
        <div className="workflow-guarantees reveal-on-scroll">
          <div className="workflow-guarantee-card">
            <div className="guarantee-icon-wrap">
              <Cpu size={22} />
            </div>
            <div>
              <h4 className="guarantee-title">Direct Engineering Access</h4>
              <p className="guarantee-desc">
                No bureaucratic layers or account managers. You collaborate directly with the engineers building your software.
              </p>
            </div>
          </div>

          <div className="workflow-guarantee-card">
            <div className="guarantee-icon-wrap">
              <GitBranch size={22} />
            </div>
            <div>
              <h4 className="guarantee-title">Complete Code Ownership</h4>
              <p className="guarantee-desc">
                Clean, documented Git repositories. You own 100% of your source code, assets, and intellectual property.
              </p>
            </div>
          </div>

          <div className="workflow-guarantee-card">
            <div className="guarantee-icon-wrap">
              <Headphones size={22} />
            </div>
            <div>
              <h4 className="guarantee-title">Reliable Post-Launch Support</h4>
              <p className="guarantee-desc">
                We stay engaged beyond launch to assist with cloud configurations, bug fixes, and seamless operational continuity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
