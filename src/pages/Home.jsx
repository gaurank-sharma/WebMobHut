import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { servicesData } from '../data';
import WorkSlider from '../components/WorkSlider';

const Home = () => {
  const containerRef = useRef(null);
  const leftBeamRef = useRef(null);
  const rightBeamRef = useRef(null);
  const flashRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const interactiveLightRef = useRef(null);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setIntroFinished(true) });

    gsap.set([leftBeamRef.current, rightBeamRef.current], { opacity: 0, scaleY: 0, transformOrigin: 'top center' });
    gsap.set(leftBeamRef.current,  { rotation: 25,  xPercent: -50 });
    gsap.set(rightBeamRef.current, { rotation: -25, xPercent:  50 });
    gsap.set(flashRef.current,     { opacity: 0, scale: 0 });
    gsap.set(bgRef.current,        { opacity: 0, filter: 'blur(10px)' });
    gsap.set(contentRef.current,   { opacity: 0, y: 40 });
    gsap.set(interactiveLightRef.current, { opacity: 0 });

    tl.to(leftBeamRef.current,  { opacity: 0.8, scaleY: 1, duration: 0.1, ease: 'power4.out' })
      .to(rightBeamRef.current, { opacity: 0.8, scaleY: 1, duration: 0.1, ease: 'power4.out' }, '+=0.3')
      .to([leftBeamRef.current, rightBeamRef.current], { rotation: 0, xPercent: 0, duration: 0.6, ease: 'power2.inOut' }, '+=0.4')
      .to(flashRef.current, { opacity: 1, scale: 10, duration: 0.2, ease: 'power4.in' }, '-=0.1')
      .to([leftBeamRef.current, rightBeamRef.current], { opacity: 0, duration: 0.1 })
      .to(flashRef.current, { opacity: 0, duration: 1.5, ease: 'power2.out' })
      .to(bgRef.current, { opacity: 0.3, filter: 'blur(0px)', duration: 1.5 }, '-=1.3')
      .to(contentRef.current, { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.5)' }, '-=1.2')
      .to(interactiveLightRef.current, { opacity: 1, duration: 1 }, '-=0.5');

    return () => tl.kill();
  }, []);

  const handleMouseMove = (e) => {
    if (!introFinished || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="font-sans overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white">

      {/* ==========================================
          CINEMATIC HERO — always dark (photo bg)
      ========================================== */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center cursor-crosshair"
      >
        {/* Background Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />

        {/* Interactive Spotlight */}
        <div
          ref={interactiveLightRef}
          className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(46, 175, 240, 0.4) 0%, rgba(0,0,0,0.8) 80%, black 100%)`
          }}
        />

        {/* Left Beam */}
        <div
          ref={leftBeamRef}
          className="absolute top-[-10%] left-[20%] w-64 h-[120%] z-[2] pointer-events-none mix-blend-screen"
          style={{
            background: 'linear-gradient(to bottom, rgba(46, 175, 240, 0.8) 0%, rgba(46, 175, 240, 0) 100%)',
            clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)'
          }}
        />

        {/* Right Beam */}
        <div
          ref={rightBeamRef}
          className="absolute top-[-10%] right-[20%] w-64 h-[120%] z-[2] pointer-events-none mix-blend-screen"
          style={{
            background: 'linear-gradient(to bottom, rgba(46, 175, 240, 0.8) 0%, rgba(46, 175, 240, 0) 100%)',
            clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)'
          }}
        />

        {/* Flash */}
        <div
          ref={flashRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2eaff0] rounded-full blur-[80px] z-[3] pointer-events-none"
        />

        {/* Hero Content */}
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
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#2eaff0]/20 to-transparent z-[1] pointer-events-none" />
      </section>

      {/* ==========================================
          INTRO SECTION
      ========================================== */}
      <section className="py-24 md:py-32 border-t relative z-20
        bg-gray-50 border-gray-100
        dark:bg-[#050505] dark:border-neutral-900">
        <div className="container mx-auto px-6 text-center">
          <span className="font-bold tracking-[0.2em] uppercase text-xs mb-6 block text-[#2eaff0]">Welcome</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-8 tracking-tight
            text-gray-900 dark:text-white">
            We are WebMobHut
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light
            text-gray-500 dark:text-gray-400">
            We believe in structured planning, timely delivery, and execution without compromise.
            Led by Viraj Ratra, we are your trusted partner for impactful and professionally managed events
            that elevate brand visibility and consumer engagement.
          </p>
        </div>
      </section>

      {/* ==========================================
          WORK SLIDER
      ========================================== */}
      <WorkSlider />

      {/* ==========================================
          SERVICES PREVIEW
      ========================================== */}
      <section className="py-24 md:py-32 relative z-20 border-t
        bg-white border-gray-100
        dark:bg-[#030303] dark:border-neutral-900">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b pb-8
            border-gray-200 dark:border-neutral-800">
            <div>
              <span className="font-bold tracking-[0.2em] uppercase text-xs mb-4 block text-[#2eaff0]">Expertise</span>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight
                text-gray-900 dark:text-white">
                What We Do
              </h2>
            </div>
            <Link
              to="/services"
              className="font-bold tracking-widest uppercase text-sm flex items-center transition-colors group mt-6 md:mt-0
                text-gray-400 hover:text-[#2eaff0] dark:text-gray-400 dark:hover:text-[#2eaff0]"
            >
              View All Services
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group block rounded-2xl overflow-hidden border transition-all duration-500
                  bg-white border-gray-200 hover:border-[#2eaff0] hover:shadow-[0_0_30px_rgba(46,175,240,0.08)]
                  dark:bg-[#0a0a0a] dark:border-neutral-800 dark:hover:border-[#2eaff0] dark:hover:shadow-[0_0_30px_rgba(46,175,240,0.1)]"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/20 transition-colors duration-500 z-10 mix-blend-overlay" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0 opacity-100 md:grayscale md:opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 transition-colors line-clamp-2
                    text-gray-900 group-hover:text-[#2eaff0]
                    dark:text-white dark:group-hover:text-[#2eaff0]">
                    {service.title}
                  </h3>
                  <p className="text-base font-light line-clamp-3 leading-relaxed
                    text-gray-500 dark:text-gray-400">
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
