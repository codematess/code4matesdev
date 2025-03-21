import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Users, Clock, Target, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import styled from 'styled-components';
import BackgroundEffects from './BackgroundEffects';

// Styled Components
const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  flex: 0 0 100%;
  transform-style: preserve-3d;
  perspective: 1000px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  @media (min-width: 1024px) {
    flex: 0 0 33.333%;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(62, 158, 255, 0.1) 45%,
      rgba(62, 158, 255, 0.2) 50%,
      rgba(62, 158, 255, 0.1) 55%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(62, 158, 255, 0.2);
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(62, 158, 255, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const AnimatedIcon = styled(motion.div)`
  width: 72px;
  height: 72px;
  margin-bottom: 2rem;
  color: #3e9eff;
  position: relative;
  filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.5));

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    background: radial-gradient(circle, rgba(62, 158, 255, 0.2), transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
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

const SliderContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  perspective: 2000px;
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  width: 100%;
  transform-style: preserve-3d;
  gap: 0;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const FuturisticTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(120deg, #ffffff, #3e9eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.3));
  letter-spacing: -0.02em;
`;

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <Shield size={36} />,
      title: "Trusted Expertise",
      description: "Our team brings years of industry experience and proven track record in delivering exceptional solutions."
    },
    {
      icon: <Zap size={36} />,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge technologies and modern development practices."
    },
    {
      icon: <Users size={36} />,
      title: "Dedicated Support",
      description: "Our client-centric approach ensures you receive personalized attention and ongoing support."
    },
    {
      icon: <Clock size={36} />,
      title: "Time-Efficient",
      description: "We deliver projects on time without compromising quality, helping you meet your business goals."
    },
    {
      icon: <Target size={36} />,
      title: "Precision Focus",
      description: "Our attention to detail and commitment to excellence ensures flawless execution of every project."
    },
    {
      icon: <Heart size={36} />,
      title: "Client Success",
      description: "Your success is our priority. We go above and beyond to ensure your business thrives."
    }
  ];

  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(features.length / visibleCards);
  const circuitLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    y: (i * 12) + Math.random() * 5,
    delay: i * 0.2
  }));

  const glowingDots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 0.5,
    delay: Math.random() * 2
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, totalSlides]);

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - dragStartX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (dragOffset < 0 && currentIndex < totalSlides - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }
    setDragOffset(0);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <BackgroundEffects 
        density="medium" 
        speed="medium"
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FuturisticTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Why Choose Us
          </FuturisticTitle>
          <motion.div 
            className="w-32 h-1 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: "linear-gradient(90deg, transparent, #3e9eff, transparent)",
              boxShadow: "0 0 20px rgba(62, 158, 255, 0.5)"
            }}
          />
          <motion.p 
            className="text-xl text-[#a8b2d1] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We provide innovative digital solutions with unmatched expertise.
          </motion.p>
        </motion.div>

        {/* Circuit Lines */}
        {circuitLines.map((line) => (
          <CircuitLine
            key={line.id}
            style={{ top: `${line.y}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.5 }}
            transition={{
              duration: 2,
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
              duration: 3,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Slider */}
        <SliderContainer>
          <SliderTrack
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            animate={{
              x: `calc(-${currentIndex * 100}% + ${dragOffset}px)`,
              rotateY: isDragging ? dragOffset * 0.05 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 25
            }}
          >
            {features.map((feature, index) => (
              <GlassCard
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(62, 158, 255, 0.2)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <AnimatedIcon
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </AnimatedIcon>
                
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-[#a8b2d1] leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </GlassCard>
            ))}
          </SliderTrack>
        </SliderContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
