import React from 'react';
import { TechMarquee } from './TechMarquee';
import { AsciiWave } from './ui/AsciiWave';
import { FramedText } from './ui/FramedText';
import { portfolioConfig } from '../config/portfolioConfig';
import { Laptop, Globe, Settings } from 'lucide-react';

const getCategoryIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('mobile') || t.includes('desktop') || t.includes('app')) {
    return <Laptop className="category-icon" size={20} />;
  }
  if (t.includes('web') || t.includes('front') || t.includes('back')) {
    return <Globe className="category-icon" size={20} />;
  }
  return <Settings className="category-icon" size={20} />;
};

export const TechStack = () => {
  return (
    <section id="tech-stack" className="section tech-stack-section">
      <AsciiWave className="tech-ascii-bg" color="#f97316" speed={0.8} />
      
      <div className="container relative-z">
        <h2 className="section-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial' }}>
          <FramedText>Tech Stack</FramedText>
        </h2>
        <p className="section-subtitle light-subtitle">Technologies and tools I build with.</p>
        
        <TechMarquee light={true} />

        {/* Detailed Skills Cards Grid */}
        <div className="skills-grid">
          {portfolioConfig.skills.map((category, idx) => (
            <div key={idx} className="skills-card glass-panel">
              <div className="skills-card-header">
                {getCategoryIcon(category.title)}
                <h3 className="skills-card-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bg">
                      <div 
                        className="skill-progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-stack-section {
          position: relative;
          background-color: #ffffff !important; /* Force light background */
          color: #09090b !important;
          padding: 6rem 0;
          overflow: hidden;
        }
        .tech-ascii-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.18; /* Increased visibility */
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
        .light-subtitle {
          color: #4b5563 !important; /* Dark text for light bg */
          margin-bottom: 2rem;
        }

        /* Detailed Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 4.5rem;
          width: 100%;
        }
        .skills-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          border-radius: var(--border-radius-md);
          padding: 2.25rem;
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .skills-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249, 115, 22, 0.4);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.08);
        }
        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 1.25rem;
        }
        .category-icon {
          color: hsl(var(--primary));
          background: rgba(249, 115, 22, 0.06);
          padding: 0.5rem;
          border-radius: var(--border-radius-sm);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(249, 115, 22, 0.15);
        }
        .skills-card-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #09090b;
          letter-spacing: -0.3px;
          margin: 0;
        }
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .skill-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #27272a;
        }
        .skill-percentage {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: hsl(var(--primary));
        }
        .skill-progress-bg {
          width: 100%;
          height: 6px;
          background: rgba(0, 0, 0, 0.04);
          border-radius: var(--border-radius-full);
          overflow: hidden;
        }
        .skill-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #f97316 0%, #ea580c 100%);
          border-radius: var(--border-radius-full);
          transition: width 1.5s cubic-bezier(0.1, 0.8, 0.25, 1);
        }

        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 3rem;
          }
          .tech-stack-section {
            padding: 4rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
