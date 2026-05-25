import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

export const FlowSection = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => (
  <section
    data-flow-section
    aria-label={ariaLabel}
    className={cx('relative min-h-screen w-full overflow-hidden', className)}
  >
    <div
      data-flow-inner
      className={cx(
        'flow-art-container relative flex min-h-screen w-full flex-col justify-between gap-6 px-[4vw] pt-[clamp(2rem,8vw,4vw)] pb-[4vw]',
        'will-change-transform',
      )}
      style={{ transformOrigin: 'bottom left', ...style }}
    >
      {children}
    </div>
  </section>
);

const FlowArt = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const containerRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return;

      const sections = Array.from(
        containerRef.current.querySelectorAll('[data-flow-section]'),
      );
      if (sections.length === 0) return;

      const triggers = [];

      sections.forEach((section, i) => {
        gsap.set(section, { zIndex: i + 1 });

        const inner = section.querySelector('.flow-art-container');
        if (!inner) return;

        if (i > 0) {
          gsap.set(inner, { rotation: 30, transformOrigin: 'bottom left' });
          const tween = gsap.to(inner, {
            rotation: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top 25%',
              scrub: true,
            },
          });
          if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
        }

        if (i < sections.length - 1) {
          // Pin current section
          triggers.push(
            ScrollTrigger.create({
              trigger: section,
              start: 'bottom bottom',
              end: 'bottom top',
              pin: true,
              pinSpacing: false,
            }),
          );

          // Blur current section's container as the next card scrolls up over it
          const nextSection = sections[i + 1];
          if (nextSection) {
            const blurTween = gsap.to(inner, {
              filter: 'blur(12px)',
              opacity: 0.35,
              ease: 'none',
              scrollTrigger: {
                trigger: nextSection,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            });
            if (blurTween.scrollTrigger) triggers.push(blurTween.scrollTrigger);
          }
        }
      });

      // Overall container scroll tracker
      const indicator = containerRef.current.querySelector('.journey-scroll-indicator');
      const dots = Array.from(containerRef.current.querySelectorAll('.journey-indicator-dot'));
      const clickHandlers = [];

      const overallTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const progress = self.progress;
          if (indicator) {
            indicator.style.setProperty('--journey-progress', progress);
          }
          dots.forEach((dot, index) => {
            const threshold = index / (dots.length - 1);
            if (progress >= threshold - 0.05) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        },
        onToggle: (self) => {
          if (indicator) {
            if (self.isActive) {
              indicator.classList.add('visible');
            } else {
              indicator.classList.remove('visible');
            }
          }
        }
      });
      triggers.push(overallTrigger);

      // Connect click handlers for smooth navigation
      dots.forEach((dot, index) => {
        const handler = () => {
          const targetSection = sections[index];
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        };
        dot.addEventListener('click', handler);
        clickHandlers.push({ dot, handler });
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((t) => {
          if (t.revert) t.revert();
          t.kill();
        });
        clickHandlers.forEach(({ dot, handler }) => dot.removeEventListener('click', handler));
      };
    },
    { scope: containerRef, dependencies: [React.Children.count(children), reducedMotion] },
  );

  return (
    <main
      ref={containerRef}
      aria-label={ariaLabel}
      className={cx('w-full overflow-x-hidden relative', className)}
    >
      {/* Side Traversal Indicator */}
      <div className="journey-scroll-indicator pointer-events-none hidden md:flex">
        <div className="journey-indicator-track">
          <div className="journey-indicator-progress" />
          <div className="journey-indicator-dot active" style={{ top: '0%' }} data-label="Introduction" />
          <div className="journey-indicator-dot" style={{ top: '33.3%' }} data-label="Technical Focus" />
          <div className="journey-indicator-dot" style={{ top: '66.6%' }} data-label="Philosophy" />
          <div className="journey-indicator-dot" style={{ top: '100%' }} data-label="Impact Metrics" />
        </div>
      </div>

      {children}

      <style>{`
        .journey-scroll-indicator {
          position: fixed;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease;
          align-items: center;
          justify-content: center;
        }
        .journey-scroll-indicator.visible {
          opacity: 1;
          visibility: visible;
        }
        .journey-indicator-track {
          position: relative;
          height: 180px;
          width: 3px;
          background: rgba(9, 9, 11, 0.08);
          border-radius: 99px;
        }
        .journey-indicator-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--secondary)));
          border-radius: 99px;
          transform-origin: top center;
          transform: scaleY(var(--journey-progress, 0));
          transition: transform 0.1s ease-out;
          box-shadow: 0 0 12px hsla(var(--primary), 0.5);
        }
        .journey-indicator-dot {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid rgba(9, 9, 11, 0.2);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
          cursor: pointer;
        }
        .journey-indicator-dot.active {
          width: 12px;
          height: 12px;
          background: hsl(var(--primary));
          border-color: #ffffff;
          box-shadow: 0 0 10px hsla(var(--primary), 0.5);
        }
        .journey-indicator-dot::after {
          content: attr(data-label);
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          color: #71717a;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          background: #ffffff;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .journey-indicator-dot:hover::after,
        .journey-indicator-dot.active::after {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(-4px);
        }
        .journey-indicator-dot.active::after {
          color: #09090b;
          border-color: hsl(var(--primary-glow));
        }
      `}</style>
    </main>
  );
};

export default FlowArt;
