

// import React, { useRef, useEffect } from 'react';
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from 'react-router-dom';
// import { ArrowRight, PlayCircle } from 'lucide-react';
// import { portfolioData } from '../data';

// gsap.registerPlugin(ScrollTrigger);

// const WorkSlider = () => {
//   // Take first 10 images for the portfolio display
//   const sliderImages = portfolioData.slice(0, 10);
  
//   // Refs for GSAP Desktop Animation
//   const sectionRef = useRef(null);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     // GSAP MatchMedia ensures the scroll pin ONLY happens on laptops/desktops
//     let ctx = gsap.matchMedia();

//     ctx.add("(min-width: 1024px)", () => {
//       const section = sectionRef.current;
//       const scrollContainer = scrollContainerRef.current;
      
//       // Calculate total scroll distance based on content width
//       const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

//       gsap.to(scrollContainer, {
//         x: -scrollWidth,
//         ease: "none",
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: () => `+=${scrollWidth + 1000}`, // Adding 1000 smooths the scroll speed
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });
//     });

//     return () => ctx.revert(); // Clean up on unmount/resize
//   }, []);

//   return (
//     <section ref={sectionRef} className="bg-[#0a0a0a] overflow-hidden relative border-t border-neutral-900">
      
//       {/* =========================================
//           DESKTOP VIEW (GSAP Horizontal Scroll)
//           Hidden on mobile, visible on lg screens
//       ========================================= */}
//       <div 
//         ref={scrollContainerRef} 
//         className="hidden lg:flex h-screen items-center w-max"
//       >
//         {/* Intro Block */}
//         <div className="w-[40vw] shrink-0 pl-20 z-10">
//           <span className="text-[#2eaff0] font-bold tracking-widest text-xs uppercase mb-4 block">
//             Our Portfolio
//           </span>
//           <h2 className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight">
//             Recent <br /> Executions
//           </h2>
//           <Link to="/gallery" className="mt-12 inline-flex items-center text-gray-400 hover:text-[#2eaff0] font-bold tracking-widest uppercase text-sm transition-colors group">
//             View Full Gallery <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
//           </Link>
//         </div>

//         {/* Staggered Editorial Cards */}
//         <div className="flex gap-20 pr-[20vw]">
//           {sliderImages.map((item, index) => (
//             <div 
//               key={item.id} 
//               className={`relative w-[40vw] xl:w-[35vw] h-[70vh] flex-shrink-0 group ${
//                 index % 2 === 0 ? "-mt-16" : "mt-32"
//               }`}
//             >
//               <div className="w-full h-full overflow-hidden shadow-2xl border border-neutral-800 rounded-lg bg-black">
//                 <img 
//                   src={item.src || item.image} 
//                   alt="Portfolio Work" 
//                   // REMOVED grayscale. Image will always be in full color.
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
//                 />
//                 <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/10 transition-colors duration-500 z-10 mix-blend-overlay"></div>
//               </div>
              
//               {/* Minimalist Overlay Text */}
//               <div className="absolute top-1/2 -left-12 -translate-y-1/2 flex items-center gap-4 z-20 pointer-events-none">
//                 {/* Number colored in your theme blue */}
//                 <span className="text-3xl font-black tracking-widest text-[#2eaff0] drop-shadow-md">
//                   0{index + 1}/
//                 </span>
//                 <span className="text-xl font-bold tracking-widest uppercase text-transparent drop-shadow-md" style={{ WebkitTextStroke: '1px white' }}>
//                   {item.category || "Projects"}
//                 </span>
//               </div>
              
//               {item.type === 'video' && (
//                 <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md p-3 rounded-full text-[#2eaff0] border border-[#2eaff0]/30 z-20 shadow-[0_0_15px_rgba(46,175,240,0.2)] cursor-pointer hover:scale-110 transition-transform">
//                   <PlayCircle size={24} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* =========================================
//           MOBILE / TABLET VIEW (Vertical Stack)
//           Visible on mobile, hidden on lg screens
//       ========================================= */}
//       <div className="block lg:hidden py-24 px-6 bg-[#0a0a0a]">
        
//         {/* Mobile Header */}
//         <div className="mb-16">
//           <span className="text-[#2eaff0] font-bold tracking-widest text-xs uppercase mb-4 block">Our Portfolio</span>
//           <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight">Recent Executions</h2>
//         </div>

//         {/* Vertically Stacked Images */}
//         <div className="flex flex-col gap-10">
//           {sliderImages.map((item, index) => (
//             <Link to="/gallery" key={item.id} className="block relative w-full aspect-[4/5] bg-black border border-neutral-800 rounded-xl group overflow-hidden">
              
//               <img 
//                 src={item.src || item.image} 
//                 alt="Portfolio Work" 
//                 // REMOVED grayscale. Image will always be in full color.
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
//                 loading="lazy" 
//               />
              
//               {/* Dark Gradient for Text Legibility */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
              
//               {/* Subtle Blue Hover Overlay */}
//               <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/20 transition-colors duration-500 z-10 mix-blend-overlay"></div>

//               {/* Bottom Left Text */}
//               <div className="absolute bottom-8 left-8 text-white z-20">
//                 <h3 className="text-2xl font-bold tracking-wide group-hover:text-white transition-colors">
//                   {/* Number colored in your theme blue */}
//                   <span className="text-[#2eaff0] mr-2 text-xl">0{index + 1}.</span> 
//                   {item.title || `Execution`}
//                 </h3>
//                 <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 mt-3">
//                   {item.category || "Event Production"}
//                 </p>
//               </div>

//               {/* Bottom Right Thin Arrow */}
//               <div className="absolute bottom-8 right-8 text-[#2eaff0] z-20 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
//                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
//                   <line x1="5" y1="12" x2="19" y2="12"></line>
//                   <polyline points="12 5 19 12 12 19"></polyline>
//                 </svg>
//               </div>

