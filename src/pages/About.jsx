

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const textAnimSectionRef = useRef(null);
//   const fanSectionRef = useRef(null);
//   const fanRef = useRef(null); // We will attach this directly to the SVG now

//   useEffect(() => {
//     let ctx = gsap.matchMedia();

//     ctx.add("(min-width: 320px)", () => {
//       // 1. TRANSFORMATIVE CREATIVITY (Sliding Text)
//       gsap.to(".text-top", {
//         xPercent: 60, 
//         ease: "none",
//         scrollTrigger: {
//           trigger: textAnimSectionRef.current,
//           start: "top bottom", 
//           end: "bottom top",
//           scrub: 0.1, 
//         }
//       });

//       gsap.to(".text-bottom", {
//         xPercent: -60, 
//         ease: "none",
//         scrollTrigger: {
//           trigger: textAnimSectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 0.1,
//         }
//       });

//       // 2. SPINNING FAN ANIMATION (Perfectly Centered)
//       gsap.to(fanRef.current, {
//         rotation: 360,
//         transformOrigin: "50% 50%", // Forces exact dead-center rotation
//         ease: "none",
//         scrollTrigger: {
//           trigger: fanSectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1, 
//         }
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      
//       {/* =========================================
//           1. HERO VIDEO SECTION
//       ========================================= */}
//       <section className="relative w-full h-[85vh] bg-neutral-900 rounded-b-[4rem] md:rounded-b-[8rem] overflow-hidden shadow-2xl z-10">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <p className="text-neutral-500 font-medium tracking-widest uppercase">Hero Video Background Plays Here</p>
//         </div>
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center pl-2 cursor-pointer pointer-events-auto hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="black"><path d="M5 3l14 9-14 9V3z"/></svg>
//            </div>
//         </div>
//       </section>

//       {/* =========================================
//           2. EDITORIAL "WHO WE ARE" SECTION
//       ========================================= */}
//       <section className="py-32 px-6 container mx-auto max-w-7xl z-0">
        
//         {/* Massive Tagline Statement */}
//         <div className="mb-32">
//           <span className="text-[#2eaff0] font-bold tracking-widest uppercase text-sm mb-6 block">Who We Are</span>
//           <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight">
//             Precision, creativity, and <br className="hidden md:block" />
//             <span className="text-neutral-500 italic">operational excellence.</span>
//           </h2>
//         </div>

//         {/* 12 Years Asymmetrical Grid */}
//         <div className="grid md:grid-cols-12 gap-12 items-start mb-32 border-t border-neutral-800 pt-20">
//           <div className="md:col-span-4 flex flex-col">
//             <h3 className="text-[12rem] leading-none font-black text-white -mt-10 tracking-tighter">
//               12
//             </h3>
//             <p className="text-2xl font-bold uppercase tracking-widest text-neutral-400 mt-2">
//               Years of <br /> Excellence
//             </p>
//           </div>
          
//           <div className="md:col-span-8 md:pl-12 lg:pl-24 space-y-8">
//             <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug text-neutral-200">
//               WebMobHut Pvt Ltd is an event management company specializing in mall decorations, retail activations, and corporate events across shopping complexes, marketplaces, and commercial spaces.
//             </p>
//             <p className="text-lg md:text-xl font-normal leading-relaxed text-neutral-500 max-w-2xl">
//               With a strong focus on brand visibility, consumer engagement, and flawless execution, we create experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
//             </p>
//           </div>
//         </div>

//         {/* Leadership Callout */}
//         <div className="flex justify-end">
//           <div className="w-full md:w-2/3 lg:w-1/2 bg-neutral-950 p-10 md:p-16 rounded-3xl border border-neutral-900 shadow-2xl relative overflow-hidden group">
//             <div className="absolute top-0 left-0 w-2 h-full bg-[#2eaff0]"></div>
//             <span className="text-neutral-500 font-bold tracking-widest uppercase text-xs mb-4 block">Leadership</span>
//             <h3 className="text-4xl md:text-5xl font-medium text-white mb-6">
//               Led by Viraj Ratra
//             </h3>
//             <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
//               A dedicated professional with over 12 years of hands-on experience in the event management industry, driving execution without compromise.
//             </p>
//           </div>
//         </div>

//       </section>

//       {/* =========================================
//           3. TRANSFORMATIVE CREATIVITY 
//       ========================================= */}
//       <section 
//         ref={textAnimSectionRef} 
//         className="relative h-[60vh] md:h-screen w-full flex flex-col justify-center items-center py-20 overflow-hidden bg-black"
//       >
//         <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none">
//           <h2 className="text-top text-[18vw] md:text-[14vw] font-black text-white uppercase leading-none whitespace-nowrap -ml-[40%]">
//             Transformative
//           </h2>
//           <h2 className="text-bottom text-[18vw] md:text-[14vw] font-black text-white uppercase leading-none whitespace-nowrap -mr-[40%]">
//             Creativity
//           </h2>
//         </div>

//         <div className="relative z-10 w-56 h-56 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
//           <img 
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
//             alt="Creativity" 
//             className="w-full h-full object-cover opacity-80" 
//           />
//         </div>

