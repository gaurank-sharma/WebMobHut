
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import { ArrowRight, PlayCircle } from 'lucide-react';
// import { portfolioData } from '../data';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// const WorkSlider = () => {
//   // Take first 10 images for the slider
//   const sliderImages = portfolioData.slice(0, 10);

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
//         <div>
//           <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Portfolio</span>
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Recent Executions</h2>
//         </div>
//         <Link to="/gallery" className="hidden md:flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors">
//           View Full Gallery <ArrowRight size={20} className="ml-2" />
//         </Link>
//       </div>

//       {/* FIX: Added 'container mx-auto px-6' to align first image with text. 
//          The Swiper has '!overflow-visible' to let images bleed to the right edge. 
//       */}
//       <div className="container mx-auto px-6">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1.2}
//           centeredSlides={false}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true, dynamicBullets: true }}
//           breakpoints={{
//             640: { slidesPerView: 2.2 },
//             1024: { slidesPerView: 3.2 },
//             1280: { slidesPerView: 3.5 },
//           }}
//           className="pb-16 !overflow-visible" 
//         >
//           {sliderImages.map((item) => (
//             <SwiperSlide key={item.id} className="h-full">
//               <div className="group relative rounded-2xl overflow-hidden h-[350px] md:h-[450px] shadow-lg cursor-grab active:cursor-grabbing">
//                 <img 
//                   src={item.src} 
//                   alt="Portfolio Work" 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   loading="lazy"
//                 />
                
//                 {/* Gradient Overlay for Text Visibility */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

//                 {/* Video Icon if needed */}
//                 {item.type === 'video' && (
//                   <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white border border-white/30">
//                     <PlayCircle size={20} />
//                   </div>
//                 )}

//                 {/* Card Content */}
//                 <div className="absolute bottom-0 left-0 p-6 w-full">
//                   <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-bold tracking-wider uppercase rounded-full mb-3">
//                     {item.category}
//                   </span>
//                   <p className="text-white font-medium text-lg md:text-xl line-clamp-1">
//                     Event Execution {item.id}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
      
//       {/* Mobile View All Button */}
//       <div className="container mx-auto px-6 mt-8 md:hidden">
//          <Link to="/gallery" className="block w-full py-4 border border-gray-200 text-center rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">
//             View All Projects
//          </Link>
//       </div>
//     </section>
//   );
// };

// export default WorkSlider;



// import React, { useRef, useEffect } from 'react';
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import { ArrowRight, PlayCircle } from 'lucide-react';
// import { portfolioData } from '../data';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// gsap.registerPlugin(ScrollTrigger);

// const WorkSlider = () => {
//   // Take first 10 images for the slider
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
//     <section ref={sectionRef} className="bg-[#ebebeb] overflow-hidden relative">
      
//       {/* =========================================
//           DESKTOP VIEW (GSAP Horizontal Scroll)
//       ========================================= */}
//       <div 
//         ref={scrollContainerRef} 
//         className="hidden lg:flex h-screen items-center w-max"
//       >
//         {/* Intro Block (Sticky on the left before scrolling) */}
//         <div className="w-[40vw] shrink-0 pl-20 z-10">
//           <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Portfolio</span>
//           <h2 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 mt-2 leading-tight">
//             Recent <br /> Executions
//           </h2>
//           <Link to="/gallery" className="mt-8 inline-flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors text-lg">
//             View Full Gallery <ArrowRight size={24} className="ml-2" />
//           </Link>
//         </div>

//         {/* Staggered Editorial Cards */}
//         <div className="flex gap-20 pr-[20vw]">
//           {sliderImages.map((item, index) => (
//             <div 
//               key={item.id} 
//               // Alternating margins create the staggered up/down look from your screenshot
//               className={`relative w-[40vw] xl:w-[35vw] h-[70vh] flex-shrink-0 group ${
//                 index % 2 === 0 ? "-mt-16" : "mt-32"
//               }`}
//             >
//               {/* Image Container */}
//               <div className="w-full h-full overflow-hidden shadow-2xl">
//                 <img 
//                   src={item.src} 
//                   alt="Portfolio Work" 
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
//                 />
//               </div>
              
//               {/* Minimalist Overlay Text (e.g., "02/ Projects") */}
//               <div className="absolute top-1/2 -left-12 -translate-y-1/2 flex items-center gap-4 mix-blend-difference text-white z-20 pointer-events-none">
//                 <span className="text-xl font-medium tracking-wide">
//                   0{index + 1}/
//                 </span>
//                 <span className="text-xl font-medium tracking-wide">
//                   {item.category || "Projects"}
//                 </span>
//               </div>
              
