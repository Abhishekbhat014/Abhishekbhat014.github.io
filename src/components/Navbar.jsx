import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolioConfig';

const STAGGER = 0.035;

const TextRoll = ({ children, center = false }) => (
  <span
    className="text-roll"
    style={{ position: 'relative', display: 'inline-block', overflow: 'hidden', verticalAlign: 'middle' }}
    aria-label={children}
  >
    <span style={{ display: 'inline-block' }}>
      {children.split("").map((l, i) => {
        const delay = center
          ? STAGGER * Math.abs(i - (children.length - 1) / 2)
          : STAGGER * i;
        return (
          <motion.span
            key={`top-${i}`}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            transition={{ ease: "easeInOut", delay }}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        );
      })}
    </span>

    <span style={{ position: 'absolute', inset: 0, display: 'inline-block' }}>
      {children.split("").map((l, i) => {
        const delay = center
          ? STAGGER * Math.abs(i - (children.length - 1) / 2)
          : STAGGER * i;
        return (
          <motion.span
            key={`bot-${i}`}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            transition={{ ease: "easeInOut", delay }}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        );
      })}
    </span>
  </span>
);

const navItems = [
  { label: 'Hero', id: 'hero' },
  { label: 'Journey', id: 'journey' },
  { label: 'Experience', id: 'experience' },
  { label: 'Tech Stack', id: 'tech-stack' },
  { label: 'Education', id: 'education' },
  { label: 'Works', id: 'works' },
  { label: 'Blogs', id: 'blogs' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Get in Touch', id: 'get-in-touch' },
];

export const Navbar = React.memo(({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Performance-optimized active section tracking using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies the middle of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <nav className={`fixed-navbar ${isScrolled && !mobileMenuOpen ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          {portfolioConfig.personalInfo.name.split(' ')[0]}
          <span className="dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              initial="initial"
              whileHover="hovered"
            >
              <TextRoll center={true}>{item.label}</TextRoll>
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation controls */}
        <div className="nav-controls-mobile">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              initial="initial"
              whileHover="hovered"
            >
              <TextRoll center={true}>{item.label}</TextRoll>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Custom Styles for Navbar */}
      <style>{`
        .fixed-navbar {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 80px;
          z-index: 1000;
          display: flex;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          border-bottom: 1px solid transparent;
          color: hsl(var(--text-primary)) !important;
          background: transparent;
        }
        @media (min-width: 769px) {
          .fixed-navbar {
            max-width: 1024px;
          }
        }
        .fixed-navbar.scrolled {
          height: 64px;
          background: var(--glass-bg) !important;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--shadow-sm);
        }
        @media (min-width: 769px) {
          .fixed-navbar.scrolled {
            max-width: 896px;
            top: 16px;
            border: 1px solid var(--glass-border);
            border-radius: var(--border-radius-md);
            box-shadow: var(--shadow-md);
          }
        }
        .fixed-navbar.menu-open {
          height: 80px;
          top: 0;
          max-width: 100%;
          border-radius: 0;
          background: var(--glass-bg) !important;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: none;
        }
        .fixed-navbar.scrolled .nav-link {
          color: hsl(var(--text-secondary)) !important;
        }
        .fixed-navbar.scrolled .nav-link:hover,
        .fixed-navbar.scrolled .nav-link.active {
          color: hsl(var(--text-primary)) !important;
        }
        .fixed-navbar.scrolled .nav-logo {
          color: hsl(var(--text-primary)) !important;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: hsl(var(--text-primary));
        }
        .nav-logo .dot {
          color: hsl(var(--primary));
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 500;
          color: hsl(var(--text-secondary));
          position: relative;
          padding: 0.5rem 0;
          transition: color var(--transition-fast);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-link:hover {
          color: hsl(var(--text-primary));
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          transition: width 0.3s ease;
          border-radius: var(--border-radius-full);
        }
        .nav-link.active {
          color: hsl(var(--text-primary));
          font-weight: 600;
        }
        .nav-link.active::after {
          width: 100%;
        }
        .theme-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          border: 1px solid hsl(var(--border));
          color: hsl(var(--text-secondary));
          transition: all var(--transition-fast);
        }
        .theme-toggle-btn:hover {
          color: hsl(var(--text-primary));
          border-color: hsl(var(--primary));
          background: hsl(var(--card-bg));
          transform: scale(1.05);
        }
        .nav-controls-mobile {
          display: none;
          align-items: center;
          gap: 1rem;
        }
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          border: 1px solid hsl(var(--border));
          color: hsl(var(--text-primary));
          background: hsl(var(--card-bg) / 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .mobile-menu-btn:hover {
          border-color: hsl(var(--primary));
          transform: scale(1.03);
        }
        .mobile-menu-drawer {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          height: 0;
          background: var(--glass-bg);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          overflow: hidden;
          transition: all 0.3s ease;
          border-bottom: 0px solid var(--glass-border);
          z-index: 999;
        }
        .fixed-navbar.scrolled .mobile-menu-drawer {
          top: 64px;
        }
        .mobile-menu-drawer.open {
          height: calc(100vh - 80px);
          border-bottom: 1px solid var(--glass-border);
        }
        .fixed-navbar.scrolled .mobile-menu-drawer.open {
          height: calc(100vh - 64px);
        }
        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 0;
          gap: 2rem;
        }
        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: hsl(var(--text-secondary));
          transition: color var(--transition-fast);
        }
        .mobile-nav-link.active {
          color: hsl(var(--primary));
        }
        @media (max-width: 768px) {
          .fixed-navbar {
            left: 0;
            transform: none;
            height: 64px;
            background: var(--glass-bg) !important;
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-bottom: 1px solid var(--glass-border);
            box-shadow: var(--shadow-sm);
          }
          .fixed-navbar.menu-open {
            height: 64px;
          }
          .nav-container {
            min-height: 64px;
            padding: 0 1rem;
          }
          .nav-logo {
            font-size: 1.35rem;
          }
          .nav-links-desktop {
            display: none;
          }
          .nav-controls-mobile {
            display: flex;
          }
          .mobile-menu-drawer,
          .fixed-navbar.scrolled .mobile-menu-drawer {
            top: 64px;
            width: 100vw;
          }
          .mobile-menu-drawer.open,
          .fixed-navbar.scrolled .mobile-menu-drawer.open {
            height: calc(100vh - 64px);
            height: calc(100dvh - 64px);
          }
          .mobile-menu-links {
            padding: 2rem 1rem 3rem;
            gap: 1.25rem;
          }
          .mobile-nav-link {
            font-size: clamp(1.1rem, 6vw, 1.5rem);
            line-height: 1.25;
          }
        }
      `}</style>
    </nav>
  );
});

export default Navbar;