//         <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none">
//           <h2 
//             className="text-top text-[18vw] md:text-[14vw] font-black uppercase leading-none whitespace-nowrap text-transparent -ml-[40%]" 
//             style={{ WebkitTextStroke: '2px white' }}
//           >
//             Transformative
//           </h2>
//           <h2 
//             className="text-bottom text-[18vw] md:text-[14vw] font-black uppercase leading-none whitespace-nowrap text-transparent -mr-[40%]" 
//             style={{ WebkitTextStroke: '2px white' }}
//           >
//             Creativity
//           </h2>
//         </div>
//       </section>

//       {/* =========================================
//           4. IMPACTS PEOPLE (Fixed Fan Animation)
//       ========================================= */}
//       <section ref={fanSectionRef} className="py-32 md:py-48 px-6 container mx-auto max-w-7xl">
//         <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          
//           {/* Left: Spinning Geometric Fan */}
//           <div className="flex justify-center md:justify-start">
//             <div className="w-72 h-72 md:w-[500px] md:h-[500px]">
//               {/* fanRef moved directly to the SVG for flawless 50% 50% axis rotation */}
//               <svg ref={fanRef} viewBox="0 0 100 100" className="w-full h-full fill-white drop-shadow-2xl">
//                 <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" />
//                 <path d="M 50 50 L 95 50 A 45 45 0 0 1 50 95 Z" />
//                 <path d="M 50 50 L 50 95 A 45 45 0 0 1 5 50 Z" />
//                 <path d="M 50 50 L 5 50 A 45 45 0 0 1 50 5 Z" />
//               </svg>
//             </div>
//           </div>

//           {/* Right: Typography Block */}
//           <div className="space-y-6">
//             <span className="text-sm md:text-base font-bold uppercase tracking-widest text-neutral-500">
//               Transformative Creativity
//             </span>
//             <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.85] text-white tracking-tighter">
//               Impacts <br /> People
//             </h2>
//             <p className="text-xl md:text-2xl text-neutral-300 max-w-lg mt-8 mb-12 leading-relaxed">
//               Ideas that move people by generating powerful cultural conversation and inviting people to join in.
//             </p>
//             <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-[#2eaff0] transition-colors duration-300">
//               View Work
//             </button>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default About;






