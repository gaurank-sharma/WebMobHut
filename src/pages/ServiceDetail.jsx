// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { CheckCircle, ArrowLeft } from 'lucide-react';
// import { servicesData } from '../data';

// const ServiceDetail = () => {
//   const { id } = useParams();
//   const service = servicesData.find(s => s.id === id);

//   if (!service) {
//     return <div className="text-center py-20">Service not found</div>;
//   }

//   return (
//     <div className="pb-20">
//       <div className="bg-gray-900 text-white py-20">
//         <div className="container mx-auto px-6">
//             <Link to="/services" className="text-gray-400 hover:text-white flex items-center mb-6">
//                 <ArrowLeft size={16} className="mr-2"/> Back to Services
//             </Link>
//             <h1 className="text-4xl md:text-5xl font-heading font-bold">{service.title}</h1>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 mt-12 grid md:grid-cols-3 gap-12">
//         <div className="md:col-span-2">
//             <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg" />
//             <h2 className="text-2xl font-bold mb-4">Overview</h2>
//             <p className="text-gray-600 leading-relaxed text-lg mb-8">{service.fullDesc}</p>
            
//             <h3 className="text-xl font-bold mb-4">What We Include:</h3>
//             <ul className="grid sm:grid-cols-2 gap-4">
//                 {service.features.map((feature, index) => (
//                     <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
//                         <CheckCircle className="text-blue-500 mr-3 mt-1 shrink-0" size={20} />
//                         <span className="text-gray-700 font-medium">{feature}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>

//         {/* Sidebar Call to Action */}
//         <div className="md:col-span-1">
//             <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl sticky top-24">
//                 <h3 className="text-2xl font-bold mb-4">Interested in this service?</h3>
//                 <p className="mb-6 text-blue-100">Contact us today to get a quote or discuss your requirements.</p>
//                 <Link to="/contact" className="block w-full py-3 bg-white text-blue-600 text-center rounded-lg font-bold hover:bg-gray-100 transition">
//                     Get a Quote
//                 </Link>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;



import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../data';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    let ctx = gsap.matchMedia();

    ctx.add("(min-width: 320px)", () => {
      // Hero Text Animation
      gsap.fromTo(".hero-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );

      // Content Block Animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          }
        }
      );

      // Features List Animation
      gsap.fromTo(".feature-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          }
        }
      );
      
      // CTA Animation
       gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, [id]); // Re-run effect if the ID changes

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-[#6EE7B7] hover:underline">Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* =========================================
          1. IMMERSIVE HERO SECTION
      ========================================= */}
      <div ref={heroRef} className="relative w-full h-[60vh] md:h-[80vh]">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-24">
          <Link to="/services" className="hero-text text-gray-400 hover:text-[#6EE7B7] flex items-center mb-8 uppercase tracking-widest text-sm font-bold w-max transition-colors">
            <ArrowLeft size={18} className="mr-3"/> Back to Services
          </Link>
          
          <div className="hero-text inline-block bg-[#6EE7B7] text-black font-black uppercase tracking-tight text-xl md:text-3xl px-4 py-2 w-max mb-4">
             {service.title.split(' ')[0]} {/* First word highlight */}
          </div>
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] max-w-4xl">
            {service.title}
          </h1>
        </div>
      </div>

      {/* =========================================
          2. THE "DISCOVER" LAYOUT (Content Block)
      ========================================= */}
      <div className="container mx-auto px-6 max-w-7xl py-24 md:py-32">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Glowing Border Image */}
          <div className="relative p-2 rounded-2xl border border-[#6EE7B7] shadow-[0_0_30px_rgba(110,231,183,0.15)] group">
            <div className="overflow-hidden rounded-xl aspect-square md:aspect-[4/3]">
              <img 
                src={service.image} 
                alt="Service Detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
              />
            </div>
          </div>

          {/* Right: Text & Features */}
          <div className="space-y-12">
            
            {/* Overview / Discover Section */}
            <div>
              <div className="inline-block bg-[#6EE7B7] text-black font-black uppercase tracking-tight text-3xl md:text-4xl px-4 py-1 mb-6">
                DISCOVER
              </div>
              <p className="text-2xl md:text-3xl text-white leading-snug mb-6 font-medium">
                {service.shortDesc}
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed font-light">
                {service.fullDesc}
              </p>
            </div>

            {/* Features / Define Section */}
            <div ref={featuresRef} className="border-t border-neutral-800 pt-12">
              <div className="inline-block bg-[#6EE7B7] text-black font-black uppercase tracking-tight text-3xl md:text-4xl px-4 py-1 mb-8">
                DEFINE
              </div>
              <p className="text-neutral-400 mb-8 text-lg font-light">
                Strategic approach and execution deliverables included in this service:
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="feature-item flex items-center gap-4 text-neutral-200">
                    <div className="w-1.5 h-1.5 bg-[#6EE7B7] rounded-full shrink-0 shadow-[0_0_8px_#6EE7B7]"></div>
                    <span className="text-base font-medium tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          3. PREMIUM CTA STRIP
      ========================================= */}
      <div ref={ctaRef} className="container mx-auto px-6 max-w-7xl pb-24 md:pb-32">
        <div className="bg-[#111] border border-neutral-800 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#6EE7B7]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-medium text-white mb-2">Ready to initiate?</h3>
            <p className="text-neutral-400 text-lg">Let's discuss how we can execute this for your brand.</p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-[#6EE7B7] text-black font-bold tracking-widest uppercase text-sm rounded-full hover:bg-white transition-colors duration-300 group"
            >
              Get a Quote
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ServiceDetail;
