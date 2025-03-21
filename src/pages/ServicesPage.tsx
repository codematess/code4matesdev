
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Code, Server, Settings, Smartphone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon: <Code size={32} className="text-techBlue" />,
    title: 'Web Development',
    description: 'We build responsive, high-performance websites and web applications that deliver exceptional user experiences. Our web development services include frontend development, backend development, e-commerce solutions, and website maintenance.',
    benefits: [
      'Responsive Design', 
      'Performance Optimization', 
      'SEO-Friendly Structure', 
      'Cross-browser Compatibility'
    ],
    projects: [1, 2]
  },
  {
    icon: <Server size={32} className="text-techBlue" />,
    title: 'Custom Software Solutions',
    description: 'We develop tailored software solutions designed to address your specific business challenges and objectives. Our team creates custom applications that streamline processes, improve efficiency, and drive growth.',
    benefits: [
      'Tailored to Your Needs', 
      'Scalable Architecture', 
      'Ongoing Support', 
      'Seamless Integration'
    ],
    projects: [3, 4]
  },
  {
    icon: <Settings size={32} className="text-techBlue" />,
    title: 'SaaS Products',
    description: 'We design and develop scalable, cloud-based software applications that provide ongoing value and revenue streams. Our SaaS development services include product strategy, UX/UI design, development, and continuous improvement.',
    benefits: [
      'Subscription-based Model', 
      'Cloud Architecture', 
      'Scalable Infrastructure', 
      'Continuous Updates'
    ],
    projects: [5, 6]
  },
  {
    icon: <Smartphone size={32} className="text-techBlue" />,
    title: 'Mobile App Development',
    description: 'We create native and cross-platform mobile applications that engage users and extend your digital presence. Our mobile app development services span iOS, Android, and hybrid platforms, ensuring your app reaches the widest possible audience.',
    benefits: [
      'Native Performance', 
      'Cross-platform Options', 
      'Intuitive UX/UI', 
      'Offline Capabilities'
    ],
    projects: [7, 8]
  }
];

const ServicesPage = () => {
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
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-techBlue bg-techBlue/10 rounded-full">OUR SERVICES</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </h1>
          <p className="text-xl text-lightText2/80 animate-fade-in-up">
            We offer a full range of services to help businesses succeed in the digital landscape.
          </p>
        </div>
      </section>
      
      {/* Services List */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={`animate-fade-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="relative rounded-xl overflow-hidden border border-white/10 h-full p-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-darkBg2 to-darkBg opacity-80" />
                    
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
                      <div className="p-5 rounded-2xl bg-techBlue/10 glassmorphism mb-8">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <div className="w-16 h-1 bg-techBlue rounded-full mb-6" />
                      
                      <div className="mt-8 grid grid-cols-1 gap-4 w-full">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              <CheckCircle size={20} className="text-techBlue" />
                            </div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative background element */}
                    <div className="absolute -z-10 right-0 bottom-0 w-64 h-64 bg-techBlue/5 rounded-full blur-[60px]" />
                  </div>
                </div>
                
                <div className={`animate-fade-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-techBlue bg-techBlue/10 rounded-full">
                    SERVICE {index + 1}
                  </span>
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  <p className="text-lightText2/70 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-3">Related Projects</h4>
                    <div className="space-y-3">
                      {service.projects.map((projectId, i) => (
                        <Link 
                          key={i} 
                          to={`/portfolio/${projectId}`} 
                          className="flex items-center gap-2 text-techBlue hover:underline underline-offset-4"
                        >
                          <ArrowRight size={16} />
                          <span>View Project {projectId}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="button-primary inline-flex items-center gap-2 mt-8"
                  >
                    Discuss Your Project
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-darkBg2 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-white/10 p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-techBlue/20 to-purple-500/10 opacity-30" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lightText2/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your business goals with our comprehensive digital solutions.
              </p>
              <Link to="/contact" className="button-primary inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-techBlue/5 rounded-full blur-[100px]" />
            <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-techBlue/5 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
