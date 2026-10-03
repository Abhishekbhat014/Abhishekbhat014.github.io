import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X, ChevronRight, Folder, Smartphone, Globe, Monitor, ArrowRight } from 'lucide-react';
import { motion, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { portfolioConfig } from '../config/portfolioConfig';
import { GithubIcon } from './SocialIcons';
import { FramedText } from './ui/FramedText';

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case 'mobile':
      return <Smartphone size={28} />;
    case 'frontend':
      return <Monitor size={28} />;
    case 'full-stack':
    case 'web app':
      return <Globe size={28} />;
    default:
      return <Folder size={28} />;
  }
};

const ProjectCardContent = ({ project, onExploreClick }) => (
  <>
    <div className="card-top-glow"></div>
    <div className="card-header">
      <span className="card-badge">{project.category}</span>
      <div className="card-icon-box">
        {getCategoryIcon(project.category)}
      </div>
    </div>
    <div className="card-body">
      <span className="card-subtitle">{project.subtitle}</span>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.description}</p>
    </div>
    <div className="card-tech">
      {project.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="tech-tag">{tag}</span>
      ))}
      {project.tags.length > 3 && (
        <span className="tech-tag-more">+{project.tags.length - 3}</span>
      )}
    </div>
    <div className="card-footer">
      <button 
        type="button" 
        className="explore-btn"
        onClick={(e) => {
          if (onExploreClick) {
            e.stopPropagation();
            onExploreClick();
          }
        }}
        aria-label={`Explore details for ${project.title}`}
      >
        Explore Details <ChevronRight size={14} />
      </button>
    </div>
  </>
);

// Single Transformed Card inside the Circular Gallery
const CardTransformed = ({ project, index, totalProjects, smoothRotation, onDetailsClick, onExploreClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const spacing = 18; // Spacing in degrees between cards
  const startAngle = index * spacing;

  // Base angle based on drag rotation
  const baseAngle = useTransform(smoothRotation, (val) => startAngle - val);

  // Normalize angle between -180 and 180 to calculate visual state correctly no matter how many times they spin
  const normalizedAngle = useTransform(baseAngle, (val) => {
    let a = val % 360;
    if (a > 180) a -= 360;
    if (a < -180) a += 360;
    return a;
  });

  // Transformed values based on how close the card is to the active top-center (0 degrees)
  const scale = useTransform(normalizedAngle, [-45, -20, 0, 20, 45], [0.7, 0.85, 1, 0.85, 0.7]);
  const opacity = useTransform(normalizedAngle, [-45, -20, 0, 20, 45], [0.15, 0.5, 1, 0.5, 0.15]);
  const blur = useTransform(normalizedAngle, [-45, -20, 0, 20, 45], [10, 4, 0, 4, 10]);

  // Stacking order: the card closest to 0 degrees should always be on top
  const zIndex = useTransform(normalizedAngle, (val) => {
    const distance = Math.abs(val);
    return Math.round((100 - distance) * 10);
  });

  const filter = useMotionTemplate`blur(${blur}px)`;
  const transform = useMotionTemplate`translate(-50%, -50%) rotate(${baseAngle}deg) scale(${scale})`;

  const radius = isMobile ? 420 : 560;
  const cardStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: isMobile ? "260px" : "340px",
    height: isMobile ? "360px" : "420px",
    transformOrigin: `center ${radius}px`, // Rotation radius
    transform,
    opacity,
    zIndex,
    filter,
    backfaceVisibility: "hidden",
  };

  return (
    <motion.div
      layout="position"
      style={cardStyle}
      className="circular-project-card"
      onClick={onDetailsClick}
    >
      <ProjectCardContent project={project} onExploreClick={onExploreClick} />
    </motion.div>
  );
};

