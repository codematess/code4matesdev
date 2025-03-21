import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundEffects from './BackgroundEffects';

// Styled Components
const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(3, 4, 94, 0.3), transparent);
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  background: linear-gradient(120deg, #ffffff, #3e9eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.3));
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const GradientButton = styled(motion.button)`
  background: linear-gradient(45deg, #3e9eff, #90E0EF);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #023E8A, #3e9eff);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      setMousePosition({ x, y });
      if (heroRef.current) {
        heroRef.current.style.backgroundPosition = `${50 + (x * 10)}% ${50 + (y * 10)}%`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial animations
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundEffects 
        density="high" 
        speed="slow"
      />

      {/* Floating Elements */}
      <FloatingElement
        className="w-64 h-64 top-20 left-20"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 119, 182, 0.3), transparent)'
        }}
      />
      <FloatingElement
        className="w-96 h-96 bottom-20 right-20"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 150, 199, 0.3), transparent)'
        }}
      />

      <div className="section relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side Content */}
          <GlassCard
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'rgba(0, 119, 182, 0.1)',
              border: '1px solid rgba(0, 119, 182, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 119, 182, 0.1)'
            }}
          >
            <motion.span 
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#90E0EF] bg-[#0077B6]/20 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              INNOVATIVE WEB SOLUTIONS
            </motion.span>

            <motion.h1 
              className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering Your{" "}
              <motion.span 
                className="bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#90E0EF] text-transparent bg-clip-text"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Digital Future
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl text-[#90E0EF]/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We specialize in custom web solutions, SaaS products, and mobile app development that elevate your business.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <GradientButton
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#0077B6]/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </GradientButton>
              
              
            </motion.div>
          </GlassCard>

          {/* Right Side Animation */}
          <motion.div 
            className="w-full lg:w-[60%] mt-12 lg:mt-0 lg:ml-24 flex justify-end"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.8, x: 200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="w-full max-w-[700px]">
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
                style={{ width: '100%', height: '600px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        style={{ opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight 
            size={32}
            className="text-[#90E0EF] transform rotate-90"
          />
        </motion.div>
        <span className="mt-2 text-xs text-[#90E0EF]/60 font-medium">Scroll Down</span>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
