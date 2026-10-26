import React from 'react';
import Badge from '../../components/common/Badge/Badge';
import Button from '../../components/common/Button/Button';
import { School, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';

export function SolutionsPage() {
  return (
    <div className="solutions-page" style={{ padding: 'var(--space-16) 0 var(--space-24)' }}>
      <div className="container">
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', marginBottom: 'var(--space-16)' }}>
          <Badge variant="ocean">Tailored Solutions</Badge>
          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            Digital Foundations Built for Real-World Impact
          </h1>
          <p className="lead">
            We deliver targeted software architectures designed to solve operational hurdles
            for educational institutions and growing technology organizations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'var(--space-8)' }}>
          {/* Small Schools */}
          <div id="schools" className="glass-panel" style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sky-400)' }}>
              <School size={24} />
            </div>
            <h2>Small Schools & Learning Centers</h2>
            <p>
              Many small schools are forced to rely on expensive, convoluted enterprise systems
              or scattered spreadsheets. We engineer lightweight, unified software to streamline
              admissions, student records, and parent communication.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                <CheckCircle2 size={16} color="var(--color-sky-400)" />
                Streamlined administrative portals
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                <CheckCircle2 size={16} color="var(--color-sky-400)" />
                Transparent parent & student interfaces
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                <CheckCircle2 size={16} color="var(--color-sky-400)" />
                Cost-effective cloud maintenance
              </li>
            </ul>
          </div>

          {/* Software Businesses */}
          <div id="software" className="glass-panel" style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-sky-400)' }}>
              <Terminal size={24} />
            </div>
            <h2>Software Businesses</h2>
            <p>
              Growing software companies need robust frontend architecture, responsive design systems,
              and scalable backend interfaces to ship products that look and feel world-class.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                <CheckCircle2 size={16} color="var(--color-sky-400)" />
                Modern component architectures & design systems
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                <CheckCircle2 size={16} color="var(--color-sky-400)" />
                SaaS application engineering & optimization
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                <CheckCircle2 size={16} color="var(--color-sky-400)" />
                Responsive, accessible web interfaces
              </li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <Button href="/contact" variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
            Discuss Your Project Needs
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SolutionsPage;
