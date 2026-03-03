


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const animSectionRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.matchMedia();

//     ctx.add("(min-width: 320px)", () => {
//       // Animate the top text moving to the RIGHT
//       gsap.to(".text-top", {
//         xPercent: 30, // Adjust this value to control how far it moves
//         ease: "none",
//         scrollTrigger: {
//           trigger: animSectionRef.current,
//           start: "top bottom", 
//           end: "bottom top",
//           scrub: 1, // Smooth scrubbing
//         }
//       });

//       // Animate the bottom text moving to the LEFT
//       gsap.to(".text-bottom", {
//         xPercent: -30, // Adjust this value to control how far it moves
//         ease: "none",
//         scrollTrigger: {
//           trigger: animSectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: 1,
//         }
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="pt-10 bg-white">
      
//       {/* =========================================
//           EXISTING ABOUT SECTION (Light Theme)
//       ========================================= */}
//       <div className="pb-24">
//         {/* Header */}
//         <section className="bg-blue-600 py-20 mb-20 text-white">
//           <div className="container mx-auto px-6 text-center">
//             <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Who We Are</h1>
//             <p className="text-blue-100 max-w-xl mx-auto">Precision, creativity, and operational excellence.</p>
//           </div>
//         </section>

//         <section className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <img 
//               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" 
//               alt="Team Meeting" 
//               className="rounded-2xl shadow-2xl"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">12 Years of Excellence</h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               WebMobHut Pvt Ltd is an event management company specializing in mall decorations, retail activations, and corporate events across shopping complexes, marketplaces, and commercial spaces.
//             </p>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               With a strong focus on brand visibility, consumer engagement, and flawless execution, we create experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
//             </p>
//             <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
//               <p className="font-bold text-gray-900">Led by Viraj Ratra</p>
//               <p className="text-gray-500 text-sm">A dedicated professional with over 12 years of hands-on experience in the event management industry.</p>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* =========================================
//           DARK THEME WRAPPER FOR NEW SECTIONS
//       ========================================= */}
//       <div className="bg-black text-white overflow-hidden">

//         {/* =========================================
//             GSAP TEXT ANIMATION SECTION
//         ========================================= */}
//         <section 
//           ref={animSectionRef} 
//           className="relative h-[60vh] md:h-screen w-full flex flex-col justify-center items-center py-20 border-t border-gray-900 overflow-hidden"
//         >
//           {/* Base Solid Text (Behind Image) */}
//           <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none">
//             <h2 className="text-top text-[15vw] md:text-[12vw] font-black text-white uppercase leading-none whitespace-nowrap -ml-[20%]">
//               Transformative
//             </h2>
//             <h2 className="text-bottom text-[15vw] md:text-[12vw] font-black text-white uppercase leading-none whitespace-nowrap -mr-[20%]">
//               Creativity
//             </h2>
//           </div>

//           {/* Center Circular Image */}
//           <div className="relative z-10 w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
//             <img 
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
//               alt="Creativity" 
//               className="w-full h-full object-cover opacity-80" 
//             />
//           </div>

//           {/* Outlined Text (In front of Image - exact duplicate of base text) */}
//           {/* The text stroke makes it appear outlined over the image, but blends seamlessly with the solid text behind it */}
//           <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none">
//             <h2 
//               className="text-top text-[15vw] md:text-[12vw] font-black uppercase leading-none whitespace-nowrap text-transparent -ml-[20%]" 
//               style={{ WebkitTextStroke: '2px white' }}
//             >
//               Transformative
//             </h2>
//             <h2 
//               className="text-bottom text-[15vw] md:text-[12vw] font-black uppercase leading-none whitespace-nowrap text-transparent -mr-[20%]" 
//               style={{ WebkitTextStroke: '2px white' }}
//             >
//               Creativity
//             </h2>
//           </div>
//         </section>

//         {/* =========================================
//             NATIONAL PRESENCE MAP SECTION
//         ========================================= */}
//         <section className="py-16 md:py-24 px-6 container mx-auto max-w-7xl text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">National presence</h2>
//           <div className="h-1 w-20 bg-[#6EE7B7] mb-6 mx-auto"></div> 
//           <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
//             Executing flawless events across major hubs in India. Find us where the action is.
//           </p>
          
//           <div className="relative max-w-4xl mx-auto w-full aspect-[4/5] md:aspect-[16/10] bg-[#111] rounded-2xl border border-gray-800 overflow-hidden flex items-center justify-center">
            
//             {/* PLACEHOLDER FOR INDIA MAP SVG */}
//             <div className="absolute inset-0 flex items-center justify-center">
//                <span className="text-gray-600 text-sm md:text-base border border-dashed border-gray-600 p-4 rounded">
//                  Insert India Map Image / SVG Here
//                </span>
//             </div>

