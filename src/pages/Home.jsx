

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { servicesData } from '../data';
// import WorkSlider from '../components/WorkSlider'; // Import Slider

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center bg-gray-900">
//         <img 
//           src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//           alt="Event Background" 
//         />
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
//               Executing Events <br/> Without Compromise.
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-lg">
//               Specializing in mall activations, retail décor, and corporate experiences across India.
//             </p>
//             <div className="flex gap-4">
//               <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">
//                 Start Planning
//               </Link>
//               <Link to="/services" className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition">
//                 Our Services
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Intro Snippet */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-heading font-bold mb-6">Welcome to WebMobHut</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             We believe in structured planning, timely delivery, and execution without compromise. 
//             Led by Viraj Ratra, we are your trusted partner for impactful and professionally managed events.
//           </p>
//         </div>
//       </section>

//       {/* --- ADDED: Work Slider Section --- */}
//       <WorkSlider />
//       {/* ---------------------------------- */}

//       {/* Services Preview */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="flex justify-between items-end mb-12">
//             <h2 className="text-3xl font-heading font-bold">What We Do</h2>
//             <Link to="/services" className="text-blue-600 font-semibold flex items-center hover:underline">
//               View All <ArrowRight size={16} className="ml-2" />
//             </Link>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {servicesData.slice(0, 3).map((service) => (
//               <Link key={service.id} to={`/services/${service.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
//                 <div className="h-48 overflow-hidden">
//                   <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
//                   <p className="text-gray-500 text-sm line-clamp-2">{service.shortDesc}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Float, Sparkles, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
// import { servicesData } from '../data';
// import WorkSlider from '../components/WorkSlider';

// // ==========================================
// // 3D HERO COMPONENT (Abstract Energy Shape)
// // ==========================================
// const AbstractShape = () => {
//   const meshRef = useRef();

//   // Slowly rotate the shape on every frame
//   useFrame((state) => {
//     const time = state.clock.getElapsedTime();
//     meshRef.current.rotation.x = time * 0.1;
//     meshRef.current.rotation.y = time * 0.15;
//   });

//   return (
//     <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
//       <mesh ref={meshRef}>
//         {/* A complex, mathematical knot shape representing connection */}
//         <torusKnotGeometry args={[4, 1.2, 256, 32]} />
//         {/* The distort material makes it morph and pulse like dynamic energy */}
//         <MeshDistortMaterial
//           color="#2eaff0"
//           emissive="#2eaff0"
//           emissiveIntensity={0.8}
//           wireframe={true}
//           distort={0.4}
//           speed={2}
//         />
//       </mesh>
//     </Float>
//   );
// };

// // ==========================================
// // MAIN HOME PAGE COMPONENT
// // ==========================================
// const Home = () => {
//   return (
//     <div className="bg-black text-white font-sans overflow-hidden">
      
//       {/* --- 3D HERO SECTION --- */}
//       <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
        
//         {/* 3D Canvas Background */}
//         <div className="absolute inset-0 z-0 opacity-80 cursor-grab active:cursor-grabbing">
//           <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
//             <ambientLight intensity={0.5} />
//             {/* The morphing wireframe shape */}
//             <AbstractShape />
//             {/* Floating dust/energy particles */}
//             <Sparkles 
//               count={1500} 
//               scale={25} 
//               size={3} 
//               speed={0.4} 
//               opacity={0.4} 
//               color="#2eaff0" 
//             />
//             {/* Allows the user to rotate the background structure with their mouse */}
//             <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//           </Canvas>
//         </div>

//         {/* Gradient Overlay to ensure text readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-0 pointer-events-none"></div>

//         {/* Hero Text Content */}
//         <div className="container mx-auto px-6 relative z-10 pointer-events-none">
//           <div className="max-w-4xl mt-20">
//             <span className="inline-block py-1 px-3 border border-[#2eaff0] text-[#2eaff0] rounded-full text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm bg-black/30">
//               Immersive Event Experiences
//             </span>
//             <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white mb-6 leading-[0.95] tracking-tighter">
//               Executing <br />
//               <span className="text-[#2eaff0] drop-shadow-[0_0_20px_rgba(46,175,240,0.4)]">Events</span> <br />
//               Without Compromise.
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
//               Specializing in mall activations, retail décor, and high-impact corporate experiences across India.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 pointer-events-auto">
//               <Link 
//                 to="/contact" 
//                 className="px-10 py-5 bg-[#2eaff0] text-black font-bold tracking-widest uppercase text-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(46,175,240,0.3)] text-center"
//               >
//                 Start Planning
//               </Link>
//               <Link 
//                 to="/services" 
//                 className="px-10 py-5 bg-transparent border border-gray-600 text-white font-bold tracking-widest uppercase text-sm rounded-full hover:border-[#2eaff0] hover:text-[#2eaff0] transition-all duration-300 text-center"
//               >
//                 Our Services
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- INTRO SECTION --- */}
//       <section className="py-24 md:py-32 bg-black border-t border-neutral-900 relative z-20">
//         <div className="container mx-auto px-6 text-center">
//           <span className="text-[#2eaff0] font-bold tracking-widest uppercase text-sm mb-4 block">Welcome</span>
//           <h2 className="text-4xl md:text-6xl font-medium mb-8 text-white">We are WebMobHut</h2>
//           <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
//             We believe in structured planning, timely delivery, and execution without compromise. 
//             Led by Viraj Ratra, we are your trusted partner for impactful and professionally managed events 
//             that elevate brand visibility and consumer engagement.
//           </p>
//         </div>
//       </section>

