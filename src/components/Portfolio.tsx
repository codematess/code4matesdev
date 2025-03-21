import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import BackgroundEffects from './BackgroundEffects';

// Styled Components
const FuturisticTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  text-align: center;
  background: linear-gradient(120deg, #ffffff, #3e9eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.3));
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const BentoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BentoCard = styled(motion.div)<{ $span?: string }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(62, 158, 255, 0.1);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  grid-column: ${props => props.$span || 'span 3'};
  min-height: 320px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(62, 158, 255, 0.15),
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    grid-column: span 6;
  }
  
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const CategoryTag = styled(motion.span)`
  background: rgba(62, 158, 255, 0.1);
  color: #3e9eff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
  border: 1px solid rgba(62, 158, 255, 0.2);
  box-shadow: 0 0 10px rgba(62, 158, 255, 0.1);
`;

const ViewMoreButton = styled(motion.button)`
  background: transparent;
  color: #3e9eff;
  border: none;
  padding: 0;
  font-weight: 600;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #3e9eff, #90E0EF);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced filtering, real-time inventory, and seamless payment integration.",
      category: "Websites",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1024",
      span: "span 6"
    },
    {
      title: "Restaurant POS System",
      description: "Custom POS solution with table management, order tracking, and integrated payment processing.",
      category: "POS Systems",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1024",
      span: "span 3"
    },
    {
      title: "UI/UX Design System",
      description: "Comprehensive design system with component library and interactive prototypes.",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1024",
      span: "span 3"
    },
    {
      title: "Mobile Application",
      description: "Cross-platform mobile solution with intuitive interface, seamless performance, and modern design principles.",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1024",
      span: "span 4"
    },
    {
      title: "B2B SaaS Platform",
      description: "Cloud-based solution for business process automation and team collaboration.",
      category: "SaaS Projects",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1024",
      span: "span 4"
    },
    {
      title: "Brand Story Video",
      description: "Engaging promotional video showcasing brand values and product features.",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1024",
      span: "span 4"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <BackgroundEffects 
        density="medium" 
        speed="slow"
      />
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
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
            Featured Projects
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
          <p className="text-xl text-[#a8b2d1] max-w-2xl mx-auto">
            Discover our latest cutting-edge solutions that redefine digital experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <BentoCard
              key={index}
              $span={project.span}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ 
                scale: 1.02,
                translateZ: 10,
                boxShadow: "0 20px 40px rgba(62, 158, 255, 0.2)",
                borderColor: "rgba(62, 158, 255, 0.3)"
              }}
              onMouseMove={handleMouseMove}
            >
              <ImageWrapper
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </ImageWrapper>
              
              <CategoryTag
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.category}
              </CategoryTag>
              
              <motion.h3 
                className="text-2xl font-bold text-white mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="text-[#a8b2d1] mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.description}
              </motion.p>
              
              {/* <ViewMoreButton
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                View Project →
              </ViewMoreButton> */}
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Portfolio;
