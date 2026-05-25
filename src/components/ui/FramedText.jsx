import React from 'react';
import { motion } from 'framer-motion';

const STAGGER = 0.035;

export const FramedText = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`framed-text-container ${className}`}
      initial="initial"
      whileHover="hovered"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1.75rem',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      {/* Background tint */}
      <motion.span
        className="framed-text-bg"
        variants={{
          initial: { backgroundColor: 'rgba(249, 115, 22, 0.02)' },
          hovered: { backgroundColor: 'rgba(249, 115, 22, 0.07)' }
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Border framing */}
      <motion.span
        className="framed-text-border"
        variants={{
          initial: { borderColor: 'rgba(249, 115, 22, 0.15)', boxShadow: '0 0 0 rgba(249, 115, 22, 0)' },
          hovered: { borderColor: 'rgba(249, 115, 22, 0.55)', boxShadow: '0 0 10px rgba(249, 115, 22, 0.15)' }
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          inset: 0,
          border: '1px solid',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Corner Handles */}
      {/* Top Left */}
      <motion.span
        className="framed-corner tl"
        variants={{
          initial: { x: 0, y: 0, scale: 1 },
          hovered: { x: -5, y: -5, scale: 1.2 }
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 18 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '7px',
          height: '7px',
          backgroundColor: 'hsl(var(--primary))',
          border: '1px solid #ffffff',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      />
      {/* Top Right */}
      <motion.span
        className="framed-corner tr"
        variants={{
          initial: { x: 0, y: 0, scale: 1 },
          hovered: { x: 5, y: -5, scale: 1.2 }
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 18 }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '7px',
          height: '7px',
          backgroundColor: 'hsl(var(--primary))',
          border: '1px solid #ffffff',
          transform: 'translate(50%, -50%)',
          zIndex: 2,
        }}
      />
      {/* Bottom Left */}
      <motion.span
        className="framed-corner bl"
        variants={{
          initial: { x: 0, y: 0, scale: 1 },
          hovered: { x: -5, y: 5, scale: 1.2 }
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 18 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '7px',
          height: '7px',
          backgroundColor: 'hsl(var(--primary))',
          border: '1px solid #ffffff',
          transform: 'translate(-50%, 50%)',
          zIndex: 2,
        }}
      />
      {/* Bottom Right */}
      <motion.span
        className="framed-corner br"
        variants={{
          initial: { x: 0, y: 0, scale: 1 },
          hovered: { x: 5, y: 5, scale: 1.2 }
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 18 }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '7px',
          height: '7px',
          backgroundColor: 'hsl(var(--primary))',
          border: '1px solid #ffffff',
          transform: 'translate(50%, 50%)',
          zIndex: 2,
        }}
      />

      {/* Content wrapper with gradient text clipping */}
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
        }}
      >
        {children}
      </span>
    </motion.span>
  );
};

export default FramedText;
