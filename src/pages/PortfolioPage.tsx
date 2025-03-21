
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowUpRight } from 'lucide-react';

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Task Management SaaS',
    category: 'SaaS Product',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80',
    tech: ['React Native', 'Node.js', 'GraphQL']
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80',
    tech: ['Next.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    id: 5,
    title: 'Healthcare Dashboard',
    category: 'Custom Software',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    tech: ['React', 'D3.js', 'Express']
  },
  {
    id: 6,
    title: 'Travel Companion App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80',
    tech: ['Flutter', 'Firebase', 'Google Maps API']
  },
  {
    id: 7,
    title: 'Project Management Tool',
    category: 'SaaS Product',
    image: 'https://images.unsplash.com/photo-1572053675669-2562767ee5e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2534&q=80',
    tech: ['Angular', 'TypeScript', 'PostgreSQL']
  },
  {
    id: 8,
    title: 'Food Delivery Service',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80',
    tech: ['React', 'Node.js', 'Stripe API']
  },
  {
    id: 9,
    title: 'Educational Platform',
    category: 'Custom Software',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    tech: ['Next.js', 'Socket.io', 'MongoDB']
  },
  {
    id: 10,
    title: 'Financial Dashboard',
    category: 'SaaS Product',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80',
    tech: ['React', 'D3.js', 'Firebase']
  },
  {
    id: 11,
    title: 'Social Media App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1573152143286-0c422b4d104c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    tech: ['React Native', 'GraphQL', 'AWS']
  },
  {
    id: 12,
    title: 'Smart Home Control',
    category: 'IoT Solution',
    image: 'https://images.unsplash.com/photo-1558002038-bb0237f4e658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    tech: ['Raspberry Pi', 'Node.js', 'React']
  }
];

// Categories for filtering
const categories = ['All', 'Web Development', 'SaaS Product', 'Mobile App', 'Custom Software', 'IoT Solution'];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter projects when filter changes
  useEffect(() => {
    if (filter === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  return (
    <div className="min-h-screen bg-darkBg">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-techBlue bg-techBlue/10 rounded-full">OUR WORK</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-lightText2/80 animate-fade-in-up">
            Explore our recent projects that showcase our expertise and capabilities.
          </p>
        </div>
      </section>
      
      {/* Portfolio Categories */}
      <section className="px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category
                  ? 'bg-techBlue text-white'
                  : 'bg-darkBg2 text-lightText2/70 hover:bg-darkBg2/80'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl border border-white/10 animate-fade-in transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-techBlue/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[280px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="text-xs font-medium text-techBlue bg-techBlue/10 px-2 py-1 rounded">{item.category}</span>
                  <h3 className="text-xl font-semibold mt-2 group-hover:text-techBlue transition-colors">{item.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-darkBg2/70 backdrop-blur-sm rounded px-2 py-1 text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
              <p className="text-lightText2/70 mb-8 max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear about it and discuss how we can help.
              </p>
              <a href="/contact" className="button-primary inline-flex items-center gap-2">
                Start Your Project
              </a>
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

export default PortfolioPage;
