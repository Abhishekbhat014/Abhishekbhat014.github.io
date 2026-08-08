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
                  <FramedText>Software Developer</FramedText>
                </h2>
                <p className="slide-text">
                  I am a software developer who builds practical, real-world applications. I enjoy understanding requirements and turning them into working software that solves actual problems.
                </p>
                <p className="slide-text">
                  Through independent projects and professional internship experience, I have developed the ability to take an application from concept to a shipped, working product.
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
                  <FramedText>Mobile & Web</FramedText>
                </h2>
                <p className="slide-text">
                  My strongest areas are mobile development with Flutter and web development with React. I build responsive, clean user interfaces backed by robust business logic.
                </p>
                <p className="slide-text">
                  I also have strong experience with backend and data integration using Supabase, PostgreSQL, and REST APIs, allowing me to build end-to-end solutions.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Slide 3: Professional Experience */}
        <FlowSection className="journey-slide slide-3">
          <div className="slide-glow glow-orange"></div>
          <div className="slide-card light-panel">
            <div className="slide-content-container">
              <div className="slide-header">
                <span className="slide-index">03 / PROFESSIONAL EXPERIENCE</span>
                <Compass size={28} className="slide-icon" />
              </div>
              <div className="slide-body">
                <h2 className="slide-title">
                  <FramedText>Real-world Impact</FramedText>
                </h2>
                <p className="slide-text">
                  During my recent Software Development Internship, I engineered a production-ready mobile application for Regenboog India Foundation to streamline their student sponsorship workflows.
                </p>
                <p className="slide-text">
                  This involved collaborating with international stakeholders, translating complex requirements into UI, and integrating secure backend data systems.
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
                <span className="slide-index">04 / ACHIEVEMENTS</span>
                <Award size={28} className="slide-icon" />
              </div>
              <div className="slide-body">
                <h2 className="slide-title">
                  <FramedText>Proof of Work</FramedText>
                </h2>
                <p className="slide-text">
                  I have built multiple complete applications and continuously refine my software engineering skills through competitive challenges and real-world implementation.
                </p>
                
                <div className="journey-stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  <div className="journey-stat-card">
                    <span className="j-stat-num" style={{ fontSize: '1.5rem' }}>1st Runner-Up</span>
                    <span className="j-stat-lbl">Code Master National Level (300+ participants)</span>
                  </div>
                  <div className="journey-stat-card">
                    <span className="j-stat-num" style={{ fontSize: '1.5rem' }}>4+</span>
                    <span className="j-stat-lbl">Major Projects & Internship App</span>
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
          background: rgba(255, 255, 255, 0.95);
          border-radius: var(--border-radius-md);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem;
        }
        .slide-content-container {
          width: 100%;
          max-width: 900px;
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
