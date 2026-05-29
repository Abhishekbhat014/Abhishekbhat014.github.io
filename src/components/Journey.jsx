import React from 'react';
import FlowArt, { FlowSection } from './FlowArt';
import { portfolioConfig } from '../config/portfolioConfig';
import { BookOpen, Code, Compass, Award } from 'lucide-react';
import { FramedText } from './ui/FramedText';

export const Journey = () => {
  const { longBio } = portfolioConfig.personalInfo;

  return (
    <div id="journey" className="journey-wrapper">
      <FlowArt>
        {/* Slide 1: Introduction */}
        <FlowSection className="journey-slide slide-1">
          <div className="slide-glow glow-orange"></div>
          <div className="slide-card light-panel">
            <div className="slide-content-container">
              <div className="slide-header">
                <span className="slide-index">01 / INTRODUCTION</span>
                <BookOpen size={28} className="slide-icon" />
              </div>
              <div className="slide-body">
                <h2 className="slide-title">
                  <FramedText>Who I Am</FramedText>
                </h2>
                <p className="slide-text">
                  I am a passionate software engineer with 3+ years of experience designing and implementing scalable web applications. I love building solutions that make a tangible difference in people's lives.
                </p>
                <p className="slide-text">
                  I thrive in collaborative environments, solving complex technical challenges, and writing clean, maintainable, and well-tested code.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Slide 2: Technical Focus */}
        <FlowSection className="journey-slide slide-2">
          <div className="slide-glow glow-yellow"></div>
          <div className="slide-card light-panel">
            <div className="slide-content-container">
              <div className="slide-header">
                <span className="slide-index">02 / TECHNICAL FOCUS</span>
                <Code size={28} className="slide-icon" />
              </div>
              <div className="slide-body">
                <h2 className="slide-title">
                  <FramedText>Architectural Focus</FramedText>
                </h2>
                <p className="slide-text">
                  My expertise spans across frontend engineering (React, Next.js, responsive layout architectures) and backend systems (Node.js, Express, PostgreSQL, REST/GraphQL APIs).
                </p>
                <p className="slide-text">
                  In my coding process, I prioritize clean semantics, performance optimization, and scalable styling patterns to craft delightful and accessible user interfaces.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Slide 3: Philosophy */}
        <FlowSection className="journey-slide slide-3">
          <div className="slide-glow glow-orange"></div>
          <div className="slide-card light-panel">
            <div className="slide-content-container">
              <div className="slide-header">
                <span className="slide-index">03 / PHILOSOPHY</span>
                <Compass size={28} className="slide-icon" />
              </div>
              <div className="slide-body">
                <h2 className="slide-title">
                  <FramedText>My Philosophy</FramedText>
                </h2>
                <p className="slide-text">
                  I believe in writing software that is not only functional, but clean, elegant, and maintainable. I focus on optimizing performance at every level, ensuring quick page loads and smooth user experiences.
                </p>
                <p className="slide-text">
                  Outside of core engineering, I love exploring open-source projects, writing tech articles, and contributing back to developer communities.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Slide 4: Impact & Stats */}
        <FlowSection className="journey-slide slide-4">
          <div className="slide-glow glow-yellow"></div>
          <div className="slide-card light-panel">
            <div className="slide-content-container">
              <div className="slide-header">
                <span className="slide-index">04 / IMPACT METRICS</span>
                <Award size={28} className="slide-icon" />
              </div>
              <div className="slide-body">
                <h2 className="slide-title">
                  <FramedText>Metrics & Commits</FramedText>
                </h2>
                <p className="slide-text">
                  Over the course of my career, I've designed and delivered robust applications that combine visual excellence with solid backend performance.
                </p>
                
                <div className="journey-stats-grid">
                  <div className="journey-stat-card">
                    <span className="j-stat-num">3+</span>
                    <span className="j-stat-lbl">Years Experience</span>
                  </div>
                  <div className="journey-stat-card">
                    <span className="j-stat-num">15+</span>
                    <span className="j-stat-lbl">Projects Completed</span>
                  </div>
                  <div className="journey-stat-card">
                    <span className="j-stat-num">500+</span>
                    <span className="j-stat-lbl">GitHub Commits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FlowSection>
      </FlowArt>

      <style>{`
        .journey-wrapper {
          position: relative;
          width: 100%;
          background-color: #ffffff !important; /* Alternating White Background */
          z-index: 2;
        }
        .journey-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          position: relative;
        }
        .flow-art-container {
          width: 100% !important;
          height: 100% !important;
          min-height: 100vh !important;
          position: relative;
        }
        .slide-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.25; /* Increased opacity so it blooms through the glass blur */
          pointer-events: none;
          z-index: 0;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .glow-orange {
          background: radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%);
          left: 10%;
          top: 15%;
        }
        .glow-yellow {
          background: radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%);
          right: 10%;
          bottom: 15%;
        }
        .slide-card {
          position: absolute;
          top: 2rem;
          left: 2rem;
          right: 2rem;
          bottom: 4.5rem;
          z-index: 1;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          background: rgba(255, 255, 255, 0.75); /* Glassmorphic background */
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          border-radius: var(--border-radius-md);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .slide-content-container {
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        .slide-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 1rem;
        }
        .slide-index {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: hsl(var(--primary));
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .slide-icon {
          color: hsl(var(--secondary));
        }
        .slide-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #09090b;
        }
        .slide-text {
          font-size: 1.1rem;
          color: #27272a;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }
        .slide-text:last-of-type {
          margin-bottom: 0;
        }
        .journey-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2.5rem;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 2rem;
        }
        .journey-stat-card {
          text-align: center;
          padding: 1rem;
          background: #f9fafb;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: var(--border-radius-sm);
        }
        .j-stat-num {
          display: block;
          font-family: var(--font-mono);
          font-size: 2.5rem;
          font-weight: 800;
          color: hsl(var(--primary));
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .j-stat-lbl {
          font-size: 0.8rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .journey-slide, [data-flow-section], .flow-art-container {
            height: 75vh !important;
            min-height: 75vh !important;
          }
          .slide-card {
            position: relative;
            top: auto;
            bottom: auto;
            left: auto;
            right: auto;
            width: calc(100% - 2rem);
            height: auto;
            max-height: 85vh;
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            overflow-y: auto;
            margin: 0 auto;
          }
          .slide-content-container {
            max-width: 100%;
          }
          .slide-title {
            font-size: 1.75rem;
          }
          .slide-text {
            font-size: 1rem;
          }
          .journey-stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            margin-top: 1.5rem;
            padding-top: 1rem;
          }
          .journey-stat-card {
            padding: 0.5rem 0.25rem;
          }
          .j-stat-num {
            font-size: 1.75rem;
          }
          .j-stat-lbl {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Journey;