//             {/* Delhi NCR Cluster */}
//             <div className="absolute top-[32%] left-[45%] flex flex-col items-center group cursor-pointer z-10">
//                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#6EE7B7] rounded-full shadow-[0_0_15px_#6EE7B7] animate-pulse"></div>
//                <span className="text-xs md:text-sm mt-2 font-bold text-white bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Delhi</span>
//             </div>

//             <div className="absolute top-[34%] left-[43%] flex flex-col items-center group cursor-pointer z-10">
//                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#6EE7B7] rounded-full shadow-[0_0_10px_#6EE7B7]"></div>
//                <span className="text-xs md:text-sm mt-2 font-bold text-white bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Gurgaon</span>
//             </div>

//             <div className="absolute top-[34%] left-[47%] flex flex-col items-center group cursor-pointer z-10">
//                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#6EE7B7] rounded-full shadow-[0_0_10px_#6EE7B7]"></div>
//                <span className="text-xs md:text-sm mt-2 font-bold text-white bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Noida</span>
//             </div>

//             {/* Bangalore */}
//             <div className="absolute top-[75%] left-[42%] flex flex-col items-center group cursor-pointer z-10">
//                <div className="w-3 h-3 md:w-4 md:h-4 bg-[#6EE7B7] rounded-full shadow-[0_0_15px_#6EE7B7] animate-pulse"></div>
//                <span className="text-xs md:text-sm mt-2 font-bold text-white bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Bangalore</span>
//             </div>
//           </div>
//         </section>

//         {/* =========================================
//             CONTACT US SECTION
//         ========================================= */}
//         <section className="py-16 md:py-24 px-6 container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide">
//               Experience <br />
//               <span className="text-[#6EE7B7]">Connection</span>
//             </h1>
//             <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
//               Ready to Experience Everything? If you're searching for the right agency partner, 
//               we want to hear from you. Shoot us an email or fill out this form and we'll eagerly respond.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
//             {/* Contact Information */}
//             <div className="space-y-10 lg:pr-8 order-2 lg:order-1">
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">How can we help?</h2>
//                 <p className="text-gray-300 leading-relaxed text-sm md:text-base">
//                   If you would like to work with WebMobHut, we'd love to hear from you. Send us a note 
//                   and we'll set up a time to get to know each other. We love a good challenge, 
//                   and look forward to meeting you.
//                 </p>
//               </div>

//               <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
//                 <p className="font-bold text-2xl text-white mb-1">Bhawna</p>
//                 <p className="font-semibold text-[#6EE7B7] mb-4">Director, WebMobHut Pvt Ltd</p>
                
//                 <div className="space-y-3 mt-6">
//                   <div className="flex items-center gap-3 text-gray-300">
//                     <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
//                     <span>+91-8860585993</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-300">
//                     <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
//                     <a href="mailto:bhavishya39@gmail.com" className="hover:text-[#6EE7B7] transition-colors">bhavishya39@gmail.com</a>
//                   </div>
//                   <div className="flex items-center gap-3 text-gray-300">
//                     <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
//                     <a href="https://www.webmobhut.com" target="_blank" rel="noreferrer" className="hover:text-[#6EE7B7] transition-colors">www.webmobhut.com</a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="bg-[#1a1f2b] p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-800 order-1 lg:order-2">
//               <form className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-200 mb-2">
//                     Name <span className="text-red-500 font-normal italic">(Required)</span>
//                   </label>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <input type="text" className="w-full px-4 py-3 bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-[#6EE7B7] transition-all" />
//                       <span className="text-xs text-gray-400 mt-1.5 block">First</span>
//                     </div>
//                     <div>
//                       <input type="text" className="w-full px-4 py-3 bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-[#6EE7B7] transition-all" />
//                       <span className="text-xs text-gray-400 mt-1.5 block">Last</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-200 mb-2">Company</label>
//                   <input type="text" className="w-full px-4 py-3 bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-[#6EE7B7] transition-all" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-200 mb-2">
//                     Email <span className="text-red-500 font-normal italic">(Required)</span>
//                   </label>
//                   <input type="email" className="w-full px-4 py-3 bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-[#6EE7B7] transition-all" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-200 mb-2">
//                     Message <span className="text-red-500 font-normal italic">(Required)</span>
//                   </label>
//                   <textarea rows="4" className="w-full px-4 py-3 bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-[#6EE7B7] resize-none transition-all"></textarea>
//                 </div>
//                 <div className="pt-4">
//                   <button type="button" className="w-full md:w-auto px-10 py-3.5 bg-[#6EE7B7] text-black font-bold tracking-wide rounded-full hover:bg-[#58d5a3] transform hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_15px_rgba(110,231,183,0.3)] hover:shadow-[0_0_20px_rgba(110,231,183,0.5)]">
//                     SUBMIT
//                   </button>
//                 </div>
//               </form>
//             </div>

