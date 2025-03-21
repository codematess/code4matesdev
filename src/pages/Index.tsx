import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import styled from 'styled-components';

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    rgba(0, 119, 182, 0.98),
    rgba(72, 202, 228, 0.98)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 40;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  
  &:hover {
    background: linear-gradient(135deg, 
      rgba(0, 119, 182, 1),
      rgba(72, 202, 228, 1)
    );
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 
      0 8px 24px rgba(0, 119, 182, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 
      0 4px 12px rgba(0, 119, 182, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.05);
  }
`;

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-darkBg relative">
      {/* Claymorphism background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-[40px] bg-techBlue/5 shadow-xl blur-[60px]"></div>
        <div className="absolute top-[40%] left-[10%] w-[250px] h-[250px] rounded-[40px] bg-techBlue/8 shadow-xl blur-[60px]"></div>
        <div className="absolute bottom-[15%] right-[15%] w-[350px] h-[350px] rounded-[40px] bg-techBlue/5 shadow-xl blur-[50px]"></div>
        <div className="absolute -bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-[40px] bg-darkBg2/50 shadow-xl blur-[80px]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="services" className="py-0">
          <Services />
        </section>
        <section id="why-choose-us" className="py-0">
          <WhyChooseUs />
        </section>
        <section id="portfolio" className="py-0">
          <Portfolio />
        </section>
        <section id="contact" className="py-0">
          <Contact />
        </section>
        <Footer />
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </ScrollToTopButton>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