import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroSectionRef = useRef(null);
  const fanSectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. MASSIVE SLIDING TEXT (Behind and In Front of Video)
      gsap.to(".text-top", {
        xPercent: 30, 
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top", 
          end: "bottom top",
          scrub: 0.5, 
        }
      });

      gsap.to(".text-bottom", {
        xPercent: -30, 
        ease: "none",
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        }
      });

      // 2. THE PERFECT 1/4 TO FULL PINWHEEL UNFOLD
      // Initial State: All petals are stacked at 180 degrees (Bottom-Left quadrant)
      gsap.set(".petal", { rotation: 180 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: fanSectionRef.current,
          start: "top 75%",   // Trigger when section enters viewport
          end: "center 45%",  // Complete fanning out near the middle
          scrub: 1.5,           
        }
      });

      // Unfold animation: They fan out from the 180deg position into a full cross
      tl.to(".petal-1", { rotation: 0, duration: 1, ease: "power2.inOut" }, 0)   // Swings to Top-Right
        .to(".petal-2", { rotation: 90, duration: 1, ease: "power2.inOut" }, 0)  // Swings to Bottom-Right
        .to(".petal-4", { rotation: 270, duration: 1, ease: "power2.inOut" }, 0) // Swings to Top-Left
        // petal-3 naturally stays at 180deg to complete the shape

      // Slow, continuous spin of the fully assembled fan
      gsap.to(".full-fan", {
        rotation: 360,
        transformOrigin: "50px 50px",
        ease: "none",
        scrollTrigger: {
          trigger: fanSectionRef.current,
          start: "center 45%",
          end: "bottom top",
          scrub: 2,
        }
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-hidden selection:bg-[#2eaff0] selection:text-black">
      
      {/* =========================================
          SVG DEFINITIONS FOR EXACT CLIP PATHS
      ========================================= */}
      <svg width="0" height="0" className="absolute hidden">
        <defs>
          {/* EXACT geometric match to the Dentsu "Wedge" frame */}
          <clipPath id="dentsu-wedge" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.4 Q 0.5 -0.1, 1 0.4 L 0.85 1 Q 0.5 0.6, 0.15 1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* =========================================
          1. CINEMATIC HERO & TRANSFORMATIVE TEXT
      ========================================= */}
      <section ref={heroSectionRef} className="relative h-[120vh] w-full flex flex-col justify-center items-center bg-black overflow-hidden pt-20">
        
        {/* Layer 1: Solid Text (BEHIND the video) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none">
          <h2 className="text-top text-[18vw] md:text-[16vw] font-black text-white uppercase leading-[0.85] whitespace-nowrap tracking-tighter -ml-[20%]">
            Transformative
          </h2>
          <h2 className="text-bottom text-[18vw] md:text-[16vw] font-black text-white uppercase leading-[0.85] whitespace-nowrap tracking-tighter -mr-[20%]">
            Creativity
          </h2>
        </div>

        {/* Layer 2: The Wedge Video Container */}
        <div 
          className="relative z-10 w-[95%] max-w-6xl aspect-[16/9] md:aspect-[21/9] bg-neutral-900 flex justify-center items-center group cursor-pointer shadow-[0_0_100px_rgba(0,0,0,1)]"
          style={{ clipPath: "url(#dentsu-wedge)" }}
        >
          {/* Replace this with your actual <video> tag */}
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
            alt="Event Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-[#2eaff0]/10 mix-blend-overlay"></div>
          
          {/* Play Button Overlay */}
          <div className="relative z-20 w-20 h-20 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center pl-2 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="black"><path d="M5 3l14 9-14 9V3z"/></svg>
          </div>
        </div>

        {/* Layer 3: Outlined Text (IN FRONT of the video) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none">
          <h2 
            className="text-top text-[18vw] md:text-[16vw] font-black uppercase leading-[0.85] whitespace-nowrap tracking-tighter text-transparent -ml-[20%]" 
            style={{ WebkitTextStroke: '2px white' }}
          >
            Transformative
          </h2>
          <h2 
            className="text-bottom text-[18vw] md:text-[16vw] font-black uppercase leading-[0.85] whitespace-nowrap tracking-tighter text-transparent -mr-[20%]" 
            style={{ WebkitTextStroke: '2px white' }}
          >
            Creativity
          </h2>
        </div>
      </section>

      {/* =========================================
          2. DUAL-COLUMN EDITORIAL LAYOUT
      ========================================= */}
      <section className="py-32 px-6 container mx-auto max-w-7xl">
        
        {/* Row 1: Excellence */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start mb-32 border-t border-neutral-800 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              12 Years of <br className="hidden md:block"/> Excellence
            </h3>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-2xl md:text-4xl font-light leading-snug text-neutral-200">
              WebMobHut Pvt Ltd is an event management company specializing in mall decorations, retail activations, and corporate events across shopping complexes, marketplaces, and commercial spaces.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-500">
              With a strong focus on brand visibility, consumer engagement, and flawless execution, we create experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
            </p>
          </div>
        </div>

        {/* Row 2: Leadership (Black & White Portrait Style) */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start border-t border-neutral-800 pt-16">
          <div className="md:col-span-4">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#2eaff0]">
              Creative <br className="hidden md:block"/> Leaders
            </h3>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-2 gap-12 items-center">
              {/* Heavy geometric framing around portrait */}
              <div className="bg-white p-2 md:p-4 aspect-square">
                <div className="w-full h-full bg-neutral-200 overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                    alt="Viraj Ratra" 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/30 mix-blend-overlay transition-colors duration-500"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-3xl font-bold uppercase tracking-wide">Viraj Ratra</h4>
                <p className="text-[#2eaff0] font-medium tracking-widest uppercase text-sm">Managing Director</p>
                <p className="text-lg text-neutral-400 font-light leading-relaxed mt-4">
                  A dedicated professional with over 12 years of hands-on experience in the event management industry, driving execution without compromise.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================
          3. IMPACTS PEOPLE (Fan Unfold Animation)
      ========================================= */}
      <section ref={fanSectionRef} className="py-32 md:py-48 px-6 container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left: The Unfolding Pinwheel */}
          <div className="flex justify-center md:justify-start">
            <div className="w-80 h-80 md:w-[600px] md:h-[600px]">
              
              {/* SVG wrapped in a group for the final continuous rotation */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(46,175,240,0.15)] overflow-visible">
                <g className="full-fan" style={{ transformOrigin: '50px 50px' }}>
                  
                  {/* EXACT Dentsu Geometry: 
                      4 identical semi-circles whose straight edges form a cross.
                      They all start stacked at 180deg and rotate out!
                  */}
                  <path className="petal petal-1" fill="#2eaff0" d="M 50 50 L 100 50 A 25 25 0 0 0 50 50 Z" style={{ transformOrigin: '50px 50px' }} />
                  <path className="petal petal-2" fill="white" d="M 50 50 L 100 50 A 25 25 0 0 0 50 50 Z" style={{ transformOrigin: '50px 50px' }} />
                  <path className="petal petal-3" fill="white" d="M 50 50 L 100 50 A 25 25 0 0 0 50 50 Z" style={{ transformOrigin: '50px 50px' }} />
                  <path className="petal petal-4" fill="white" d="M 50 50 L 100 50 A 25 25 0 0 0 50 50 Z" style={{ transformOrigin: '50px 50px' }} />

                </g>
              </svg>

            </div>
          </div>

          {/* Right: Typography Block */}
          <div className="space-y-6">
            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-[#2eaff0]">
              Transformative Creativity
            </span>
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.85] text-white tracking-tighter">
              Impacts <br /> People
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-lg mt-8 mb-12 leading-relaxed">
              Ideas that move people by generating powerful cultural conversation and inviting people to join in.
            </p>
            <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-[#2eaff0] transition-colors duration-300">
              View Work
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
