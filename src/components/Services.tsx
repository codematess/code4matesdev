import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Code2, Globe, Smartphone, Rocket } from 'lucide-react';
import styled from 'styled-components';
import BackgroundEffects from './BackgroundEffects';

// Styled Components
const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(62, 158, 255, 0.2);
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;

  @media (min-width: 640px) {
    padding: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(62, 158, 255, 0.1), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    border-color: rgba(62, 158, 255, 0.4);
    box-shadow: 0 0 20px rgba(62, 158, 255, 0.2);
  }
`;

const AnimatedIcon = styled(motion.div)`
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  color: #3e9eff;
  position: relative;

  @media (min-width: 640px) {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(62, 158, 255, 0.1), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;

    @media (min-width: 640px) {
      width: 80px;
      height: 80px;
    }
  }

  &:hover::after {
    opacity: 1;
  }
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(62, 158, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
`;

const FuturisticTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 800;
  text-align: center;
  background: linear-gradient(120deg, #ffffff, #3e9eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.3));
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 0.75rem;

  @media (min-width: 640px) {
    margin-bottom: 1rem;
  }
`;

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      icon: <Code2 size={32} />,
      title: "Custom Web Development",
      description: "Tailored web solutions built with cutting-edge technologies to meet your specific business needs.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
    },
    {
      icon: <Globe size={32} />,
      title: "SaaS Development",
      description: "Scalable software-as-a-service solutions that grow with your business and adapt to market demands.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
    },
    {
      icon: <Rocket size={32} />,
      title: "Digital Transformation",
      description: "Comprehensive digital solutions to modernize your business and stay ahead of the competition.",
      animation: "https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2
  }));

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      <BackgroundEffects 
        density="high" 
        speed="medium"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FuturisticTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </FuturisticTitle>
          <motion.div 
            className="w-24 sm:w-32 h-1 mx-auto mb-6 sm:mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: "linear-gradient(90deg, transparent, #3e9eff, transparent)",
              boxShadow: "0 0 20px rgba(62, 158, 255, 0.5)"
            }}
          />
          <p className="text-base sm:text-lg md:text-xl text-[#a8b2d1] max-w-2xl mx-auto px-4">
            We deliver cutting-edge digital solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <GlassCard
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(62, 158, 255, 0.2)"
              }}
            >
              <AnimatedIcon
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </AnimatedIcon>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-[#a8b2d1]">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
