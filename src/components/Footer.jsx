import React from 'react';
import { Mail } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Footer = () => {
  const { name, email, socialLinks } = portfolioConfig.personalInfo;
  
  return (
    <footer className="footer-panel">
      <div className="container footer-container">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        
        <div className="footer-socials">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon size={16} />
            </a>
          )}
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .footer-panel {
          background: #09090b !important;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem 0;
          color: #a1a1aa !important;
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }
        .copyright-text {
          font-size: 0.85rem;
          color: #71717a !important;
        }
        .footer-socials {
          display: flex;
          gap: 1rem;
        }
        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--border-radius-sm);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #71717a;
          transition: all var(--transition-fast);
        }
        .footer-socials a:hover {
          color: hsl(var(--primary));
          background: rgba(255, 255, 255, 0.05);
          border-color: hsl(var(--primary));
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
