
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2376&q=80'
  },
  {
    name: 'Michael Rodriguez',
    role: 'UX/UI Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  },
  {
    name: 'Emma Wilson',
    role: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  }
];

const technologies = [
  { name: 'React', icon: <Code size={24} className="text-techBlue" /> },
  { name: 'Node.js', icon: <Code size={24} className="text-techBlue" /> },
  { name: 'MongoDB', icon: <Database size={24} className="text-techBlue" /> },
  { name: 'Next.js', icon: <Globe size={24} className="text-techBlue" /> },
  { name: 'React Native', icon: <Smartphone size={24} className="text-techBlue" /> },
  { name: 'GraphQL', icon: <Database size={24} className="text-techBlue" /> }
];

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-darkBg">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-techBlue bg-techBlue/10 rounded-full">ABOUT US</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            We Create Digital Products That <span className="text-gradient">Make a Difference</span>
          </h1>
          <p className="text-xl text-lightText2/80 animate-fade-in-up">
            Code4MatesDev is a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right">
              <div className="relative rounded-xl overflow-hidden border border-white/10 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Our office" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent opacity-70" />
              </div>
            </div>
            
            <div className="animate-fade-in-left">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-techBlue bg-techBlue/10 rounded-full">OUR STORY</span>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lightText2/70 mb-6">
                Founded in 2021, Code4MatesDev has quickly grown from a small team of developers to a full-service digital agency. We believe in creating digital products that not only look great but also deliver real value to users and businesses alike.
              </p>
              <p className="text-lightText2/70 mb-6">
                Our mission is to empower businesses with cutting-edge technology solutions that drive growth and success. We combine technical expertise with creative thinking to deliver results that exceed expectations.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-techBlue/10 flex items-center justify-center">
                    <Code size={24} className="text-techBlue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Our Mission</h3>
                    <p className="text-sm text-lightText2/70">To create digital solutions that empower businesses.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-techBlue/10 flex items-center justify-center">
                    <Globe size={24} className="text-techBlue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Our Vision</h3>
                    <p className="text-sm text-lightText2/70">To be the leading provider of innovative digital experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-darkBg2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-techBlue bg-techBlue/10 rounded-full">OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Experts</h2>
            <p className="text-lightText2/70 max-w-2xl mx-auto">
              Our diverse team brings together expertise across development, design, and strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl border border-white/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-techBlue">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-techBlue bg-techBlue/10 rounded-full">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lightText2/70 max-w-2xl mx-auto">
              We leverage modern technologies to build scalable, robust, and efficient digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-darkBg2 border border-white/10 rounded-lg p-6 flex flex-col items-center text-center scale-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-lg bg-techBlue/10 glassmorphism mb-4">
                  {tech.icon}
                </div>
                <h3 className="font-medium">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