//       {/* --- WORK SLIDER SECTION --- */}
//       <WorkSlider />

//       {/* --- SERVICES PREVIEW SECTION --- */}
//       <section className="py-24 md:py-32 bg-[#050505] relative z-20">
//         <div className="container mx-auto px-6 max-w-7xl">
          
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-8">
//             <div>
//               <span className="text-[#2eaff0] font-bold tracking-widest uppercase text-sm mb-2 block">Expertise</span>
//               <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight">What We Do</h2>
//             </div>
//             <Link to="/services" className="text-gray-400 hover:text-[#2eaff0] font-bold tracking-widest uppercase text-sm flex items-center transition-colors group mt-6 md:mt-0">
//               View All Services 
//               <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
//             </Link>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {servicesData.slice(0, 3).map((service) => (
//               <Link 
//                 key={service.id} 
//                 to={`/services/${service.id}`} 
//                 className="group block bg-[#0a0a0a] border border-neutral-800 rounded-3xl overflow-hidden hover:border-[#2eaff0] transition-all duration-500"
//               >
//                 <div className="h-64 overflow-hidden relative">
//                   {/* Subtle blue overlay on hover over the image */}
//                   <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/20 transition-colors duration-500 z-10"></div>
//                   <img 
//                     src={service.image} 
//                     alt={service.title} 
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
//                   />
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#2eaff0] transition-colors line-clamp-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-400 text-base font-light line-clamp-3 leading-relaxed">
//                     {service.shortDesc}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
          
//         </div>
//       </section>
      
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { servicesData } from '../data';
import WorkSlider from '../components/WorkSlider';