export const Projects = () => {
  const allProjects = portfolioConfig.projects;
  const filteredProjects = allProjects;
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const dragStartPosRef = useRef({ x: 0, y: 0 });
  const totalDragRef = useRef(0);

  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rotationOffset = useMotionValue(0);
  const smoothRotation = useSpring(rotationOffset, { stiffness: 200, damping: 30 });
  const discTransform = useMotionTemplate`translate(-50%, -50%) translate(0, ${isMobile ? 420 : 520}px) rotate(${-smoothRotation}deg)`;

  // Lock body scroll when modal is active to prevent page scrolling behind it
  useEffect(() => {
    if (activeModalProject) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [activeModalProject]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle drag to spin (by scrolling)
  const handlePointerDown = (e) => {
    if (isMobile) return;
    // Only handle left click or touch
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    dragStartPosRef.current = { x: e.clientX, y: e.clientY };
    totalDragRef.current = 0;
    document.body.style.userSelect = 'none';
  };

  const handlePointerMove = (e) => {
    if (!isDragging || isMobile) return;
    e.preventDefault(); // Prevent text selection/scrolling on touch
    const deltaX = startXRef.current - e.clientX;
    if (Math.abs(deltaX) > 0) {
      totalDragRef.current += Math.abs(deltaX);
      
      const maxRotation = (filteredProjects.length - 1) * 18;
      let newRotation = rotationOffset.get() + deltaX * 0.35;
      
      // Clamp rotation to prevent spinning past available cards
      if (newRotation < 0) newRotation = 0;
      if (newRotation > maxRotation) newRotation = maxRotation;

      rotationOffset.set(newRotation);
      startXRef.current = e.clientX;
    }
  };

  const handlePointerUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.userSelect = '';
    }
  };

  return (
    <section id="works" className="section projects-section">
      {!isMobile ? (
        <div ref={scrollRef} className="circular-gallery-container">
          <div className="circular-gallery-sticky">
            
            {/* Header Area */}
            <div className="gallery-header">
              <h2 className="section-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial', marginBottom: '0.5rem' }}>
                <FramedText>Featured Work</FramedText>
              </h2>
              <p className="gallery-section-subtitle">Click and drag horizontally to spin the wheel and explore my featured applications.</p>
              

            </div>

            {/* Cards Rotation Area */}
            <div 
              className="gallery-wheel-area"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUpOrLeave}
              onPointerLeave={handlePointerUpOrLeave}
              onPointerCancel={handlePointerUpOrLeave}
              style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}
            >
              {/* Dark wheel graphic representing the rotary base */}
              <motion.div 
                className="gallery-wheel-disc" 
                style={{ 
                  transform: discTransform
                }}
              />
              
              {/* Interactive Cards */}
              {filteredProjects.map((project, idx) => (
                <CardTransformed
                  key={project.id}
                  project={project}
                  index={idx}
                  totalProjects={filteredProjects.length}
                  smoothRotation={smoothRotation}
                  onDetailsClick={(e) => {
                    // Check if pointer dragged or clicked cleanly
                    const moveDist = e?.clientX && dragStartPosRef.current 
                      ? Math.hypot(e.clientX - dragStartPosRef.current.x, e.clientY - dragStartPosRef.current.y)
                      : totalDragRef.current;
                    if (moveDist < 15 || totalDragRef.current < 15) {
                      setActiveModalProject(project);
                    }
                  }}
                  onExploreClick={() => {
                    setActiveModalProject(project);
                  }}
                />
              ))}
            </div>

            {/* Mouse Drag Indicator */}
            <div className="scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <span className="scroll-text">Drag to spin</span>
            </div>

          </div>
        </div>
      ) : (
        <div className="mobile-projects-container">
          {/* Header Area */}
          <div className="gallery-header mobile-gallery-header">
            <h2 className="section-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial', marginBottom: '0.5rem' }}>
              <FramedText>Featured Work</FramedText>
            </h2>
            <p className="gallery-section-subtitle">Swipe through my featured applications.</p>
          </div>

          <div className="mobile-slider-area">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="circular-project-card mobile-slide-card"
                onClick={() => setActiveModalProject(project)}
              >
                <ProjectCardContent 
                  project={project} 
                  onExploreClick={() => setActiveModalProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Details Modal Popup via React Portal (Guarantees top stacking context) */}
      {activeModalProject && typeof document !== 'undefined' && createPortal(
        <div 
          className="project-modal-overlay" 
          onClick={() => setActiveModalProject(null)}
          data-lenis-prevent
        >
          <div 
            className="project-modal-dialog" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            data-lenis-prevent
          >
            {/* Modal Header: Sticky at top so Title and Close button are NEVER obscured */}
            <div className="project-modal-header">
              <div className="project-modal-header-info">
                <span className="project-modal-badge">{activeModalProject.category}</span>
                <h3 id="modal-project-title" className="project-modal-title">{activeModalProject.title}</h3>
                <p className="project-modal-subtitle">{activeModalProject.subtitle}</p>
              </div>
              <button 
                type="button" 
                className="project-modal-close" 
                onClick={() => setActiveModalProject(null)} 
                aria-label="Close project details"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body with internal smooth scrolling */}
            <div className="project-modal-body" data-lenis-prevent>
              <div className="project-modal-grid">
                {/* Left Column: Overview, Tags, Links */}
                <div className="project-modal-main">
                  <div className="project-modal-section">
                    <h4 className="project-modal-heading">Overview</h4>
                    <p className="project-modal-desc">{activeModalProject.longDescription}</p>
                  </div>

                  <div className="project-modal-section">
                    <h4 className="project-modal-heading">Technologies</h4>
                    <div className="project-modal-tags">
                      {activeModalProject.tags.map((tag) => (
                        <span key={tag} className="project-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-modal-actions">
                    {activeModalProject.githubUrl && (
                      <a 
                        href={activeModalProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-action-btn project-btn-secondary"
                      >
                        <GithubIcon size={18} />
                        <span>View Source Code</span>
                      </a>
                    )}
                    {activeModalProject.liveUrl && (
                      <a 
                        href={activeModalProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-action-btn project-btn-primary"
                      >
                        <ExternalLink size={18} />
                        <span>Visit Live Project</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Key Features */}
                <div className="project-modal-sidebar">
                  <h4 className="project-modal-heading">Key Features</h4>
                  <ul className="project-features-list">
                    {activeModalProject.features.map((feature, idx) => (
                      <li key={idx} className="project-feature-item">
                        <div className="feature-icon-wrapper">
                          <ChevronRight size={14} className="feature-chevron" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Project CTA */}
      <div className="project-cta-section container" style={{ textAlign: 'center', padding: '6rem 1rem', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '2rem' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#09090b' }}>Have a project in mind?</h3>
        <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem' }}>Let's turn your idea into something real.</p>
        <button onClick={() => {
          const el = document.getElementById('get-in-touch');
          if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
        }} className="btn btn-primary" style={{ margin: '0 auto' }}>
          Tell Me About Your Idea <ArrowRight size={18} />
        </button>
      </div>

      <style>{`
        .projects-section {
          padding: 0 !important;
          background-color: #ffffff !important;
          color: #09090b !important;
        }
        .circular-gallery-container {
          position: relative;
          height: auto; 
          width: 100%;
        }
        .circular-gallery-sticky {
          position: relative;
          height: 100vh;
          min-height: 800px;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 5.5rem;
          background: radial-gradient(circle at center 120%, #f4f4f5 0%, #ffffff 70%);
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
        }
        .circular-gallery-sticky .section-title {
          left: auto !important;
          transform: none !important;
        }
        .gallery-header {
          text-align: center;
          z-index: 10;
          max-width: 600px;
          padding: 0 1rem;
        }
        .gallery-section-subtitle {
          color: #4b5563 !important;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .filter-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          row-gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .filter-tab {
          padding: 0.4rem 1.25rem;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: #4b5563;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: rgba(0, 0, 0, 0.02);
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .filter-tab:hover {
          color: #09090b;
          border-color: rgba(249, 115, 22, 0.4);
          background: rgba(249, 115, 22, 0.05);
        }
        .filter-tab.active {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%) !important;
          color: white !important;
          border-color: transparent !important;
        }

        /* Rotary Wheel Area */
        .gallery-wheel-area {
          position: relative;
          width: 100%;
          height: 560px;
          margin: 0 auto;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        }
        .gallery-wheel-disc {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%) translate(0, 560px);
          width: 1120px;
          height: 1120px;
          border-radius: 50%;
          /* Rotational circle graphic */
          background: radial-gradient(circle, rgba(0,0,0,0) 65%, rgba(0, 0, 0, 0.01) 100%);
          border: 1.5px dashed rgba(0, 0, 0, 0.06);
          pointer-events: none;
          z-index: 1;
        }
        .gallery-wheel-disc::after {
          content: '';
          position: absolute;
          width: 900px;
          height: 900px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.02);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Circular Cards Styles */
        .circular-project-card {
          border-radius: var(--border-radius-md);
          background: rgba(255, 255, 255, 0.95);
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          will-change: transform, opacity, filter;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
        }
        .circular-project-card:hover {
          border-color: rgba(249, 115, 22, 0.4) !important;
          box-shadow: 0 20px 45px rgba(249, 115, 22, 0.12) !important;
        }
        .card-top-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
          top: -60px;
          left: -60px;
          pointer-events: none;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .card-badge {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: var(--border-radius-full);
          color: #4b5563;
        }
        .card-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: var(--border-radius-sm);
          background: rgba(249, 115, 22, 0.06);
          color: hsl(var(--primary));
          border: 1px solid rgba(249, 115, 22, 0.15);
        }
        .card-body {
          margin-top: 1rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-subtitle {
          font-size: 0.8rem;
          font-weight: 600;
          color: hsl(var(--primary));
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
        }
        .card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #09090b;
          letter-spacing: -0.5px;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .card-desc {
          font-size: 0.85rem;
          color: #4b5563;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .tech-tag {
          font-size: 0.7rem;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #4b5563;
          padding: 0.15rem 0.5rem;
          border-radius: var(--border-radius-sm);
        }
        .tech-tag-more {
          font-size: 0.7rem;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-left: 0.2rem;
        }
        .card-footer {
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 0.9rem;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .explore-btn {
          font-size: 0.85rem;
          font-weight: 700;
          color: hsl(var(--primary));
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: none;
          border: none;
          padding: 0.2rem 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: var(--border-radius-sm);
        }
        .explore-btn:hover {
          color: hsl(var(--primary-hover));
          background: rgba(249, 115, 22, 0.08);
        }

        /* Mouse Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 4.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          opacity: 0.75;
          z-index: 10;
        }
        .mouse {
          width: 20px;
          height: 32px;
          border: 2px solid #71717a;
          border-radius: 10px;
          position: relative;
        }
        .wheel {
          width: 5px;
          height: 5px;
          background-color: hsl(var(--primary));
          border-radius: 50%;
          position: absolute;
          top: 10px;
          left: 50%;
          transform-origin: 50% 200%;
          animation: spinMouse 1.5s linear infinite;
        }
        @keyframes spinMouse {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .scroll-text {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #71717a;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Project Modal System (Responsive on Windows, Mac & Mobile) */
        .project-modal-overlay {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          background: rgba(9, 9, 11, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 1rem;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          animation: modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .project-modal-dialog {
          width: 100%;
          max-width: 840px;
          max-height: calc(100dvh - 3rem);
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          margin: auto;
          animation: modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes modalScaleUp {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Modal Header: Sticky at top so Title and Close button are NEVER obscured */
        .project-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 2rem 2.25rem 1.25rem 2.25rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
          background: #ffffff;
          flex-shrink: 0;
        }

        .project-modal-header-info {
          flex: 1;
          min-width: 0;
        }

        .project-modal-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.75px;
          color: hsl(var(--primary));
          margin-bottom: 0.35rem;
        }

        .project-modal-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #09090b !important;
          letter-spacing: -0.5px;
          line-height: 1.2;
          margin-bottom: 0.35rem;
        }

        .project-modal-subtitle {
          font-size: 1.05rem;
          font-weight: 500;
          color: #4b5563 !important;
          line-height: 1.4;
          margin: 0;
        }

        .project-modal-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          min-width: 42px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #52525b;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
          margin-top: -0.25rem;
          margin-right: -0.25rem;
        }

        .project-modal-close:hover {
          background: rgba(0, 0, 0, 0.08);
          color: #09090b;
          transform: scale(1.06);
        }

        .project-modal-close:active {
          transform: scale(0.94);
        }

        /* Modal Body: Smooth internal scrolling */
        .project-modal-body {
          padding: 1.75rem 2.25rem 2.25rem 2.25rem;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          flex: 1;
        }

        .project-modal-body::-webkit-scrollbar {
          width: 6px;
        }
        .project-modal-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .project-modal-body::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.12);
          border-radius: 9999px;
        }
        .project-modal-body::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.22);
        }

        .project-modal-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .project-modal-main {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-modal-section {
          display: flex;
          flex-direction: column;
        }

        .project-modal-heading {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #09090b !important;
          margin-bottom: 0.75rem;
        }

        .project-modal-desc {
          font-size: 0.975rem;
          line-height: 1.65;
          color: #27272a !important;
          margin: 0;
        }

        .project-modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag-pill {
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #4b5563;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          transition: all var(--transition-fast);
        }

        .project-tag-pill:hover {
          background: rgba(249, 115, 22, 0.08);
          color: hsl(var(--primary));
          border-color: rgba(249, 115, 22, 0.25);
        }

        .project-modal-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-top: 0.5rem;
        }

        .project-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.4rem;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: var(--border-radius-sm);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-btn-primary {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          color: #ffffff !important;
          border: none;
          box-shadow: 0 4px 14px rgba(249, 115, 22, 0.3);
        }

        .project-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);
        }

        .project-btn-secondary {
          background: #f4f4f5;
          color: #18181b !important;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .project-btn-secondary:hover {
          background: #e4e4e7;
          color: #09090b !important;
          transform: translateY(-2px);
        }

        .project-modal-sidebar {
          display: flex;
          flex-direction: column;
        }

        .project-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .project-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          line-height: 1.55;
          color: #27272a !important;
        }

        .feature-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(249, 115, 22, 0.1);
          color: hsl(var(--primary));
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        /* Windows & Short Height Screen Optimization */
        @media (max-height: 720px) {
          .project-modal-overlay {
            padding: 0.75rem 1rem;
          }
          .project-modal-dialog {
            max-height: calc(100dvh - 1.5rem);
          }
          .project-modal-header {
            padding: 1rem 1.5rem 0.75rem 1.5rem;
          }
          .project-modal-title {
            font-size: 1.45rem;
            margin-bottom: 0.2rem;
          }
          .project-modal-subtitle {
            font-size: 0.9rem;
          }
          .project-modal-body {
            padding: 1rem 1.5rem 1.5rem 1.5rem;
          }
          .project-modal-main {
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .circular-gallery-sticky {
            padding-top: 4.5rem;
          }
          .gallery-section-subtitle {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }
          .gallery-wheel-area {
            height: 420px;
            margin-top: -10px;
          }
          .gallery-wheel-disc {
            width: 840px;
            height: 840px;
            transform: translate(-50%, -50%) translate(0, 420px);
          }
          .gallery-wheel-disc::after {
            width: 700px;
            height: 700px;
          }
          .circular-project-card {
            padding: 1.25rem !important;
          }
          .card-icon-box {
            width: 44px;
            height: 44px;
          }
          .card-title {
            font-size: 1.15rem;
          }
          .card-desc {
            font-size: 0.8rem;
          }
          /* Mobile Modal Adaptations */
          .project-modal-overlay {
            padding: 0.75rem;
            align-items: flex-end;
          }
          .project-modal-dialog {
            max-height: calc(100dvh - 1.5rem);
            border-radius: 20px 20px 16px 16px;
            margin: 0 auto;
          }
          .project-modal-header {
            padding: 1.25rem 1.25rem 1rem 1.25rem;
            gap: 1rem;
          }
          .project-modal-title {
            font-size: 1.35rem;
          }
          .project-modal-subtitle {
            font-size: 0.9rem;
          }
          .project-modal-close {
            width: 38px;
            height: 38px;
            min-width: 38px;
          }
          .project-modal-body {
            padding: 1.25rem 1.25rem 1.75rem 1.25rem;
          }
          .project-modal-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .project-modal-actions {
            flex-direction: column;
            gap: 0.65rem;
          }
          .project-action-btn {
            width: 100%;
            padding: 0.8rem 1rem;
            font-size: 0.9rem;
          }
          .project-feature-item {
            font-size: 0.875rem;
          }
          .project-modal-desc {
            font-size: 0.9rem;
          }
          /* Native Mobile Slider Additions */
          .mobile-projects-container {
            padding-top: 4.5rem;
            padding-bottom: 4rem;
            background: radial-gradient(circle at center 120%, #f4f4f5 0%, #ffffff 70%);
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            width: 100%;
          }
          .mobile-gallery-header {
            margin: 0 auto 1.5rem auto;
          }
          .mobile-slider-area {
            display: flex;
            overflow-x: auto;
            gap: 1.25rem;
            padding: 1rem 1.5rem 2rem 1.5rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .mobile-slider-area::-webkit-scrollbar {
            display: none;
          }
          .mobile-slide-card {
            flex: 0 0 85%;
            max-width: 320px;
            scroll-snap-align: center;
            height: auto;
            min-height: 380px;
            position: relative;
            transform: none !important;
            opacity: 1 !important;
            filter: none !important;
            left: auto !important;
            top: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
