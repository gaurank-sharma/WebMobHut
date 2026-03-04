

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
  const textAnimSectionRef = useRef(null);
  const fanSectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. TRANSFORMATIVE CREATIVITY (Sliding Text)
      gsap.to(".text-top", {
        xPercent: 50, 
        ease: "none",
        scrollTrigger: {
          trigger: textAnimSectionRef.current,
          start: "top bottom", 
          end: "bottom top",
          scrub: 0.1, 
        }
      });

      gsap.to(".text-bottom", {
        xPercent: -50, 
        ease: "none",
        scrollTrigger: {
          trigger: textAnimSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.1,
        }
      });

      // 2. THE FAN ASSEMBLY ANIMATION (1/4 to Full)
      // Initially hide petals 2, 3, and 4. Start with just petal 1.
      gsap.set(".petal-2, .petal-3, .petal-4", { opacity: 0, scale: 0.5, transformOrigin: "50% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: fanSectionRef.current,
          start: "top 75%",   // Starts animating when section enters viewport
          end: "center 40%",  // Finishes assembling as it reaches the middle
          scrub: 1,           // Smooth scroll tie-in
        }
      });

      // Animate them snapping into place one by one
      tl.to(".petal-2", { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" })
        .to(".petal-3", { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" })
        .to(".petal-4", { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" });

      // Optional: Add a slow continuous spin to the whole fan after it builds
      gsap.to(".full-fan", {
        rotation: 360,
        transformOrigin: "50% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: fanSectionRef.current,
          start: "center 40%",
          end: "bottom top",
          scrub: 1.5,
        }
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* =========================================
          SVG DEFINITIONS (For custom clip paths)
      ========================================= */}
      <svg width="0" height="0" className="absolute hidden">
        <defs>
          {/* This exact clip path creates the "Curved Petal / Arch" shape from your reference image */}
          <clipPath id="hero-wedge" clipPathUnits="objectBoundingBox">
            <path d="M 0.05 0.2 Q 0.5 -0.05 0.95 0.2 L 0.8 1 Q 0.5 0.8 0.2 1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* =========================================
          1. HERO VIDEO SECTION (Petal Shaped)
      ========================================= */}
      <section className="relative w-full pt-32 pb-20 flex justify-center items-center bg-black">
        
        {/* Container with the custom SVG Clip Path applied */}
        <div 
          className="relative w-[90%] max-w-6xl aspect-[16/9] md:aspect-[21/9] bg-neutral-900 flex justify-center items-center group cursor-pointer"
          style={{ clipPath: "url(#hero-wedge)" }}
        >
          {/* Replace this img with your actual <video> tag */}
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
            alt="Event Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-[#2eaff0]/10 mix-blend-overlay"></div>
          
          {/* Play Button exactly like the reference */}
          <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="black"><path d="M5 3l14 9-14 9V3z"/></svg>
          </div>
        </div>

      </section>

      {/* =========================================
          2. EDITORIAL "WHO WE ARE" & LEADERSHIP
      ========================================= */}
      <section className="py-24 md:py-32 px-6 container mx-auto max-w-7xl z-0">
        
        {/* Massive Tagline */}
        <div className="mb-32">
          <span className="text-[#2eaff0] font-bold tracking-widest uppercase text-sm mb-6 block">Who We Are</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white max-w-5xl">
            Precision, creativity, and <span className="text-neutral-500 italic">operational excellence.</span>
          </h2>
        </div>

        {/* 12 Years Asymmetrical Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start mb-40 border-t border-neutral-900 pt-20">
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-[8rem] md:text-[12rem] leading-none font-black text-white -mt-10 tracking-tighter">
              12
            </h3>
            <p className="text-xl font-bold uppercase tracking-widest text-[#2eaff0] mt-2">
              Years of <br /> Excellence
            </p>
          </div>
          
          <div className="md:col-span-8 md:pl-12 lg:pl-24 space-y-8">
            <p className="text-2xl md:text-3xl font-light leading-snug text-neutral-200">
              WebMobHut Pvt Ltd is an event management company specializing in mall decorations, retail activations, and corporate events across shopping complexes, marketplaces, and commercial spaces.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-500 max-w-2xl">
              With a strong focus on brand visibility, consumer engagement, and flawless execution, we create experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
            </p>
          </div>
        </div>

        {/* Beautiful Leadership Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center bg-[#050505] p-8 md:p-16 rounded-[2rem] border border-neutral-900">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <span className="inline-block px-4 py-1 border border-[#2eaff0] text-[#2eaff0] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Leadership
              </span>
              <h3 className="text-4xl md:text-6xl font-medium text-white mb-4">
                Led by <br/> Viraj Ratra
              </h3>
            </div>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              A dedicated professional with over 12 years of hands-on experience in the event management industry, driving execution without compromise.
            </p>
            <button className="text-white border-b border-[#2eaff0] pb-1 uppercase tracking-widest text-sm font-bold hover:text-[#2eaff0] transition-colors">
              Read Full Bio
            </button>
          </div>

          {/* Premium Image Frame */}
          <div className="order-1 lg:order-2 relative w-full aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden group">
            {/* Replace src with Viraj's actual photo */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
              alt="Viraj Ratra" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            {/* Subtle blue ambient overlay */}
            <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/20 mix-blend-overlay transition-colors duration-700 z-10"></div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. TRANSFORMATIVE CREATIVITY 
      ========================================= */}
      <section 
        ref={textAnimSectionRef} 
        className="relative h-[60vh] md:h-screen w-full flex flex-col justify-center items-center py-20 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none">
          <h2 className="text-top text-[18vw] md:text-[14vw] font-black text-white uppercase leading-none whitespace-nowrap -ml-[40%]">
            Transformative
          </h2>
          <h2 className="text-bottom text-[18vw] md:text-[14vw] font-black text-white uppercase leading-none whitespace-nowrap -mr-[40%]">
            Creativity
          </h2>
        </div>

        <div className="relative z-10 w-56 h-56 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-[0_0_80px_rgba(46,175,240,0.15)] border border-neutral-800">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
            alt="Creativity" 
            className="w-full h-full object-cover opacity-80" 
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none">
          <h2 
            className="text-top text-[18vw] md:text-[14vw] font-black uppercase leading-none whitespace-nowrap text-transparent -ml-[40%]" 
            style={{ WebkitTextStroke: '2px white' }}
          >
            Transformative
          </h2>
          <h2 
            className="text-bottom text-[18vw] md:text-[14vw] font-black uppercase leading-none whitespace-nowrap text-transparent -mr-[40%]" 
            style={{ WebkitTextStroke: '2px white' }}
          >
            Creativity
          </h2>
        </div>
      </section>

      {/* =========================================
          4. IMPACTS PEOPLE (1/4 to Full Fan Animation)
      ========================================= */}
      <section ref={fanSectionRef} className="py-32 md:py-48 px-6 container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left: Building Geometric Fan */}
          <div className="flex justify-center md:justify-start">
            <div className="w-72 h-72 md:w-[500px] md:h-[500px]">
              
              {/* SVG wrapped in a group for the final continuous rotation */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(46,175,240,0.2)]">
                <g className="full-fan">
                  {/* Petal 1: Always visible (Starts at 1/4) */}
                  <path className="petal-1 fill-white" d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" />
                  
                  {/* Petal 2: Animates in */}
                  <path className="petal-2 fill-white" d="M 50 50 L 95 50 A 45 45 0 0 1 50 95 Z" />
                  
                  {/* Petal 3: Animates in */}
                  <path className="petal-3 fill-white" d="M 50 50 L 50 95 A 45 45 0 0 1 5 50 Z" />
                  
                  {/* Petal 4: Animates in */}
                  {/* Giving this one the accent color for a pop of branding */}
                  <path className="petal-4 fill-[#2eaff0]" d="M 50 50 L 5 50 A 45 45 0 0 1 50 5 Z" />
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
            <button className="px-10 py-5 bg-[#2eaff0] text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(46,175,240,0.3)]">
              View Work
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
