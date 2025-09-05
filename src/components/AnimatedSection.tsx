'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) {
  const getVariants = () => {
    switch (direction) {
      case 'left':
        return slideInVariants;
      case 'right':
        return { ...slideInVariants, hidden: { opacity: 0, x: 50 } };
      case 'down':
        return { ...fadeInVariants, hidden: { opacity: 0, y: -50 } };
      case 'up':
      default:
        return fadeInVariants;
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Componente para animar elementos individuales
export function AnimatedElement({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up',
  duration = 0.6
}: AnimatedSectionProps & { duration?: number }) {
  const getVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration,
          ease: "easeOut"
        }
      }
    };

    switch (direction) {
      case 'up':
        return { ...baseVariants, hidden: { ...baseVariants.hidden, y: 50 } };
      case 'down':
        return { ...baseVariants, hidden: { ...baseVariants.hidden, y: -50 } };
      case 'left':
        return { ...baseVariants, hidden: { ...baseVariants.hidden, x: -50 } };
      case 'right':
        return { ...baseVariants, hidden: { ...baseVariants.hidden, x: 50 } };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Componente para animar cards en grid
export function AnimatedGrid({ 
  children, 
  className = "", 
  staggerDelay = 0.1 
}: { 
  children: React.ReactNode; 
  className?: string; 
  staggerDelay?: number; 
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Componente para animar cards individuales
export function AnimatedCard({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number; 
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.2 } 
      }}
    >
      {children}
    </motion.div>
  );
}
