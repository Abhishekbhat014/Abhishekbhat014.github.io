import React, { useRef, createContext, useContext, useMemo } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { portfolioConfig } from '../config/portfolioConfig';
import { ScrollReveal } from './ui/ScrollReveal';
import { FramedText } from './ui/FramedText';
import { ScrollStarEffect } from './ScrollStarEffect';

// Scroll Animation Context to share scroll state with cards
const ContainerScrollContext = createContext(undefined);

function useContainerScrollContext() {
  const context = useContext(ContainerScrollContext);
  if (!context) {
    throw new Error("useContainerScrollContext must be used within a ContainerScroll");
  }
  return context;
}

const ContainerScroll = ({ children, className = "", style = {}, ...props }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 150px", "end 150px"],
  });

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={`edu-scroll-container ${className}`}
        style={{ perspective: "1000px", ...style }}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};

const CardsContainer = ({ children, className = "", style = {}, ...props }) => {
  return (
    <div
      className={`edu-cards-wrapper ${className}`}
      style={{ perspective: "1000px", ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

const CardTransformed = ({
  arrayLength,
  index,
  incrementY = 20,
  incrementZ = 15,
  incrementRotation = (index - (arrayLength - 1) / 2) * -6, // Fan-out rotation
  className = "",
  style = {},
  children,
  ...props
}) => {
  const { scrollYProgress } = useContainerScrollContext();

  const start = index / (arrayLength + 1);
  const end = (index + 1) / (arrayLength + 1);
  const range = useMemo(() => [start, end], [start, end]);
  
  // Soft hover/exit ranges for a natural transition
  const rotateRange = [Math.max(0, start - 0.25), Math.min(1, end + 0.15)];

  // y-translation moves the card up and away
  const y = useTransform(scrollYProgress, range, ["0%", "-100%"]);
  
  // rotate transitions card from fan-out angle to straight as it rises
  const rotate = useTransform(scrollYProgress, rotateRange, [incrementRotation, 0]);
  
  // scale down slightly as card peels off
  const scale = useTransform(scrollYProgress, range, [1, 0.95]);
  
  // fade out quickly as card slides up
  const opacity = useTransform(scrollYProgress, [start, start + (end - start) * 0.7], [1, 0]);
  
  // 3D Stacking transform
  const transform = useMotionTemplate`translateZ(${index * incrementZ}px) translateY(${y}) rotate(${rotate}deg)`;

  // Dynamic soft drop shadow mapping
  const dx = useTransform(scrollYProgress, rotateRange, [2, 0]);
  const dy = useTransform(scrollYProgress, rotateRange, [6, 12]);
  const blur = useTransform(scrollYProgress, rotateRange, [8, 16]);
  const alpha = useTransform(scrollYProgress, rotateRange, [0.15, 0.25]);
  const filter = useMotionTemplate`drop-shadow(${dx}px ${dy}px ${blur}px rgba(0,0,0,${alpha}))`;

  const cardStyle = {
    top: index * incrementY,
    transform,
    opacity,
    scale,
    backfaceVisibility: "hidden",
    zIndex: (arrayLength - index) * 10,
    filter,
    ...style,
  };

  return (
    <motion.div
      style={cardStyle}
      className={`edu-transformed-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const Education = () => {
  const education = portfolioConfig.education;

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

        <ContainerScroll>
          <div className="edu-sticky-wrapper">
            <CardsContainer>
              {education.map((edu, idx) => (
                <CardTransformed
                  key={edu.id || idx}
                  index={idx}
                  arrayLength={education.length}
                >
                  <div className="edu-card-glow"></div>
                  <div className="edu-card-inner">
                    <div className="edu-card-icon">
                      <GraduationCap size={28} />
                    </div>
                    <div className="edu-card-details">
                      <span className="edu-card-period">
                        <Calendar size={12} style={{ marginRight: '4px' }} />
                        {edu.period}
                      </span>
                      <h3 className="edu-card-degree">{edu.degree}</h3>
                      <h4 className="edu-card-school">{edu.school}</h4>
                    </div>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      </div>

      <style>{`
        .education-section {
          position: relative;
          background-color: #09090b !important;
          color: #f9fafb !important;
          padding-bottom: 6rem;
        }
        .edu-glow {
          left: 10%;
          bottom: 20%;
          opacity: 0.15;
          filter: blur(80px);
        }
        .relative-z {
          position: relative;
          z-index: 1;
        }
        .light-subtitle {
          color: #a1a1aa !important;
          margin-bottom: 4rem;
        }
        .edu-scroll-container {
          position: relative;
          height: 130vh;
          width: 100%;
        }
        .edu-sticky-wrapper {
          position: sticky;
          top: 150px;
          height: 40vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .edu-cards-wrapper {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 220px;
        }
        .edu-transformed-card {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          border-radius: var(--border-radius-md);
          background: rgba(15, 15, 18, 0.98) !important;
          backdrop-filter: blur(16px) saturate(120%);
          -webkit-backdrop-filter: blur(16px) saturate(120%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
          padding: 2.2rem;
          display: flex;
          align-items: center;
          transition: border-color var(--transition-normal);
        }
        .edu-transformed-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.04) 0%, transparent 100%);
          pointer-events: none;
        }
        .edu-transformed-card:hover {
          border-color: rgba(249, 115, 22, 0.35);
        }
        .edu-card-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
          top: -50px;
          right: -50px;
          pointer-events: none;
        }
        .edu-card-inner {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          width: 100%;
        }
        .edu-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: var(--border-radius-sm);
          background: rgba(249, 115, 22, 0.06);
          color: hsl(var(--primary));
          border: 1px solid rgba(249, 115, 22, 0.15);
          flex-shrink: 0;
        }
        .edu-card-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .edu-card-period {
          display: inline-flex;
          align-items: center;
          font-size: 0.8rem;
          font-weight: 600;
          color: hsl(var(--primary));
          background: rgba(249, 115, 22, 0.08);
          padding: 0.15rem 0.6rem;
          border-radius: var(--border-radius-full);
          width: fit-content;
          border: 1px solid rgba(249, 115, 22, 0.12);
          margin-bottom: 0.25rem;
        }
        .edu-card-degree {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
        }
        .edu-card-school {
          font-size: 1rem;
          font-weight: 500;
          color: #d4d4d8;
        }

        @media (max-width: 600px) {
          .edu-cards-wrapper {
            max-width: 100%;
            height: 200px;
            padding: 0 1rem;
          }
          .edu-transformed-card {
            padding: 1.5rem;
            width: calc(100% - 2rem);
            left: 1rem;
          }
          .edu-card-icon {
            width: 50px;
            height: 50px;
          }
          .edu-card-degree {
            font-size: 1.15rem;
          }
          .edu-card-school {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
