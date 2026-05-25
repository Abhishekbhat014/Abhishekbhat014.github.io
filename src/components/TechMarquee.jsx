import React from 'react';

const ROW1 = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: ".NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
];

const ROW2 = [
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Hive", src: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const repeatedIcons = (icons, repeat = 6) => 
  Array.from({ length: repeat }).flatMap(() => icons);

export const TechMarquee = ({ light = false }) => {
  return (
    <div className={`tech-marquee-container ${light ? 'light' : ''}`}>
      <div className="marquee-wrapper">
        {/* Row 1: Scroll Left */}
        <div className="marquee-row">
          <div className="marquee-track track-left">
            {repeatedIcons(ROW1, 6).map((item, i) => (
              <div key={`r1-${i}`} className="tech-marquee-item">
                <img src={item.src} alt={item.name} className="tech-logo-inline" />
                <span className="tech-name-inline">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scroll Right */}
        <div className="marquee-row">
          <div className="marquee-track track-right">
            {repeatedIcons(ROW2, 6).map((item, i) => (
              <div key={`r2-${i}`} className="tech-marquee-item">
                <img src={item.src} alt={item.name} className="tech-logo-inline" />
                <span className="tech-name-inline">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tech-marquee-container {
          margin-top: 2rem;
          width: 100%;
          text-align: center;
          background-color: transparent !important;
        }
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 0.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background-color: transparent !important;
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
        .marquee-row {
          display: flex;
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
          background-color: transparent !important;
        }
        .marquee-track {
          display: flex;
          gap: 4rem;
          white-space: nowrap;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .track-left {
          animation: scroll-left-track 25s linear infinite;
        }
        .track-right {
          animation: scroll-right-track 25s linear infinite;
        }
        .tech-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          cursor: default;
          transition: transform 0.3s ease;
        }
        .tech-marquee-item:hover {
          transform: scale(1.08);
        }
        .tech-logo-inline {
          height: 32px;
          width: 32px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.75;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }
        .tech-marquee-item:hover .tech-logo-inline {
          filter: grayscale(100%) contrast(1.15);
          opacity: 1;
        }
        .tech-name-inline {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: #f9fafb;
          letter-spacing: -0.2px;
        }
        .tech-marquee-container.light .tech-name-inline {
          color: #09090b !important;
        }

        @keyframes scroll-left-track {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 2rem)); }
        }
        @keyframes scroll-right-track {
          0% { transform: translateX(calc(-50% - 2rem)); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .tech-logo-inline {
            height: 28px;
            width: 28px;
          }
          .tech-name-inline {
            font-size: 1.1rem;
          }
          .marquee-track {
            gap: 2.5rem;
          }
          @keyframes scroll-left-track {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1.25rem)); }
          }
          @keyframes scroll-right-track {
            0% { transform: translateX(calc(-50% - 1.25rem)); }
            100% { transform: translateX(0); }
          }
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