//             </Link>
//           ))}
//         </div>
        
//         {/* Mobile View All Button */}
//         <div className="mt-16">
//           <Link to="/gallery" className="block w-full py-5 bg-transparent border border-neutral-700 text-center text-sm tracking-widest uppercase font-bold text-white rounded-full hover:border-[#2eaff0] hover:text-[#2eaff0] transition-colors shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(46,175,240,0.15)]">
//             View All Projects
//           </Link>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default WorkSlider;






import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { portfolioData } from '../data';

gsap.registerPlugin(ScrollTrigger);

const WorkSlider = () => {
  // Take first 10 images for the portfolio display
  const sliderImages = portfolioData.slice(0, 10);
  
  // Refs for GSAP Desktop Animation
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // GSAP MatchMedia ensures the scroll pin ONLY happens on laptops/desktops
    let ctx = gsap.matchMedia();

    ctx.add("(min-width: 1024px)", () => {
      const section = sectionRef.current;
      const scrollContainer = scrollContainerRef.current;
      
      // Calculate total scroll distance based on content width
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

      gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth + 1000}`, // Adding 1000 smooths the scroll speed
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert(); // Clean up on unmount/resize
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0a0a0a] overflow-hidden relative border-t border-neutral-900">
      
      {/* =========================================
          DESKTOP VIEW (GSAP Horizontal Scroll)
          Hidden on mobile, visible on lg screens
      ========================================= */}
      <div 
        ref={scrollContainerRef} 
        className="hidden lg:flex h-screen items-center w-max"
      >
        {/* Intro Block */}
        <div className="w-[40vw] shrink-0 pl-20 z-10">
          <span className="text-[#2eaff0] font-bold tracking-widest text-xs uppercase mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] tracking-tight">
            Recent <br /> Executions
          </h2>
          <Link to="/gallery" className="mt-12 inline-flex items-center text-gray-400 hover:text-[#2eaff0] font-bold tracking-widest uppercase text-sm transition-colors group">
            View Full Gallery <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Staggered Editorial Cards */}
        <div className="flex gap-20 pr-[20vw]">
          {sliderImages.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative w-[40vw] xl:w-[35vw] h-[70vh] flex-shrink-0 group ${
                index % 2 === 0 ? "-mt-16" : "mt-32"
              }`}
            >
              <div className="w-full h-full overflow-hidden shadow-2xl border border-neutral-800 rounded-lg bg-black">
                <img 
                  src={item.src || item.image} 
                  alt="Portfolio Work" 
                  // REMOVED grayscale. Image will always be in full color.
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/10 transition-colors duration-500 z-10 mix-blend-overlay"></div>
              </div>
              
              {/* Minimalist Overlay Text */}
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 flex items-center gap-4 z-20 pointer-events-none">
                {/* Number colored in your theme blue */}
                <span className="text-3xl font-black tracking-widest text-[#2eaff0] drop-shadow-md">
                  0{index + 1}/
                </span>
                <span className="text-xl font-bold tracking-widest uppercase text-transparent drop-shadow-md" style={{ WebkitTextStroke: '1px white' }}>
                  {item.category || "Projects"}
                </span>
              </div>
              
              {item.type === 'video' && (
                <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md p-3 rounded-full text-[#2eaff0] border border-[#2eaff0]/30 z-20 shadow-[0_0_15px_rgba(46,175,240,0.2)] cursor-pointer hover:scale-110 transition-transform">
                  <PlayCircle size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          MOBILE / TABLET VIEW (Vertical Stack)
          Visible on mobile, hidden on lg screens
      ========================================= */}
      <div className="block lg:hidden py-20 px-4 md:px-6 bg-[#050505]">
        
        {/* Mobile Header */}
        <div className="mb-10">
          <span className="text-[#2eaff0] font-bold tracking-widest text-xs uppercase mb-3 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight">Recent Executions</h2>
        </div>

        {/* Vertically Stacked Images (Matched to Reference Design) */}
        <div className="flex flex-col gap-6">
          {sliderImages.map((item, index) => (
            <Link to="/gallery" key={item.id} className="block relative w-full aspect-[4/5] bg-black group overflow-hidden">
              
              <img 
                src={item.src || item.image} 
                alt="Portfolio Work" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy" 
              />
              
              {/* Subtle Bottom Gradient for Text Legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              
              {/* Subtle Blue Hover Overlay */}
              <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/20 transition-colors duration-500 z-10 mix-blend-overlay"></div>

              {/* Bottom Left Text (Clean & Minimal) */}
              <div className="absolute bottom-6 left-6 text-white z-20">
                <h3 className="text-xl md:text-2xl font-medium tracking-wide">
                  {item.title || `Execution ${index + 1}`}
                </h3>
                <p className="text-sm font-light text-neutral-300 mt-1">
                  {item.category || "Event Production"}
                </p>
              </div>

              {/* Bottom Right Ultra-Thin Diagonal Arrow */}
              <div className="absolute bottom-6 right-6 text-white z-20 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                {/* Custom SVG for the exact thin architectural arrow */}
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="square" strokeLinejoin="miter">
                  <line x1="6" y1="18" x2="18" y2="6"></line>
                  <polyline points="8 6 18 6 18 16"></polyline>
                </svg>
              </div>

            </Link>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12">
          <Link to="/gallery" className="block w-full py-5 bg-transparent border border-neutral-700 text-center text-sm tracking-widest uppercase font-bold text-white rounded-full hover:border-[#2eaff0] hover:text-[#2eaff0] transition-colors shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(46,175,240,0.15)]">
            View All Projects
          </Link>
        </div>
      </div>

    </section>
  );
};

export default WorkSlider;
