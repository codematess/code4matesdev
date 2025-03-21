import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import NeumorphicButton from './NeumorphicButton';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  padding: 0.5rem;
  
  @media (min-width: 640px) {
    padding: 1rem;
  }
  
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.2);
`;

const NavContent = styled(motion.div)`
  max-width: 2xl;
  width: 95%;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(0, 119, 182, 0.98), rgba(72, 202, 228, 0.98));
  border-radius: 16px;
  
  @media (min-width: 640px) {
    width: 90%;
    border-radius: 20px;
  }
  
  @media (min-width: 1024px) {
    width: 70%;
    max-width: 1000px;
  }
  
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, 
      rgba(0, 119, 182, 0.3),
      rgba(144, 224, 239, 0.3)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
  }
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0 2rem;
  
  @media (min-width: 640px) {
    height: 4rem;
    padding: 0 2.5rem;
  }
  
  @media (min-width: 1024px) {
    height: 4.5rem;
    padding: 0 3rem;
  }
  
  position: relative;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 3.5rem;
    width: auto;
    
    @media (min-width: 640px) {
      height: 4rem;
    }
    
    @media (min-width: 1024px) {
      height: 5.75rem;
    }
    
    filter: drop-shadow(0 0 12px rgba(62, 158, 255, 0.4));
  }
`;

const DesktopMenu = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`;

const ContactButtonWrapper = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const NavLinkStyled = styled(motion(NavLink))`
  position: relative;
  color: black;
  font-weight: 500;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  
  @media (min-width: 1024px) {
    font-size: 0.95rem;
  }
  
  letter-spacing: 0.01em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0px;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.7)
    );
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active {
    font-weight: 600;
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  position: absolute;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  
  @media (min-width: 640px) {
    width: 2.75rem;
    height: 2.75rem;
  }
  
  border-radius: 12px;
  background: linear-gradient(135deg, 
    rgba(0, 119, 182, 0.98),
    rgba(72, 202, 228, 0.98)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 
      0 4px 12px rgba(0, 119, 182, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.05);
  }
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 35;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  max-width: 400px;
  background: linear-gradient(135deg, 
    rgb(0, 119, 182),
    rgb(72, 202, 228)
  );
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 40;
  box-shadow: 
    -8px 0 32px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 0.5rem;
`;

const MobileMenuCloseButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  background: rgb(0, 119, 182);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgb(0, 130, 200);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 12px rgba(0, 119, 182, 0.3);
    transform: rotate(90deg);
  }
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MobileNavLink = styled(motion(NavLink))`
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgb(0, 119, 182);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: rgb(0, 130, 200);
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  &.active {
    color: black;
    font-weight: 600;
  }
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Get all sections
      const sections = ['home', 'services', 'why-choose-us', 'portfolio', 'contact'];
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Adjust this value to change when a section is considered "active"
          
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent
        animate={{
          scale: scrolled ? 0.95 : 1,
          opacity: scrolled ? 0.9 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <NavInner>
          <Logo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/" onClick={(e) => scrollToSection('home', e)}>
              <img src="/logo.png" alt="Logo" />
            </NavLink>
          </Logo>

          <DesktopMenu>
            <NavLinks>
              <NavLinkStyled
                to="/" 
                onClick={(e) => scrollToSection('home', e)}
                
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </NavLinkStyled>
              <NavLinkStyled
                to="/#services"
                onClick={(e) => scrollToSection('services', e)}
                
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
              </NavLinkStyled>
              <NavLinkStyled
                to="/#why-choose-us"
                onClick={(e) => scrollToSection('why-choose-us', e)}
                
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Why Choose Us
              </NavLinkStyled>
              <NavLinkStyled
                to="/#portfolio"
                onClick={(e) => scrollToSection('portfolio', e)}
                
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Portfolio
              </NavLinkStyled>
            </NavLinks>
          </DesktopMenu>

          <ContactButtonWrapper>
            <NavLink 
              to="/#contact" 
              onClick={(e) => scrollToSection('contact', e)}
              className={isActive('contact') ? 'active' : ''}
            >
                <NeumorphicButton 
                  variant="secondary"
                  size="medium"
                >
                  Contact us
                </NeumorphicButton>
              </NavLink>
          </ContactButtonWrapper>

          <MobileMenuButton
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavInner>
      </NavContent>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring',
                damping: 20,
                stiffness: 100
              }}
            >
              <MobileMenuHeader>
                <MobileMenuCloseButton
            onClick={closeMobileMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </MobileMenuCloseButton>
              </MobileMenuHeader>

              <MobileMenuLinks>
                <MobileNavLink
            to="/" 
                  onClick={(e) => scrollToSection('home', e)}
                  className={isActive('home') ? 'active' : ''}
          >
            Home
                </MobileNavLink>
                <MobileNavLink
                  to="/#services"
                  onClick={(e) => scrollToSection('services', e)}
                  className={isActive('services') ? 'active' : ''}
          >
            Services
                </MobileNavLink>
                <MobileNavLink
                  to="/#why-choose-us"
                  onClick={(e) => scrollToSection('why-choose-us', e)}
                  className={isActive('why-choose-us') ? 'active' : ''}
                >
                  Why Choose Us
                </MobileNavLink>
                <MobileNavLink
                  to="/#portfolio"
                  onClick={(e) => scrollToSection('portfolio', e)}
                  className={isActive('portfolio') ? 'active' : ''}
          >
            Portfolio
                </MobileNavLink>
                <div className="pt-3">
                  <NavLink 
                    to="/#contact" 
                    onClick={(e) => scrollToSection('contact', e)}
                    className={isActive('contact') ? 'active' : ''}
                  >
              <NeumorphicButton 
                variant="secondary"
                size="medium"
              >
                Contact us
              </NeumorphicButton>
            </NavLink>
          </div>
              </MobileMenuLinks>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;
