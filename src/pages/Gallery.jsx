// import React, { useState } from 'react';
// import { portfolioData } from '../data';
// import { X, ZoomIn } from 'lucide-react';

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div className="bg-white min-h-screen pb-20">
//       {/* Header */}
//       <div className="bg-gray-900 py-24 text-center">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Gallery</h1>
//           <p className="text-gray-400 max-w-xl mx-auto">
//              A visual journey through our executions.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-12">
//         {/* Gallery Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {portfolioData.map((item) => (
//             <div 
//               key={item.id} 
//               className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
//               onClick={() => setSelectedImage(item.src)}
//             >
//               <img 
//                 src={item.src} 
//                 alt="Gallery Item" 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
//                 <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" size={32} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button 
//             className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
//             onClick={() => setSelectedImage(null)}
//           >
//             <X size={40} />
//           </button>
//           <img 
//             src={selectedImage} 
//             alt="Full view" 
//             className="max-h-[90vh] max-w-full rounded-md shadow-2xl" 
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;


import React, { useState, useLayoutEffect, useRef } from 'react';
import { portfolioData } from '../data';
import { X, ZoomIn } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    // gsap.context() is the React best-practice. It ensures all animations 
    // run smoothly and cleans them up perfectly to avoid double-firing bugs.
    let ctx = gsap.context(() => {
      
      // ==========================================
      // DESKTOP: Right Curtain Reveal (Row 1)
      // ==========================================
      gsap.utils.toArray('.desktop-anim-right').forEach(el => {
        const imgContent = el.querySelector('.img-content');
        
        // 1. The Curtain (Outer Container)
        gsap.fromTo(el, 
          { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }, // Clipped entirely to the left
          { 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Fully revealed
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1.2,
            }
          }
        );

        // 2. The Slide In (Inner Image moves right and settles into place)
        gsap.fromTo(imgContent,
          { xPercent: -20, scale: 1.15 },
          {
            xPercent: 0, scale: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1.2,
            }
          }
        );
      });

      // ==========================================
      // DESKTOP: Left Curtain Reveal (Row 3)
      // ==========================================
      gsap.utils.toArray('.desktop-anim-left').forEach(el => {
        const imgContent = el.querySelector('.img-content');

        // 1. The Curtain
        gsap.fromTo(el, 
          { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }, // Clipped entirely to the right
          { 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1.2,
            }
          }
        );

        // 2. The Slide In (Inner Image moves left and settles into place)
        gsap.fromTo(imgContent,
          { xPercent: 20, scale: 1.15 },
          {
            xPercent: 0, scale: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1.2,
            }
          }
        );
      });

      // ==========================================
      // MOBILE: Vertical Curtain Reveal
      // ==========================================
      gsap.utils.toArray('.mobile-anim').forEach(el => {
        const imgContent = el.querySelector('.img-content');
        
        gsap.fromTo(el, 
          { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }, // Clipped to bottom
          { 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1,
            }
          }
        );

        gsap.fromTo(imgContent,
          { yPercent: 20, scale: 1.1 },
          {
            yPercent: 0, scale: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1,
            }
          }
        );
      });

    }, galleryRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  // Complex Grid Layout Generator based on your requirements
  const getGridClasses = (index) => {
    const dCycle = index % 10; // 10-image cycle for Desktop
    const mCycle = index % 3;  // 3-image cycle for Mobile

    let classes = "group relative overflow-hidden bg-black aspect-[4/5] md:aspect-square cursor-pointer ";

    // --- Mobile Layout Logic ---
    if (mCycle === 0) classes += "col-span-12 mobile-anim ";     // 1 Image (Animated)
    else classes += "col-span-6 ";                               // 2 Images (Static)

    // --- Desktop Layout Logic ---
    if (dCycle === 0) classes += "md:col-span-6 ";                             // Row 1: Left Image (Static)
    else if (dCycle === 1) classes += "md:col-span-6 desktop-anim-right ";     // Row 1: Right Image (Animates from Left)
    else if (dCycle >= 2 && dCycle <= 4) classes += "md:col-span-4 ";          // Row 2: 3 Images (Static)
    else if (dCycle === 5) classes += "md:col-span-6 desktop-anim-left ";      // Row 3: Left Image (Animates from Right)
    else if (dCycle === 6) classes += "md:col-span-6 ";                        // Row 3: Right Image (Static)
    else if (dCycle >= 7 && dCycle <= 9) classes += "md:col-span-4 ";          // Row 4: 3 Images (Static)

    return classes;
  };

  return (
    <div className="bg-black min-h-screen pb-20 font-sans selection:bg-[#2eaff0] selection:text-black">
      
      {/* =========================================
          HERO SECTION 
      ========================================= */}
      <div className="relative bg-[#050505] pt-32 pb-24 text-center border-b border-neutral-900 overflow-hidden">
        {/* Dynamic Light Background */}
        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2eaff0]/20 via-black to-black pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-[#2eaff0] font-bold tracking-widest uppercase text-sm mb-4 block">
            Visual Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Our Gallery
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-light">
            A curated showcase of our most impactful executions and unforgettable live events.
          </p>
        </div>
      </div>

      {/* =========================================
          GALLERY GRID 
      ========================================= */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24" ref={galleryRef}>
        <div className="grid grid-cols-12 gap-2 md:gap-4">
          {portfolioData.map((item, index) => (
            <div 
              key={item.id} 
              className={getGridClasses(index)}
              onClick={() => setSelectedImage(item.src)}
            >
              {/* Inner wrapper handles the image slide animation */}
              <div className="img-content w-full h-full relative">
                <img 
                  src={item.src} 
                  alt={`Execution ${index + 1}`} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/20 transition-all duration-500 mix-blend-overlay z-10"></div>
                
                {/* Magnify Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="bg-black/50 backdrop-blur-md p-4 rounded-full text-[#2eaff0] opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 border border-[#2eaff0]/30 shadow-[0_0_20px_rgba(46,175,240,0.3)]">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          PREMIUM LIGHTBOX MODAL
      ========================================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-xl transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-[#2eaff0] transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/10 hover:border-[#2eaff0]/50 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          {/* Expanded Image */}
          <div className="relative max-w-7xl max-h-[90vh] w-full flex justify-center items-center">
             <img 
              src={selectedImage} 
              alt="Full view" 
              className="max-h-[90vh] max-w-full rounded-lg shadow-[0_0_50px_rgba(0,0,0,1)] object-contain border border-neutral-800" 
              onClick={(e) => e.stopPropagation()} // Prevents clicking the image from closing the modal
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
