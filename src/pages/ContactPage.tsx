
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-darkBg relative">
      {/* Claymorphism background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-[40px] bg-techBlue/5 shadow-xl blur-[60px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-[40px] bg-techBlue/8 shadow-xl blur-[50px]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center clay-card bg-darkBg2/50 backdrop-blur-sm">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-techBlue bg-techBlue/10 rounded-full">GET IN TOUCH</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-xl text-lightText2/80 animate-fade-in-up">
              Have a project in mind? We'd love to hear about it. Reach out and let's start building something amazing together.
            </p>
          </div>
        </section>
        
        {/* Contact Form Section (reusing the Contact component) */}
        <Contact />
        
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
