import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Mail, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(62, 158, 255, 0.1);
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  svg {
    color: #3e9eff;
    filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.5));
  }
  
  &:hover {
    border-color: rgba(62, 158, 255, 0.3);
    box-shadow: 0 8px 32px rgba(62, 158, 255, 0.2);
  }
`;

const FormInput = styled(motion.input)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(62, 158, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  color: white;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3e9eff;
    box-shadow: 0 0 0 2px rgba(62, 158, 255, 0.2);
  }
`;

const FormTextArea = styled(motion.textarea)`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(62, 158, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  color: white;
  margin-bottom: 1.5rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #3e9eff;
    box-shadow: 0 0 0 2px rgba(62, 158, 255, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #3e9eff, #90E0EF);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(62, 158, 255, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconButton = styled(motion.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(62, 158, 255, 0.1);
  color: #3e9eff;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 10px;
  }
  
  svg {
    filter: drop-shadow(0 0 8px rgba(62, 158, 255, 0.5));
    
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
  
  &:hover {
    border-color: rgba(62, 158, 255, 0.3);
    box-shadow: 0 8px 32px rgba(62, 158, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const FormContainer = styled(motion.form)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(62, 158, 255, 0.1);
  padding: 2rem;
  
  &:hover {
    border-color: rgba(62, 158, 255, 0.2);
  }
`;

const LoadingSpinner = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.3);
  color: #2ecc71;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  text-align: center;
`;

const ErrorMessage = styled(motion.div)`
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid rgba(231, 76, 60, 0.3);
  color: #e74c3c;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  text-align: center;
`;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);
    setError(false);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        'service_az0ot0u', // Replace with your EmailJS service ID
        'template_acg94se', // Replace with your EmailJS template ID
        formRef.current,
        'KEULy-vO_qXLyedpg' // Replace with your EmailJS public key
      );

      setSuccess(true);
      formRef.current.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError(true);
      console.error('Failed to send email:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden min-h-screen">
      <BackgroundEffects 
        density="medium" 
        speed="slow"
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            Get in Touch
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
            Let's work together! Contact us for collaborations, inquiries, or support.
          </p>
        </motion.div>

        <ContactGrid>
          {/* Contact Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-[#a8b2d1]">code4matesdev@gmail.com</p>
                </div>
              </ContactCard>

              <ContactCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={24} />
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-[#a8b2d1]">(+94) 77 404 8410</p>
                </div>
              </ContactCard>

              <SocialIcons
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <IconButton 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <Github size={20} />
                </IconButton>
                <IconButton 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <Linkedin size={20} />
                </IconButton>
                <IconButton 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <Twitter size={20} />
                </IconButton>
              </SocialIcons>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <FormContainer
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {success && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}
              
              {error && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Sorry, there was an error sending your message. Please try again.
                </ErrorMessage>
              )}

              <FormInput
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <FormInput
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <FormInput
                type="text"
                name="subject"
                placeholder="Subject"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <FormTextArea
                name="message"
                placeholder="Your Message"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <SubmitButton
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </SubmitButton>
              </motion.div>
            </div>
          </FormContainer>
        </ContactGrid>
      </div>
    </section>
  );
};

export default Contact;
