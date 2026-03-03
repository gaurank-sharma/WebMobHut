// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { servicesData } from '../data';

// const Services = () => {
//   return (
//     <div className="py-20">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-heading font-bold mb-4">Our Services</h1>
//           <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive solutions for retail, corporate, and social engagements.</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {servicesData.map((service) => (
//             <div key={service.id} className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
//               <div className="h-64 overflow-hidden">
//                 <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
//               </div>
//               <div className="p-8 flex flex-col flex-grow">
//                 <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
//                 <p className="text-gray-600 mb-6 flex-grow">{service.shortDesc}</p>
//                 <Link 
//                   to={`/services/${service.id}`} 
//                   className="inline-flex items-center text-blue-600 font-bold hover:underline mt-auto"
//                 >
//                   View Details <ArrowRight size={18} className="ml-2" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);
  // Initialize the refs array with nulls
  serviceRefs.current = new Array(servicesData.length).fill(null);

  useEffect(() => {
    let ctx = gsap.matchMedia();

    ctx.add("(min-width: 320px)", () => {
      // 1. Animate the main header
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // 2. Animate each service block as it scrolls into view
      serviceRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(el,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%", // Triggers when the top of the element hits 85% of viewport height
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* =========================================
            HEADER SECTION
        ========================================= */}
        <div ref={headerRef} className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tight leading-[0.9] mb-8">
            Experience <br />
            <span className="text-[#6EE7B7]">Solutions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide">
            PHYSICAL, VIRTUAL OR HYBRID <br className="hidden md:block"/>
            <span className="text-white font-medium">WE'VE GOT YOU COVERED!</span>
          </p>
        </div>

        {/* =========================================
            SERVICES LIST (Alternating Layout)
        ========================================= */}
        <div className="space-y-32 md:space-y-48">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                ref={el => serviceRefs.current[index] = el}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                
                {/* Image Side (With Glowing Neon Border from Mockup) */}
                <div className="w-full lg:w-1/2">
                  {/* Outer container creating the glowing outline effect */}
                  <div className="relative p-2 rounded-2xl border border-[#6EE7B7] shadow-[0_0_30px_rgba(110,231,183,0.15)] group">
                    <div className="overflow-hidden rounded-xl h-[350px] md:h-[500px]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  
                  {/* Highlighted Title Block */}
                  <div>
                    <div className="inline-block bg-[#6EE7B7] text-black font-black uppercase tracking-tight text-3xl md:text-5xl px-4 py-2 mb-6">
                      {service.title.split(' ')[0]} {/* Takes the first word to make it massive */}
                    </div>
                    {/* The rest of the title */}
                    <h3 className="text-2xl md:text-4xl font-medium text-white mb-6">
                       {service.title.substring(service.title.indexOf(' ') + 1)}
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-neutral-300 leading-snug mb-4">
                      {service.shortDesc}
                    </p>
                    <p className="text-neutral-500 leading-relaxed font-light">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Bullet Points List (Mimicking the fine dot design) */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-neutral-300 mt-8 border-t border-neutral-800 pt-8">
                    {service.features?.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#6EE7B7] rounded-full shrink-0"></div>
                        <span className="text-sm font-medium tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Call To Action */}
                  <div className="pt-8">
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center text-white font-bold tracking-widest uppercase text-sm hover:text-[#6EE7B7] transition-colors group"
                    >
                      Explore Service
                      <span className="ml-4 p-3 rounded-full border border-neutral-700 group-hover:border-[#6EE7B7] group-hover:bg-[#6EE7B7] group-hover:text-black transition-all duration-300">
                        <ArrowRight size={20} />
                      </span>
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Services;
