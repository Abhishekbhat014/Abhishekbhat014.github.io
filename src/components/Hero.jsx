import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import SmokeBackground from './SmokeBackground';
import { ProfileCard } from './ui/ProfileCard';
import { ScrollReveal } from './ui/ScrollReveal';
import devPhoto1 from '../assets/DevPhotoFirst.jpeg';
import devPhoto2 from '../assets/DevPhotoSecond.jpeg';

export const Hero = ({ theme }) => {
  const { name, tagline, shortBio, longBio, email, socialLinks } = portfolioConfig.personalInfo;
  const smokeColor = theme === 'dark' ? '#ff5722' : '#ffb74d';

  const handleCTA = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="section hero-section">
      <SmokeBackground smokeColor={smokeColor} />
      {/* Dynamic Background Blurs */}
      <div className="glowing-bg hero-glow-1"></div>
      <div className="glowing-bg-secondary hero-glow-2"></div>

      <div className="container hero-container grid-2">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">{name}</span>
          </h1>
          <h2 className="hero-subtitle">{tagline}</h2>
          <ScrollReveal size="md" variant="muted" containerClassName="hero-description" align="left">
            {shortBio}
          </ScrollReveal>

          <div className="hero-actions">
            <button onClick={() => handleCTA('works')} className="btn btn-primary">
              View My Work
              <ArrowRight size={18} />
            </button>
            <button onClick={() => handleCTA('get-in-touch')} className="btn btn-secondary">
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            )}
            <a href={`mailto:${email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Hero Interactive Illustration: ProfileCard */}
        <div className="hero-illustration animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <ProfileCard
            name={name}
            title={portfolioConfig.personalInfo.title || "Full Stack Engineer"}
            handle="abhishekbhat014"
            status="Actively Coding"
            contactText="Contact Me"
            avatarUrl={devPhoto1}
            backAvatarUrl={devPhoto2}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => handleCTA('get-in-touch')}
            behindGlowEnabled={true}
            behindGlowColor="rgba(249, 115, 22, 0.35)"
            behindGlowSize="45%"
            innerGradient="linear-gradient(145deg, rgba(249, 115, 22, 0.1) 0%, rgba(9, 9, 11, 0.95) 100%)"
          />
        </div>
      </div>

      <style>{`
  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 80px;
    overflow: hidden;
  }
  .hero-glow-1 { top: 10%; left: -5%; }
  .hero-glow-2 { bottom: 10%; right: 5%; }
  .hero-container {
    position: relative;
    z-index: 1;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: var(--border-radius-full);
    background: hsl(var(--primary-glow));
    border: 1px solid rgba(139, 92, 246, 0.2);
    font-size: 0.85rem;
    font-weight: 600;
    color: hsl(var(--primary));
    margin-bottom: 1.5rem;
  }
  .badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: hsl(var(--primary));
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% { transform: scale(0.9); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.4; }
    100% { transform: scale(0.9); opacity: 1; }
  }
  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: 1rem;
  }
  .highlight-text {
    background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero-subtitle {
    font-size: 1.75rem;
    font-weight: 600;
    color: hsl(var(--text-secondary));
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }
  .hero-description {
    font-size: 1.1rem;
    color: hsl(var(--text-muted));
    margin-bottom: 2.5rem;
    max-width: 540px;
  }
  .hero-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  .hero-socials {
    display: flex;
    gap: 1.5rem;
  }
  .hero-socials a {
    color: hsl(var(--text-muted));
    transition: all var(--transition-fast);
  }
  .hero-socials a:hover {
    color: hsl(var(--primary));
    transform: translateY(-3px);
  }
  .hero-illustration {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  /* ── MOBILE FIXES ── */
  @media (max-width: 768px) {
    .hero-section {
      padding-top: 80px;        /* was 120px — reclaim vertical space */
      padding-bottom: 60px;
      min-height: auto;         /* don't force full-screen on mobile */
    }
    .hero-container {
      display: flex !important; /* override grid-2 */
      flex-direction: column;
      gap: 2rem;
    }
    .hero-illustration {
      order: -1;                /* 👈 card ABOVE text on mobile */
    }
    .hero-title {
      font-size: 2.2rem;
    }
    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .hero-description {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    .hero-actions {
      flex-direction: column;
      margin-bottom: 1.5rem;
    }
    .hero-badge {
      margin-bottom: 1rem;
    }
  }
`}</style>
    </section>
  );
};

export default Hero;

