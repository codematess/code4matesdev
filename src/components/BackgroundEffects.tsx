import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

const CircuitLine = styled(motion.div)`
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(62, 158, 255, 0.2), transparent);
  height: 1px;
  width: 100%;
  opacity: 0.5;
`;

const GlowingDot = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #3e9eff;
  border-radius: 50%;
  filter: blur(2px);
  box-shadow: 0 0 8px #3e9eff;
`;

const DiagonalLine = styled(motion.div)`
  position: absolute;
  background: linear-gradient(45deg, transparent, rgba(62, 158, 255, 0.1), transparent);
  height: 1px;
  width: 150px;
  transform-origin: left center;
`;

interface BackgroundEffectsProps {
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

const getDensityValues = (density: 'low' | 'medium' | 'high') => {
  switch (density) {
    case 'low':
      return {
        circuitLines: 6,
        glowingDots: 15,
        diagonalLines: 4
      };
    case 'high':
      return {
        circuitLines: 16,
        glowingDots: 40,
        diagonalLines: 12
      };
    default:
      return {
        circuitLines: 12,
        glowingDots: 30,
        diagonalLines: 8
      };
  }
};

const getSpeedValues = (speed: 'slow' | 'medium' | 'fast') => {
  switch (speed) {
    case 'slow':
      return {
        circuitDuration: 3,
        dotDuration: 4,
        diagonalDuration: 5
      };
    case 'fast':
      return {
        circuitDuration: 1.5,
        dotDuration: 2,
        diagonalDuration: 3
      };
    default:
      return {
        circuitDuration: 2,
        dotDuration: 3,
        diagonalDuration: 4
      };
  }
};

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ 
  density = 'medium',
  speed = 'medium',
  className = ''
}) => {
  const densityValues = getDensityValues(density);
  const speedValues = getSpeedValues(speed);

  // Generate circuit lines
  const circuitLines = Array.from({ length: densityValues.circuitLines }, (_, i) => ({
    id: i,
    y: (i * (100 / densityValues.circuitLines)) + Math.random() * 5,
    delay: i * 0.2
  }));

  // Generate glowing dots
  const glowingDots = Array.from({ length: densityValues.glowingDots }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 0.5,
    delay: Math.random() * 2
  }));

  // Generate diagonal lines
  const diagonalLines = Array.from({ length: densityValues.diagonalLines }, (_, i) => ({
    id: i,
    x: (i * (100 / densityValues.diagonalLines)) + Math.random() * 10,
    y: (i * (100 / densityValues.diagonalLines)) + Math.random() * 10,
    rotation: 45 + (Math.random() * 45),
    delay: i * 0.3
  }));

  return (
    <BackgroundWrapper className={className}>
      {/* Circuit Lines */}
      {circuitLines.map((line) => (
        <CircuitLine
          key={line.id}
          style={{ top: `${line.y}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{
            duration: speedValues.circuitDuration,
            delay: line.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      {/* Glowing Dots */}
      {glowingDots.map((dot) => (
        <GlowingDot
          key={dot.id}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            scale: dot.scale
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [dot.scale, dot.scale * 1.5, dot.scale]
          }}
          transition={{
            duration: speedValues.dotDuration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Diagonal Lines */}
      {diagonalLines.map((line) => (
        <DiagonalLine
          key={line.id}
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            rotate: line.rotation
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0],
            x: ["0%", "100%"]
          }}
          transition={{
            duration: speedValues.diagonalDuration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </BackgroundWrapper>
  );
};

export default BackgroundEffects; 