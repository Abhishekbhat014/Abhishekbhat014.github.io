import React from 'react';
import { TechMarquee } from './TechMarquee';
import { AsciiWave } from './ui/AsciiWave';
import { FramedText } from './ui/FramedText';

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
        }
      `}</style>
    </section>
  );
};

export default TechStack;
