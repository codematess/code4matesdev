import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Github, Linkedin, Twitter, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const FooterContainer = styled.footer`
  position: relative;
  background: black;
  overflow: hidden;
  padding: 4rem 0 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const LogoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    text-align: center;
    align-items: center;
  }
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(120deg, #ffffff, #3e9eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.3));
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  color: #a8b2d1;
  max-width: 400px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
`;

const LinkSection = styled.div`
  h3 {
    color: white;
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    align-items: center;
  }
`;

const FooterLink = styled(motion.a)`
  color: #a8b2d1;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  font-size: 0.95rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    justify-content: center;
  }
  
  &:hover {
    color: #3e9eff;
  }
  
  svg {
    width: 16px;
    height: 16px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-top: 1.5rem;
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(62, 158, 255, 0.1);
  color: #3e9eff;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
  }
  
  svg {
    filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.5));
    
    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
  
  &:hover {
    border-color: rgba(62, 158, 255, 0.3);
    box-shadow: 0 8px 32px rgba(62, 158, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Copyright = styled(motion.div)`
  text-align: center;
  color: #a8b2d1;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(62, 158, 255, 0.1);
  
  @media (max-width: 768px) {
    margin-top: 3rem;
    padding-top: 1.5rem;
    font-size: 0.9rem;
  }
  
  p {
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <BackgroundEffects 
        density="low" 
        speed="slow"
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <FooterContent>
          <LogoSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Logo>Code4MatesDev</Logo>
            <Description>
              Transforming ideas into powerful digital solutions. We specialize in creating modern, 
              innovative web applications that help businesses thrive in the digital age.
            </Description>

            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SocialIcon 
                href="https://github.com/thisaranawod" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <Github size={20} />
              </SocialIcon>
              <SocialIcon 
                href="https://linkedin.com/in/thisara-bandara" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <Linkedin size={20} />
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com/thisaranawod" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <Twitter size={20} />
              </SocialIcon>
              <SocialIcon 
                href="mailto:thisaranavodbandara@gmail.com" 
                whileHover={{ y: -5 }}
              >
                <Mail size={20} />
              </SocialIcon>
            </SocialLinks>
          </LogoSection>

          <LinksGrid>
            <LinkSection>
              <h3>Quick Links</h3>
              <LinkList>
                <li>
                  <FooterLink href="#about">
                    About Us
                    <ChevronRight />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#services">
                    Services
                    <ChevronRight />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#portfolio">
                    Portfolio
                    <ChevronRight />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#contact">
                    Contact
                    <ChevronRight />
                  </FooterLink>
                </li>
              </LinkList>
            </LinkSection>

            <LinkSection>
              <h3>Services</h3>
              <LinkList>
                <li>
                  <FooterLink href="#services/web-development">
                    Web Development
                    <ExternalLink />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#services/mobile-apps">
                    Mobile Apps
                    <ExternalLink />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#services/ui-ux-design">
                    UI/UX Design
                    <ExternalLink />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#services/cloud-solutions">
                    Cloud Solutions
                    <ExternalLink />
                  </FooterLink>
                </li>
              </LinkList>
            </LinkSection>
          </LinksGrid>
        </FooterContent>

        <Copyright
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} Code4MatesDev. All rights reserved.</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;
