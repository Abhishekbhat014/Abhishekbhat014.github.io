import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ExternalLink, X, ChevronRight, Folder, Smartphone, Globe, Monitor } from 'lucide-react';
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

const ProjectCardContent = ({ project }) => (
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
      <span className="explore-btn">
        Explore Details <ChevronRight size={14} />
      </span>
    </div>
  </>
);

// Single Transformed Card inside the Circular Gallery
const CardTransformed = ({ project, index, totalProjects, smoothRotation, onDetailsClick }) => {
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

  const radius = isMobile ? 420 : 520;
  const cardStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: isMobile ? "230px" : "280px",
    height: isMobile ? "330px" : "385px",
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
      onClick={() => onDetailsClick()}
    >
      <ProjectCardContent project={project} />
    </motion.div>
  );
};

export const Projects = () => {
  const allProjects = portfolioConfig.projects;
  const filteredProjects = allProjects;
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
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
    setStartX(e.clientX);
    totalDragRef.current = 0;
    document.body.style.userSelect = 'none';
  };

  const handlePointerMove = (e) => {
    if (!isDragging || isMobile) return;
    e.preventDefault(); // Prevent text selection/scrolling on touch
    const deltaX = startX - e.clientX;
    if (Math.abs(deltaX) > 0) {
      totalDragRef.current += Math.abs(deltaX);
      
      const maxRotation = (filteredProjects.length - 1) * 18;
      let newRotation = rotationOffset.get() + deltaX * 0.35;
      
      // Clamp rotation to prevent spinning past available cards
      if (newRotation < 0) newRotation = 0;
      if (newRotation > maxRotation) newRotation = maxRotation;

      rotationOffset.set(newRotation);
      setStartX(e.clientX);
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
                <FramedText>My Projects</FramedText>
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
                  onDetailsClick={() => {
                    if (totalDragRef.current < 10) {
                      setActiveModalProject(project);
                    }
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
              <FramedText>My Projects</FramedText>
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
                <ProjectCardContent project={project} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project Details Modal Popups */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModalProject(null)} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="modal-inner">
              <span className="modal-category">{activeModalProject.category}</span>
              <h3 className="modal-title">{activeModalProject.title}</h3>
              <h4 className="modal-subtitle">{activeModalProject.subtitle}</h4>
              
              <div className="modal-body-layout">
                <div className="modal-description-section">
                  <h5 className="modal-section-heading">Overview</h5>
                  <p className="modal-text">{activeModalProject.longDescription}</p>
                  
                  <div className="modal-tags">
                    {activeModalProject.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  <div className="modal-links">
                    {activeModalProject.githubUrl && (
                      <a href={activeModalProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <GithubIcon size={18} /> View Source Code
                      </a>
                    )}
                    {activeModalProject.liveUrl && (
                      <a href={activeModalProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <ExternalLink size={18} /> Visit Live Project
                      </a>
                    )}
                  </div>
                </div>

                <div className="modal-features-section">
                  <h5 className="modal-section-heading">Key Features</h5>
                  <ul className="modal-features-list">
                    {activeModalProject.features.map((feature, idx) => (
                      <li key={idx} className="feature-bullet">
                        <ChevronRight size={14} className="bullet-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
          height: 480px;
          margin-top: -30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gallery-wheel-disc {
          position: absolute;
          width: 1040px;
          height: 1040px;
          border-radius: 50%;
          /* Rotational circle graphic */
          background: radial-gradient(circle, rgba(0,0,0,0) 65%, rgba(0, 0, 0, 0.01) 100%);
          border: 1.5px dashed rgba(0, 0, 0, 0.06);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) translate(0, 520px);
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
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(6px) saturate(140%);
          -webkit-backdrop-filter: blur(6px) saturate(140%);
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
          display: flex;
          align-items: center;
          gap: 0.2rem;
          transition: color 0.2s;
        }
        .circular-project-card:hover .explore-btn {
          color: hsl(var(--primary-hover));
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

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow-y: auto;
        }
        .modal-content {
          width: 100%;
          max-width: 800px;
          position: relative;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12) !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          border-radius: var(--border-radius-md);
          animation: modalGrow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes modalGrow {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: #71717a !important;
          transition: color var(--transition-fast);
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        .modal-close-btn:hover {
          color: #09090b !important;
        }
        .modal-category {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: hsl(var(--primary));
          margin-bottom: 0.25rem;
          display: block;
        }
        .modal-title {
          font-size: 2rem;
          font-weight: 800;
          color: #09090b !important;
        }
        .modal-subtitle {
          font-size: 1.1rem;
          color: #4b5563 !important;
          font-weight: 500;
          margin-bottom: 2rem;
        }
        .modal-body-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
        }
        .modal-section-heading {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          color: #09090b !important;
        }
        .modal-text {
          font-size: 0.975rem;
          color: #27272a !important;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .tag-pill {
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #4b5563;
          padding: 0.25rem 0.75rem;
          border-radius: var(--border-radius-full);
          transition: all var(--transition-fast);
        }
        .tag-pill:hover {
          background: rgba(249, 115, 22, 0.08);
          color: hsl(var(--primary));
          border-color: rgba(249, 115, 22, 0.2);
        }
        .modal-links {
          display: flex;
          gap: 1rem;
        }
        .modal-links .btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.85rem;
        }
        .modal-links .btn-secondary {
          border: 1px solid rgba(0, 0, 0, 0.1) !important;
          color: #27272a !important;
          background: rgba(0, 0, 0, 0.02) !important;
        }
        .modal-links .btn-secondary:hover {
          background: rgba(0, 0, 0, 0.06) !important;
          color: #09090b !important;
        }
        .modal-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .feature-bullet {
          display: flex;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: #27272a !important;
          line-height: 1.5;
        }
        .bullet-icon {
          color: hsl(var(--primary));
          flex-shrink: 0;
          margin-top: 0.2rem;
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
          .modal-body-layout {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .modal-overlay {
            padding: 1.5rem 1rem;
          }
          .modal-content {
            padding: 1.5rem;
            max-height: 85vh;
            overflow-y: auto;
          }
          .modal-title {
            font-size: 1.5rem;
          }
          .modal-subtitle {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }
          .modal-section-heading {
            font-size: 0.85rem;
            margin-bottom: 0.75rem;
          }
          .modal-text {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }
          .feature-bullet {
            font-size: 0.85rem;
          }
          .tag-pill {
            font-size: 0.7rem;
            padding: 0.2rem 0.6rem;
          }
          .modal-links {
            flex-direction: column;
            gap: 0.75rem;
          }
          .modal-links .btn {
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
            justify-content: center;
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
