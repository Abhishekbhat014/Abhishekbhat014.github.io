import React, { useRef, useEffect } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { ScrollReveal } from './ui/ScrollReveal';
import { FramedText } from './ui/FramedText';
import { ScrollStarEffect } from './ScrollStarEffect';

export const Education = () => {
  const education = portfolioConfig.education;
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let isDragging = false;
    let startX;
    let startY;
    let scrollLeft;
    const dragThreshold = 5;

    const handleWheel = (e) => {
      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft += e.deltaY * 1.2;
      }
    };

    const handlePointerDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      isDown = true;
      isDragging = false;
      startX = e.clientX;
      startY = e.clientY;
      scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
      el.style.scrollBehavior = 'auto'; // Disable smooth scroll physics during active drag
    };

    const handlePointerLeaveOrUp = () => {
      isDown = false;
      isDragging = false;
      el.style.cursor = 'grab';
      el.style.scrollBehavior = 'smooth';
    };

    const handlePointerMove = (e) => {
      if (!isDown) return;
      
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      if (!isDragging) {
        if (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            isDragging = true;
            el.style.cursor = 'grabbing';
          } else {
            isDown = false;
          }
        }
      }

      if (isDragging) {
        e.preventDefault();
        el.scrollLeft = scrollLeft - deltaX * 1.2;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: true });
    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointerleave', handlePointerLeaveOrUp);
    el.addEventListener('pointerup', handlePointerLeaveOrUp);
    el.addEventListener('pointermove', handlePointerMove);

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('pointerdown', handlePointerDown);
      el.removeEventListener('pointerleave', handlePointerLeaveOrUp);
      el.removeEventListener('pointerup', handlePointerLeaveOrUp);
      el.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <section id="education" className="section education-section">
      <ScrollStarEffect starCount={120} baseSpeed={0.08} />
      <div className="glowing-bg-secondary edu-glow"></div>

      <div className="container relative-z">
        <h2 className="section-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial' }}>
          <FramedText>Education</FramedText>
        </h2>
        <ScrollReveal size="md" variant="muted" containerClassName="section-subtitle light-subtitle" align="center">
          My academic timeline and qualifications.
        </ScrollReveal>

        <div className="edu-timeline-container">
          <div className="edu-timeline-line"></div>
          <div ref={scrollRef} className="edu-timeline-scroll">
            {education.map((edu, idx) => (
              <div key={edu.id || idx} className="edu-timeline-node" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="edu-node-point">
                  <div className="edu-node-dot"></div>
                </div>
                
                <div className="edu-timeline-card">
                  <div className="edu-card-glow"></div>
                  <div className="edu-card-header">
                    <div className="edu-card-icon">
                      <GraduationCap size={24} />
                    </div>
                    <div className="edu-card-meta">
                      <span className="edu-card-period">
                        <Calendar size={11} style={{ marginRight: '4px' }} />
                        {edu.period}
                      </span>
                      <h4 className="edu-card-school">{edu.school}</h4>
                    </div>
                  </div>
                  <div className="edu-card-body">
                    <h3 className="edu-card-degree">{edu.degree}</h3>
                    <p className="edu-card-desc">{edu.description}</p>
                    
                    {edu.subjects && (
                      <div className="edu-subjects">
                        <span className="edu-subjects-title">Key Coursework:</span>
                        <div className="edu-subjects-list">
                          {edu.subjects.map((sub, sIdx) => (
                            <span key={sIdx} className="edu-subject-tag">{sub}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .education-section {
          position: relative;
          background-color: #09090b !important;
          color: #f9fafb !important;
          padding: 6rem 0;
        }
        .edu-glow {
          left: 10%;
          bottom: 20%;
          opacity: 0.15;
          filter: blur(80px);
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
        .light-subtitle {
          color: #a1a1aa !important;
          margin-bottom: 2.5rem;
        }
        
        /* Horizontal Timeline Styles */
        .edu-timeline-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding-top: 1rem;
        }
        .edu-timeline-line {
          position: absolute;
          left: 0;
          right: 0;
          top: 22px;
          height: 2px;
          background: linear-gradient(90deg, rgba(249, 115, 22, 0) 0%, rgba(249, 115, 22, 0.4) 15%, rgba(249, 115, 22, 0.4) 85%, rgba(249, 115, 22, 0) 100%);
          z-index: 1;
        }
        .edu-timeline-scroll {
          display: flex;
          flex-direction: row;
          gap: 2.5rem;
          overflow-x: auto;
          padding: 1rem 1rem 2.5rem 1rem;
          justify-content: flex-start;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          position: relative;
          z-index: 2;
          touch-action: pan-y;
          cursor: grab;
        }
        .edu-timeline-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .edu-timeline-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--border-radius-full);
        }
        .edu-timeline-scroll::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.2);
          border-radius: var(--border-radius-full);
          transition: background 0.3s;
        }
        .edu-timeline-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.45);
        }
        
        .edu-timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 380px;
          flex: 0 0 380px;
          gap: 1.5rem;
        }
        .edu-node-point {
          width: 24px;
          height: 24px;
          background: #09090b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }
        .edu-node-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: hsl(var(--primary));
          border: 2.5px solid #09090b;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.6);
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .edu-timeline-node:hover .edu-node-dot {
          transform: scale(1.35);
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.9);
        }

        /* Timeline Card */
        .edu-timeline-card {
          position: relative;
          width: 100%;
          border-radius: var(--border-radius-md);
          background: rgba(15, 15, 18, 0.65) !important;
          backdrop-filter: blur(6px) saturate(120%);
          -webkit-backdrop-filter: blur(6px) saturate(120%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: border-color var(--transition-normal), transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .edu-timeline-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.03) 0%, transparent 100%);
          pointer-events: none;
        }
        .edu-timeline-card:hover {
          border-color: rgba(249, 115, 22, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }
        .edu-card-glow {
          position: absolute;
          width: 130px;
          height: 130px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
          top: -40px;
          right: -40px;
          pointer-events: none;
        }
        .edu-card-header {
          display: flex;
          gap: 1rem;
          align-items: center;
          width: 100%;
        }
        .edu-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: var(--border-radius-sm);
          background: rgba(249, 115, 22, 0.06);
          color: hsl(var(--primary));
          border: 1px solid rgba(249, 115, 22, 0.15);
          flex-shrink: 0;
        }
        .edu-card-meta {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .edu-card-period {
          display: inline-flex;
          align-items: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: hsl(var(--primary));
          background: rgba(249, 115, 22, 0.08);
          padding: 0.15rem 0.5rem;
          border-radius: var(--border-radius-full);
          width: fit-content;
          border: 1px solid rgba(249, 115, 22, 0.12);
        }
        .edu-card-school {
          font-size: 0.85rem;
          font-weight: 600;
          color: #a1a1aa;
          margin: 0;
        }
        .edu-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .edu-card-degree {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.4px;
          line-height: 1.25;
          margin: 0;
        }
        .edu-card-desc {
          font-size: 0.85rem;
          color: #d4d4d8;
          line-height: 1.5;
          margin: 0;
        }
        .edu-subjects {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .edu-subjects-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #a1a1aa;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .edu-subjects-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .edu-subject-tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: #ea580c;
          background: rgba(234, 88, 12, 0.08);
          border: 1px solid rgba(234, 88, 12, 0.15);
          padding: 0.15rem 0.45rem;
          border-radius: var(--border-radius-sm);
        }

        @media (max-width: 768px) {
          .edu-timeline-scroll {
            gap: 1.75rem;
          }
          .edu-timeline-node {
            min-width: 290px;
            flex: 0 0 290px;
          }
          .edu-timeline-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
