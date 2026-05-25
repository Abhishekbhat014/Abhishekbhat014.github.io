import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { ScrollTimeline } from './ui/ScrollTimeline';
import { FramedText } from './ui/FramedText';

export const Experience = () => {
  const experiences = portfolioConfig.experiences;

  const timelineEvents = experiences.map(exp => ({
    id: exp.id,
    year: exp.period,
    title: exp.role,
    subtitle: `${exp.company} — ${exp.location}`,
    description: exp.description,
    icon: <Briefcase className="st-badge-icon" size={14} />
  }));

  return (
    <section id="experience" className="section experience-section">
      <div className="glowing-bg exp-glow-1"></div>

      <div className="container relative-z">
        <h2 className="section-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial' }}>
          <FramedText>Experience</FramedText>
        </h2>
        <p className="section-subtitle">My professional career timeline.</p>

        <div className="exp-layout-centered" style={{ maxWidth: '1000px', margin: '2rem auto 0' }}>
          {/* Work Experience Timeline */}
          <div className="timeline-column">
            <h3 className="column-header" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Briefcase className="header-icon" />
              Work History
            </h3>
            
            <ScrollTimeline 
              events={timelineEvents}
              title=""
              subtitle=""
              darkMode={true}
              cardAlignment="alternating"
              cardVariant="elevated"
              cardEffect="shadow"
              revealAnimation="slide"
              progressIndicator={true}
              connectorStyle="line"
              dateFormat="badge"
            />
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          position: relative;
          background-color: #09090b !important; /* Force dark background */
          color: #f9fafb !important;
        }
        .exp-glow-1 {
          right: 5%;
          top: 20%;
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
        .exp-layout-centered {
          max-width: 800px;
          margin: 2rem auto 0;
        }
        .timeline-column {
          display: flex;
          flex-direction: column;
        }
        .column-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: #f9fafb !important;
        }
        .header-icon {
          color: hsl(var(--primary));
        }
        .timeline-container {
          position: relative;
          border-left: 2px solid rgba(255, 255, 255, 0.1);
          padding-left: 2rem;
          margin-left: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .timeline-card {
          position: relative;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all var(--transition-normal);
        }
        .timeline-card.active {
          border-color: rgba(251, 146, 60, 0.4);
          box-shadow: 0 4px 20px 0 var(--primary-glow);
        }
        .timeline-dot {
          position: absolute;
          left: calc(-2rem - 6px);
          top: 24px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #09090b;
          border: 2px solid hsl(var(--primary));
          transition: all var(--transition-normal);
        }
        .timeline-card.active .timeline-dot {
          background: hsl(var(--primary));
          box-shadow: 0 0 10px 0 hsl(var(--primary));
        }
        .card-header-clickable {
          cursor: pointer;
          position: relative;
          padding-right: 2rem;
        }
        .header-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .timeline-period {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: hsl(var(--primary));
        }
        .current-tag {
          font-size: 0.75rem;
          font-weight: 600;
          background: hsl(var(--primary-glow));
          color: hsl(var(--primary));
          padding: 0.15rem 0.6rem;
          border-radius: var(--border-radius-full);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        .role-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #f9fafb !important;
        }
        .company-name {
          font-size: 1rem;
          font-weight: 500;
          color: #a1a1aa !important;
          margin-bottom: 0.5rem;
        }
        .location-info {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.85rem;
          color: #71717a !important;
        }
        .expand-trigger {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #71717a !important;
          transition: color var(--transition-fast);
        }
        .card-header-clickable:hover .expand-trigger {
          color: #f9fafb !important;
        }
        .card-body-expandable {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal), margin var(--transition-normal);
        }
        .card-body-expandable.open {
          max-height: 500px;
          margin-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.25rem;
        }
        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-left: 1.25rem;
          list-style-type: disc;
        }
        .achievement-item {
          font-size: 0.95rem;
          color: #a1a1aa !important;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .timeline-container {
            padding-left: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