//               {/* Video Icon if applicable */}
//               {item.type === 'video' && (
//                 <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30 z-20 shadow-lg cursor-pointer">
//                   <PlayCircle size={24} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* =========================================
//           MOBILE / TABLET VIEW (Swiper Slider)
//       ========================================= */}
//       <div className="block lg:hidden py-24 bg-white">
//         <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
//           <div>
//             <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Portfolio</span>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Recent Executions</h2>
//           </div>
//         </div>

//         <div className="container mx-auto px-6">
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             spaceBetween={20}
//             slidesPerView={1.2}
//             loop={true}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             pagination={{ clickable: true, dynamicBullets: true }}
//             breakpoints={{ 640: { slidesPerView: 2.2 } }}
//             className="pb-16 !overflow-visible" 
//           >
//             {sliderImages.map((item) => (
//               <SwiperSlide key={item.id} className="h-full">
//                 <div className="group relative rounded-2xl overflow-hidden h-[350px] md:h-[450px] shadow-lg">
//                   <img 
//                     src={item.src} 
//                     alt="Portfolio Work" 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                     loading="lazy" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
//                   {item.type === 'video' && (
//                     <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white border border-white/30">
//                       <PlayCircle size={20} />
//                     </div>
//                   )}

//                   <div className="absolute bottom-0 left-0 p-6 w-full">
//                     <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-bold tracking-wider uppercase rounded-full mb-3">
//                       {item.category || "Event"}
//                     </span>
//                     <p className="text-white font-medium text-lg md:text-xl line-clamp-1">
//                       Event Execution {item.id}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
        
//         {/* Mobile View All Button */}
//         <div className="container mx-auto px-6 mt-8">
//           <Link to="/gallery" className="block w-full py-4 border border-gray-200 text-center rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">
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
import { ArrowRight, PlayCircle, ArrowUpRight } from 'lucide-react';
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
    <section ref={sectionRef} className="bg-[#ebebeb] overflow-hidden relative">
      
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
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Portfolio</span>
          <h2 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 mt-2 leading-tight">
            Recent <br /> Executions
          </h2>
          <Link to="/gallery" className="mt-8 inline-flex items-center text-gray-600 hover:text-black font-medium transition-colors text-lg">
            View Full Gallery <ArrowRight size={24} className="ml-2" />
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
              <div className="w-full h-full overflow-hidden shadow-2xl">
                <img 
                  src={item.src || item.image} 
                  alt="Portfolio Work" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 flex items-center gap-4 mix-blend-difference text-white z-20 pointer-events-none">
                <span className="text-xl font-medium tracking-wide">
                  0{index + 1}/
                </span>
                <span className="text-xl font-medium tracking-wide">
                  {item.category || "Projects"}
                </span>
              </div>
              
              {item.type === 'video' && (
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30 z-20 shadow-lg cursor-pointer">
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
      <div className="block lg:hidden py-16 px-6">
        
        {/* Mobile Header */}
        <div className="mb-12">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Portfolio</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2 leading-tight">Recent Executions</h2>
        </div>

        {/* Vertically Stacked Images */}
        <div className="flex flex-col gap-8">
          {sliderImages.map((item, index) => (
            <Link to="/gallery" key={item.id} className="block relative w-full aspect-[4/5] bg-gray-200 group overflow-hidden">
              
              <img 
                src={item.src || item.image} 
                alt="Portfolio Work" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                loading="lazy" 
              />
              
              {/* Dark Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

              {/* Bottom Left Text */}
              <div className="absolute bottom-6 left-6 text-white z-10">
                <h3 className="text-xl font-medium tracking-wide">
                  {item.title || `Event Execution ${item.id}`}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  {item.category || "Photography, Event"}
                </p>
              </div>

              {/* Bottom Right Thin Arrow */}
              <div className="absolute bottom-6 right-6 text-white z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                {/* Custom SVG to match the very thin, sharp arrow in your screenshot */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="square" strokeLinejoin="miter">
                  <line x1="7" y1="17" x2="18" y2="6"></line>
                  <polyline points="8 6 18 6 18 16"></polyline>
                </svg>
              </div>

            </Link>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12">
          <Link to="/gallery" className="block w-full py-4 border border-gray-400 text-center text-sm tracking-widest uppercase font-semibold text-gray-800 hover:bg-gray-200 transition-colors">
            View All Projects
          </Link>
        </div>
      </div>

    </section>
  );
};

export default WorkSlider;