const Home = () => {
  // Refs for GSAP animations
  const containerRef = useRef(null);
  const leftBeamRef = useRef(null);
  const rightBeamRef = useRef(null);
  const flashRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const interactiveLightRef = useRef(null);

  // State to enable mouse tracking only AFTER intro animation
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // === THE "CONCERT BOOT-UP" CINEMATIC SEQUENCE ===
    const tl = gsap.timeline({
      onComplete: () => setIntroFinished(true) // Enable mouse tracking when done
    });

    // 1. Initial State Setup
    gsap.set([leftBeamRef.current, rightBeamRef.current], { opacity: 0, scaleY: 0, transformOrigin: "top center" });
    gsap.set(leftBeamRef.current, { rotation: 25, xPercent: -50 });
    gsap.set(rightBeamRef.current, { rotation: -25, xPercent: 50 });
    gsap.set(flashRef.current, { opacity: 0, scale: 0 });
    gsap.set(bgRef.current, { opacity: 0, filter: 'blur(10px)' });
    gsap.set(contentRef.current, { opacity: 0, y: 40 });
    gsap.set(interactiveLightRef.current, { opacity: 0 });

    // 2. The Sequence
    tl.to(leftBeamRef.current, { opacity: 0.8, scaleY: 1, duration: 0.1, ease: "power4.out" }) // Left light snaps on
      .to(rightBeamRef.current, { opacity: 0.8, scaleY: 1, duration: 0.1, ease: "power4.out" }, "+=0.3") // Right light snaps on
      .to([leftBeamRef.current, rightBeamRef.current], { 
        rotation: 0, 
        xPercent: 0, 
        duration: 0.6, 
        ease: "power2.inOut" 
      }, "+=0.4") // Both sweep to center
      .to(flashRef.current, { opacity: 1, scale: 10, duration: 0.2, ease: "power4.in" }, "-=0.1") // Huge flashbang
      .to([leftBeamRef.current, rightBeamRef.current], { opacity: 0, duration: 0.1 }) // Hide sharp beams during flash
      .to(flashRef.current, { opacity: 0, duration: 1.5, ease: "power2.out" }) // Fade flash
      .to(bgRef.current, { opacity: 0.3, filter: 'blur(0px)', duration: 1.5 }, "-=1.3") // Reveal background
      .to(contentRef.current, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.5)" }, "-=1.2") // Slam text in
      .to(interactiveLightRef.current, { opacity: 1, duration: 1 }, "-=0.5"); // Fade in mouse spotlight

    return () => tl.kill();
  }, []);

  // Handle Mouse Spotlight
  const handleMouseMove = (e) => {
    if (!introFinished || !containerRef.current) return;
    
    // Get mouse position relative to the container
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update CSS variables for the spotlight position
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      
      {/* ==========================================
          CINEMATIC HERO SECTION
      ========================================== */}
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center cursor-crosshair"
      >
        {/* 1. Background Image (Hidden initially) */}
        <div 
          ref={bgRef}
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        ></div>

        {/* 2. Interactive Spotlight (Follows Mouse) */}
        <div 
          ref={interactiveLightRef}
          className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(46, 175, 240, 0.4) 0%, rgba(0,0,0,0.8) 80%, black 100%)`
          }}
        ></div>

        {/* 3. The Stage Lights (Animated in Intro) */}
        {/* Left Beam */}
        <div 
          ref={leftBeamRef}
          className="absolute top-[-10%] left-[20%] w-64 h-[120%] z-[2] pointer-events-none mix-blend-screen"
          style={{
            background: 'linear-gradient(to bottom, rgba(46, 175, 240, 0.8) 0%, rgba(46, 175, 240, 0) 100%)',
            clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)' // Creates the cone shape
          }}
        ></div>

        {/* Right Beam */}
        <div 
          ref={rightBeamRef}
          className="absolute top-[-10%] right-[20%] w-64 h-[120%] z-[2] pointer-events-none mix-blend-screen"
          style={{
            background: 'linear-gradient(to bottom, rgba(46, 175, 240, 0.8) 0%, rgba(46, 175, 240, 0) 100%)',
            clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)'
          }}
        ></div>

        {/* The Center Flash */}
        <div 
          ref={flashRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2eaff0] rounded-full blur-[80px] z-[3] pointer-events-none"
        ></div>

        {/* 4. Hero Content */}
        <div ref={contentRef} className="container mx-auto px-6 relative z-[10] text-center pointer-events-none">
          <div className="max-w-4xl mx-auto mt-20">
            
            <span className="inline-block py-1.5 px-4 border border-[#2eaff0] text-[#2eaff0] rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-md bg-black/50 shadow-[0_0_15px_rgba(46,175,240,0.3)]">
              WebMobHut Event Management
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white mb-6 leading-[0.95] tracking-tighter">
              EXECUTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2eaff0] drop-shadow-[0_0_20px_rgba(46,175,240,0.4)]">EVENTS</span> <br />
              WITHOUT COMPROMISE.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Specializing in mall activations, retail décor, and high-impact corporate experiences across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pointer-events-auto">
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-[#2eaff0] text-black font-bold tracking-widest uppercase text-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(46,175,240,0.4)]"
              >
                Start Planning
              </Link>
              <Link 
                to="/services" 
                className="px-10 py-5 bg-black/50 backdrop-blur-md border border-gray-600 text-white font-bold tracking-widest uppercase text-sm rounded-full hover:border-[#2eaff0] hover:text-[#2eaff0] transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Ambient bottom glow */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#2eaff0]/20 to-transparent z-[1] pointer-events-none"></div>
      </section>

      {/* ==========================================
          INTRO SECTION
      ========================================== */}
      <section className="py-24 md:py-32 bg-[#050505] border-t border-neutral-900 relative z-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#2eaff0] font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Welcome</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-8 text-white tracking-tight">We are WebMobHut</h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            We believe in structured planning, timely delivery, and execution without compromise. 
            Led by Viraj Ratra, we are your trusted partner for impactful and professionally managed events 
            that elevate brand visibility and consumer engagement.
          </p>
        </div>
      </section>

      {/* ==========================================
          WORK SLIDER SECTION 
      ========================================== */}
      <WorkSlider />

      {/* ==========================================
          SERVICES PREVIEW SECTION
      ========================================== */}
      <section className="py-24 md:py-32 bg-[#030303] relative z-20 border-t border-neutral-900">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-8">
            <div>
              <span className="text-[#2eaff0] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Expertise</span>
              <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight">What We Do</h2>
            </div>
            <Link to="/services" className="text-gray-400 hover:text-[#2eaff0] font-bold tracking-widest uppercase text-sm flex items-center transition-colors group mt-6 md:mt-0">
              View All Services 
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`} 
                className="group block bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#2eaff0] transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,175,240,0.1)]"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/20 transition-colors duration-500 z-10 mix-blend-overlay"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#2eaff0] transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-base font-light line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
        </div>
      </section>
      
    </div>
  );
};

export default Home;