//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

// export default About;




import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textAnimSectionRef = useRef(null);
  const fanSectionRef = useRef(null);
  const fanRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.matchMedia();

    ctx.add("(min-width: 320px)", () => {
      // 1. TRANSFORMATIVE CREATIVITY (Sliding Text)
      gsap.to(".text-top", {
        xPercent: 60, 
        ease: "none",
        scrollTrigger: {
          trigger: textAnimSectionRef.current,
          start: "top bottom", 
          end: "bottom top",
          scrub: 0.1, 
        }
      });

      gsap.to(".text-bottom", {
        xPercent: -60, 
        ease: "none",
        scrollTrigger: {
          trigger: textAnimSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.1,
        }
      });

      // 2. SPINNING FAN ANIMATION
      // Fixed: Added transformOrigin and targeted the ref directly with scrub: 1
      gsap.to(fanRef.current, {
        rotation: 360,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: fanSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, 
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* =========================================
          1. HERO VIDEO SECTION
      ========================================= */}
      <section className="relative w-full h-[85vh] bg-neutral-900 rounded-b-[4rem] md:rounded-b-[8rem] overflow-hidden shadow-2xl z-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-neutral-500 font-medium tracking-widest uppercase">Hero Video Background Plays Here</p>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center pl-2 cursor-pointer pointer-events-auto hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="black"><path d="M5 3l14 9-14 9V3z"/></svg>
           </div>
        </div>
      </section>

      {/* =========================================
          2. EDITORIAL "WHO WE ARE" SECTION
          Redesigned to break up the "continuous text" look
      ========================================= */}
      <section className="py-32 px-6 container mx-auto max-w-7xl z-0">
        
        {/* Massive Tagline Statement */}
        <div className="mb-32">
          <span className="text-[#6EE7B7] font-bold tracking-widest uppercase text-sm mb-6 block">Who We Are</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight">
            Precision, creativity, and <br className="hidden md:block" />
            <span className="text-neutral-500 italic">operational excellence.</span>
          </h2>
        </div>

        {/* 12 Years Asymmetrical Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start mb-32 border-t border-neutral-800 pt-20">
          {/* Big Number Graphic */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-[12rem] leading-none font-black text-white -mt-10 tracking-tighter">
              12
            </h3>
            <p className="text-2xl font-bold uppercase tracking-widest text-neutral-400 mt-2">
              Years of <br /> Excellence
            </p>
          </div>
          
          {/* Content */}
          <div className="md:col-span-8 md:pl-12 lg:pl-24 space-y-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug text-neutral-200">
              WebMobHut Pvt Ltd is an event management company specializing in mall decorations, retail activations, and corporate events across shopping complexes, marketplaces, and commercial spaces.
            </p>
            <p className="text-lg md:text-xl font-normal leading-relaxed text-neutral-500 max-w-2xl">
              With a strong focus on brand visibility, consumer engagement, and flawless execution, we create experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
            </p>
          </div>
        </div>

        {/* Leadership Callout */}
        <div className="flex justify-end">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-neutral-950 p-10 md:p-16 rounded-3xl border border-neutral-900 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#6EE7B7]"></div>
            <span className="text-neutral-500 font-bold tracking-widest uppercase text-xs mb-4 block">Leadership</span>
            <h3 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Led by Viraj Ratra
            </h3>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
              A dedicated professional with over 12 years of hands-on experience in the event management industry, driving execution without compromise.
            </p>
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

        <div className="relative z-10 w-56 h-56 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
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
          4. IMPACTS PEOPLE (Fixed Fan Animation)
      ========================================= */}
      <section ref={fanSectionRef} className="py-32 md:py-48 px-6 container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left: Spinning Geometric Fan */}
          <div className="flex justify-center md:justify-start">
            {/* The fanRef is placed on the exact element we want to rotate */}
            <div ref={fanRef} className="w-72 h-72 md:w-[500px] md:h-[500px]">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white drop-shadow-2xl">
                <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" />
                <path d="M 50 50 L 95 50 A 45 45 0 0 1 50 95 Z" />
                <path d="M 50 50 L 50 95 A 45 45 0 0 1 5 50 Z" />
                <path d="M 50 50 L 5 50 A 45 45 0 0 1 50 5 Z" />
              </svg>
            </div>
          </div>

          {/* Right: Typography Block */}
          <div className="space-y-6">
            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-neutral-500">
              Transformative Creativity
            </span>
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.85] text-white tracking-tighter">
              Impacts <br /> People
            </h2>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-lg mt-8 mb-12 leading-relaxed">
              Ideas that move people by generating powerful cultural conversation and inviting people to join in.
            </p>
            <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-[#6EE7B7] transition-colors duration-300">
              View Work
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
