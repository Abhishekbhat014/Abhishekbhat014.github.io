import React, { useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export const ScrollReveal = ({
  children,
  containerClassName = "",
  textClassName = "",
  enableBlur = true,
  baseOpacity = 0.15,
  baseRotation = 2,
  blurStrength = 4,
  staggerDelay = 0.03,
  threshold = 0.3,
  duration = 0.6,
  springConfig = {
    damping: 30,
    stiffness: 120,
    mass: 0.8,
  },
  size = "md",
  align = "left",
  variant = "default",
}) => {
  const containerRef = useRef(null);
  
  // Trigger animation when the text enters the viewport
  const isInView = useInView(containerRef, {
    amount: threshold,
    once: false
  });

  // Track progress of container relative to scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform rotation slightly based on scroll depth
  const rotation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [baseRotation, 0, -baseRotation]
  );

  // Split text into words and spaces
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((part, index) => {
      return {
        value: part,
        isSpace: part.match(/^\s+$/) && part.length > 0,
        originalIndex: index,
      };
    }).filter(item => item.value.length > 0);
  }, [children]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        ...springConfig,
        duration,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ rotate: rotation }}
      className={`scroll-reveal-container my-3 ${containerClassName}`}
    >
      <motion.p
        className={`scroll-reveal-text size-${size} align-${align} variant-${variant} ${textClassName}`}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {splitText.map((item) => (
          item.isSpace ? (
            <span key={`space-${item.originalIndex}`}>{item.value}</span>
          ) : (
            <motion.span
              key={`word-${item.originalIndex}`}
              className="inline-block"
              variants={wordVariants}
            >
              {item.value}
            </motion.span>
          )
        ))}
      </motion.p>

      <style>{`
        .scroll-reveal-container {
          transform-gpu: translate3d(0, 0, 0);
          will-change: transform;
          display: block;
          overflow: visible;
        }
        .scroll-reveal-text {
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
          padding: 0;
        }
        
        /* Sizes */
        .scroll-reveal-text.size-sm {
          font-size: 0.95rem;
        }
        .scroll-reveal-text.size-md {
          font-size: 1.1rem;
        }
        .scroll-reveal-text.size-lg {
          font-size: 1.4rem;
        }
        .scroll-reveal-text.size-xl {
          font-size: 1.85rem;
        }
        .scroll-reveal-text.size-2xl {
          font-size: 2.25rem;
        }
        
        /* Alignments */
        .scroll-reveal-text.align-left {
          text-align: left;
        }
        .scroll-reveal-text.align-center {
          text-align: center;
        }
        .scroll-reveal-text.align-right {
          text-align: right;
        }
        
        /* Variants */
        .scroll-reveal-text.variant-default {
          color: inherit;
        }
        .scroll-reveal-text.variant-muted {
          color: hsl(var(--text-secondary));
        }
        .scroll-reveal-text.variant-accent {
          color: hsl(var(--secondary));
        }
        .scroll-reveal-text.variant-primary {
          color: hsl(var(--primary));
        }
        
        @media (max-width: 768px) {
          .scroll-reveal-text.size-md {
            font-size: 1rem;
          }
          .scroll-reveal-text.size-lg {
            font-size: 1.2rem;
          }
          .scroll-reveal-text.size-xl {
            font-size: 1.5rem;
          }
          .scroll-reveal-text.size-2xl {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ScrollReveal;
