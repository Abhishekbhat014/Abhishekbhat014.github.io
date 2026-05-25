import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { ImageReveal } from './ui/ImageReveal';
import { FramedText } from './ui/FramedText';

export const Blogs = () => {
  return (
    <section id="blogs" className="section blogs-section">
      <div className="container relative-z">
        <h2 className="section-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial' }}>
          <FramedText>My Blogs</FramedText>
        </h2>
        <ScrollReveal size="md" variant="muted" containerClassName="section-subtitle" align="center">
          Writing about software engineering, UI designs, and system architectures.
        </ScrollReveal>
        
        <ImageReveal />
      </div>

      <style>{`
        .blogs-section {
          position: relative;
          background-color: #09090b !important; /* Force dark background */
          color: #f9fafb !important;
          padding: 6rem 0;
          overflow: hidden;
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default Blogs;
