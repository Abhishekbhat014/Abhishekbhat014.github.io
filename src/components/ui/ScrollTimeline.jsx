import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Calendar } from "lucide-react";

// Local cn helper to make the component self-contained
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Local Card components to avoid external file dependencies
const Card = ({ children, className = '', ...props }) => (
  <div className={cn("st-card", className)} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={cn("st-card-content", className)} {...props}>
    {children}
  </div>
);

export const ScrollTimeline = ({
  events = [],
  title = "",
  subtitle = "",
  animationOrder = "sequential",
  cardAlignment = "alternating",
  lineColor = "rgba(249, 115, 22, 0.2)",
  activeColor = "hsl(var(--primary))",
  progressIndicator = true,
  cardVariant = "elevated",
  cardEffect = "shadow",
  parallaxIntensity = 0.15,
  progressLineWidth = 2,
  progressLineCap = "round",
  dateFormat = "badge",
  revealAnimation = "slide",
  className = "",
  connectorStyle = "line",
  perspective = false,
  darkMode = true,
  smoothScroll = true,
}) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef([]);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const yOffset = useTransform(
    smoothProgress,
    (v) => (parallaxIntensity * 80) * (1 - 2 * v)
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newIndex = Math.floor(v * events.length);
      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < events.length
      ) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, events.length, activeIndex]);

  const getCardVariants = (index) => {
    const baseDelay =
      animationOrder === "simultaneous"
        ? 0
        : animationOrder === "staggered"
        ? index * 0.15
        : index * 0.25;

    const initialStates = {
      fade: { opacity: 0, y: 30 },
      slide: {
        x:
          cardAlignment === "left"
            ? -80
            : cardAlignment === "right"
            ? 80
            : index % 2 === 0
            ? -80
            : 80,
        opacity: 0,
        y: 20
      },
      scale: { scale: 0.85, opacity: 0, y: 20 },
      flip: { rotateY: 45, opacity: 0, y: 20 },
      none: { opacity: 1, y: 0, x: 0 },
    };

    return {
      initial: initialStates[revealAnimation],
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 0.6,
          delay: baseDelay,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      viewport: { once: false, margin: "-80px" },
    };
  };

  const getConnectorStyle = () => {
    switch (connectorStyle) {
      case "dots":
        return {
          borderStyle: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 25%, transparent 25%)',
          backgroundSize: '1px 12px',
          backgroundRepeat: 'repeat-y',
          width: '4px',
        };
      case "dashed":
        return {
          borderStyle: 'none',
          backgroundImage: `linear-gradient(to bottom, ${lineColor} 50%, transparent 50%)`,
          backgroundSize: `1px 12px`,
          backgroundRepeat: 'repeat-y',
          width: `${progressLineWidth}px`,
        };
      case "line":
      default:
        return {
          backgroundColor: lineColor,
          width: `${progressLineWidth}px`,
        };
    }
  };

  const getCardClasses = (index) => {
    return cn(
      "st-card-wrap",
      `variant-${cardVariant}`,
      `effect-${cardEffect}`,
      cardAlignment === "alternating"
        ? index % 2 === 0
          ? "align-even"
          : "align-odd"
        : cardAlignment === "left"
        ? "align-left"
        : "align-right",
      perspective ? "perspective-enabled" : ""
    );
  };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "st-container",
        darkMode ? "theme-dark" : "theme-light",
        className
      )}
    >
      <style>{`
        .st-container {
          position: relative;
          width: 100%;
          overflow: visible;
          font-family: var(--font-body);
        }
        .st-header {
          text-align: center;
          padding: 3rem 1rem 2rem;
        }
        .st-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          font-family: var(--font-heading);
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .st-subtitle {
          font-size: 1rem;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto;
        }
        .st-content {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem 4rem;
        }
        .st-track-wrapper {
          position: relative;
          width: 100%;
        }
        
        /* The Timeline Connector Line */
        .st-connector-bg {
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 10;
          left: 20px;
          transform: translateX(-50%);
        }
        @media (min-width: 1024px) {
          .st-connector-bg {
            left: 50%;
          }
        }
        
        /* Interactive Progress Line */
        .st-progress-line {
          position: absolute;
          top: 0;
          z-index: 15;
          left: 20px;
          transform: translateX(-50%);
        }
        @media (min-width: 1024px) {
          .st-progress-line {
            left: 50%;
          }
        }

        /* Comet head of the progress line */
        .st-comet {
          position: absolute;
          z-index: 20;
          left: 20px;
          transform: translate(-50%, -50%);
        }
        @media (min-width: 1024px) {
          .st-comet {
            left: 50%;
          }
        }

        /* Events list */
        .st-events-list {
          position: relative;
          z-index: 25;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        /* Single Event Row */
        .st-event-item {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .st-event-item {
            flex-direction: row;
            align-items: center;
          }
          .st-event-item.align-even {
            justify-content: flex-start;
          }
          .st-event-item.align-odd {
            flex-direction: row-reverse;
            justify-content: flex-start;
          }
          .st-event-item.align-left {
            justify-content: flex-start;
          }
          .st-event-item.align-right {
            flex-direction: row-reverse;
            justify-content: flex-start;
          }
        }

        /* Node Indicator dot */
        .st-node-wrapper {
          position: absolute;
          top: 1.5rem;
          left: 20px;
          transform: translate(-50%, -50%);
          z-index: 30;
        }
        @media (min-width: 1024px) {
          .st-node-wrapper {
            top: 50%;
            left: 50%;
          }
        }
        
        .st-node-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border-width: 3px;
          border-style: solid;
          background-color: #09090b;
          transition: border-color 0.3s ease, background-color 0.3s ease;
        }
        .theme-dark .st-node-dot.active {
          border-color: hsl(var(--primary));
          background-color: #09090b;
        }
        .theme-dark .st-node-dot.inactive {
          border-color: rgba(255, 255, 255, 0.15);
          background-color: rgba(255, 255, 255, 0.05);
        }

        /* Card Container Wrapper */
        .st-card-wrap {
          position: relative;
          width: 100%;
          padding-left: 45px; /* Offset for line on mobile */
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .st-card-wrap {
            width: calc(50% - 35px);
            padding-left: 0;
          }
          .st-event-item.align-even .st-card-wrap {
            margin-right: calc(50% + 35px);
          }
          .st-event-item.align-odd .st-card-wrap {
            margin-left: calc(50% + 35px);
          }
          .st-event-item.align-left .st-card-wrap {
            margin-right: auto;
            margin-left: 0;
          }
          .st-event-item.align-right .st-card-wrap {
            margin-left: auto;
            margin-right: 0;
          }
        }

        /* Actual visual cards */
        .st-card {
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .st-card-content {
          padding: 1.5rem;
        }

        /* Card Variants */
        .variant-elevated .st-card {
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          border-color: rgba(255, 255, 255, 0.06);
        }
        .variant-outlined .st-card {
          background: rgba(249, 115, 22, 0.02);
          border: 2px solid rgba(249, 115, 22, 0.15);
        }
        .variant-filled .st-card {
          background: rgba(249, 115, 22, 0.06);
          border: 1px solid rgba(249, 115, 22, 0.15);
        }

        /* Card Hover Effects */
        .effect-glow .st-card:hover {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.25);
        }
        .effect-shadow .st-card:hover {
          transform: translateY(-4px);
          border-color: rgba(249, 115, 22, 0.3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        .effect-bounce .st-card:hover {
          transform: scale(1.025);
          border-color: hsl(var(--primary));
        }

        /* Details styling inside card */
        .st-badge-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .st-badge-icon {
          color: hsl(var(--primary));
          flex-shrink: 0;
        }
        .st-year-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: hsl(var(--primary));
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          letter-spacing: 0.5px;
        }
        .st-title-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #f9fafb;
          margin: 0 0 0.25rem;
        }
        .st-subtitle-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: #a1a1aa;
          margin: 0 0 1rem;
        }
        
        /* Description list styling */
        .st-desc-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-left: 1.1rem;
          margin: 0;
          list-style-type: disc;
          color: #d4d4d8;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .st-desc-list li {
          color: #d4d4d8;
        }
        .st-desc-text {
          color: #d4d4d8;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }
        
        /* 3D Perspective Tilt hover */
        .perspective-enabled .st-card {
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .perspective-enabled:hover .st-card {
          transform: perspective(800px) rotateX(2deg) rotateY(-2deg) translateY(-2px);
        }
      `}</style>

      {title && (
        <div className="st-header">
          <h2 className="st-title">{title}</h2>
          {subtitle && <p className="st-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="st-content">
        <div className="st-track-wrapper">
          {/* Timeline Connector Line */}
          <div
            className="st-connector-bg"
            style={getConnectorStyle()}
          />

          {/* Enhanced Progress Indicator with Traveling Glow */}
          {progressIndicator && (
            <>
              {/* Filled progress line */}
              <motion.div
                className="st-progress-line"
                style={{
                  height: progressHeight,
                  width: `${progressLineWidth}px`,
                  borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                  background: `linear-gradient(to bottom, #f97316, #fb923c, #fdba74)`,
                  boxShadow: `
                    0 0 12px rgba(249,115,24,0.4),
                    0 0 20px rgba(251,146,60,0.2)
                  `,
                }}
              />
              {/* Traveling glow comet */}
              <motion.div
                className="st-comet"
                style={{
                  top: progressHeight,
                  x: "-50%",
                  y: "-50%",
                }}
              >
                <motion.div
                  className="st-comet-core"
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: "radial-gradient(circle, rgba(249,115,22,0.9) 0%, rgba(251,146,60,0.5) 40%, rgba(253,186,116,0) 70%)",
                    boxShadow: `
                      0 0 12px 3px rgba(249, 115, 22, 0.6),
                      0 0 20px 6px rgba(251, 146, 60, 0.4),
                      0 0 30px 10px rgba(253, 186, 116, 0.2)
                    `,
                  }}
                  animate={{
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </>
          )}

          <div className="st-events-list">
            {events.map((event, index) => {
              const isEventActive = index <= activeIndex;

              return (
                <div
                  key={event.id || index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={cn(
                    "st-event-item",
                    isEventActive ? "event-active" : "event-inactive",
                    cardAlignment === "alternating"
                      ? index % 2 === 0
                        ? "align-even"
                        : "align-odd"
                      : cardAlignment === "left"
                      ? "align-left"
                      : "align-right"
                  )}
                >
                  {/* Timeline node marker */}
                  <div className="st-node-wrapper">
                    <motion.div
                      className={cn(
                        "st-node-dot",
                        isEventActive ? "active" : "inactive"
                      )}
                      animate={
                        isEventActive
                          ? {
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                "0 0 0px rgba(249,115,22,0)",
                                "0 0 10px rgba(249,115,22,0.5)",
                                "0 0 0px rgba(249,115,22,0)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Timeline Event Card */}
                  <motion.div
                    className={getCardClasses(index)}
                    variants={getCardVariants(index)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: false, margin: "-80px" }}
                    style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
                  >
                    <Card>
                      <CardContent>
                        {dateFormat === "badge" ? (
                          <div className="st-badge-row">
                            {event.icon || (
                              <Calendar className="st-badge-icon" size={14} />
                            )}
                            <span className="st-year-badge">
                              {event.year}
                            </span>
                          </div>
                        ) : (
                          <p className="st-year-badge" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
                            {event.year}
                          </p>
                        )}
                        
                        <h3 className="st-title-text">
                          {event.title}
                        </h3>
                        
                        {event.subtitle && (
                          <p className="st-subtitle-text">
                            {event.subtitle}
                          </p>
                        )}
                        
                        {Array.isArray(event.description) ? (
                          <ul className="st-desc-list">
                            {event.description.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="st-desc-text">
                            {event.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;
