import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textAnimSectionRef = useRef(null);
  const fanSectionRef = useRef(null);
  const fanRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    let ctx = gsap.matchMedia();

    ctx.add('(min-width: 320px)', () => {
      gsap.to('.text-top', {
        xPercent: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: textAnimSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.1,
        }
      });

      gsap.to('.text-bottom', {
        xPercent: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: textAnimSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.1,
        }
      });

      gsap.to(fanRef.current, {
        rotation: 360,
        transformOrigin: '50% 50%',
        ease: 'none',
        scrollTrigger: {
          trigger: fanSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const strokeColor = isDark ? 'white' : '#111827';

  return (
    <div className="min-h-screen font-sans overflow-hidden
      bg-white text-gray-900
      dark:bg-black dark:text-white">

      {/* =========================================
          1. HERO VIDEO SECTION
      ========================================= */}
      <section className="relative w-full h-[85vh] rounded-b-[4rem] md:rounded-b-[8rem] overflow-hidden shadow-2xl z-10
        bg-gray-200 dark:bg-neutral-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-medium tracking-widest uppercase
            text-gray-400 dark:text-neutral-500">
            Hero Video Background Plays Here
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center pl-2 cursor-pointer pointer-events-auto hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="black"><path d="M5 3l14 9-14 9V3z"/></svg>
          </div>
        </div>
      </section>

      {/* =========================================
          2. EDITORIAL "WHO WE ARE" SECTION
      ========================================= */}
      <section className="py-32 px-6 container mx-auto max-w-7xl z-0">

        {/* Tagline */}
        <div className="mb-32">
          <span className="font-bold tracking-widest uppercase text-sm mb-6 block text-[#2eaff0]">Who We Are</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight
            text-gray-900 dark:text-white">
            Precision, creativity, and <br className="hidden md:block" />
            <span className="italic text-gray-400 dark:text-neutral-500">operational excellence.</span>
          </h2>
        </div>

        {/* 12 Years Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start mb-32 border-t pt-20
          border-gray-200 dark:border-neutral-800">
          <div className="md:col-span-4 flex flex-col">
            <h3 className="text-[10rem] lg:text-[12rem] leading-none font-black -mt-10 tracking-tighter
              text-gray-900 dark:text-white">
              12
            </h3>
            <p className="text-2xl font-bold uppercase tracking-widest mt-2
              text-gray-400 dark:text-neutral-400">
              Years of <br /> Excellence
            </p>
          </div>

          <div className="md:col-span-8 md:pl-12 lg:pl-24 space-y-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug
              text-gray-700 dark:text-neutral-200">
              WebMobHut Pvt Ltd is an event management company specializing in mall decorations, retail activations, and corporate events across shopping complexes, marketplaces, and commercial spaces.
            </p>
            <p className="text-lg md:text-xl font-normal leading-relaxed max-w-2xl
              text-gray-400 dark:text-neutral-500">
              With a strong focus on brand visibility, consumer engagement, and flawless execution, we create experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
            </p>
          </div>
        </div>

        {/* Creative Leader */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start border-t pt-16
          border-gray-200 dark:border-neutral-800">

          <div className="md:col-span-4">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#2eaff0]">
              Creative <br className="hidden md:block" /> Leader
            </h3>
          </div>

          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-2 gap-12 items-center">

              {/* Image Frame */}
              <div className="p-2 md:p-4 aspect-square shadow-2xl
                bg-white dark:bg-white">
                <div className="w-full h-full overflow-hidden relative group
                  bg-gray-200 dark:bg-neutral-200">
                  <img
                    src="/Viraj_ratra.jpeg"
                    alt="Viraj Ratra"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[#2eaff0]/0 group-hover:bg-[#2eaff0]/20 mix-blend-overlay transition-colors duration-500" />
                </div>
              </div>

              {/* Text Side */}
              <div className="space-y-4">
                <h4 className="text-3xl font-bold uppercase tracking-wide
                  text-gray-900 dark:text-white">
                  Viraj Ratra
                </h4>
                <p className="font-medium tracking-widest uppercase text-sm text-[#2eaff0]">
                  Managing Director
                </p>
                <p className="text-lg font-light leading-relaxed mt-4
                  text-gray-500 dark:text-neutral-400">
                  A dedicated professional with over 12 years of hands-on experience in the event management industry, driving execution without compromise.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. TRANSFORMATIVE CREATIVITY (scroll text)
      ========================================= */}
      <section
        ref={textAnimSectionRef}
        className="relative h-[60vh] md:h-screen w-full flex flex-col justify-center items-center py-20 overflow-hidden
          bg-gray-50 dark:bg-black"
      >
        {/* Solid text layer (background) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none">
          <h2 className="text-top text-[18vw] md:text-[14vw] font-black uppercase leading-none whitespace-nowrap -ml-[40%]
            text-gray-900 dark:text-white">
            Transformative
          </h2>
          <h2 className="text-bottom text-[18vw] md:text-[14vw] font-black uppercase leading-none whitespace-nowrap -mr-[40%]
            text-gray-900 dark:text-white">
            Creativity
          </h2>
        </div>

        {/* Circle image */}
        <div className="relative z-10 w-56 h-56 md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] dark:shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            alt="Creativity"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Outlined text layer (foreground) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 pointer-events-none">
          <h2
            className="text-top text-[18vw] md:text-[14vw] font-black uppercase leading-none whitespace-nowrap text-transparent -ml-[40%]"
            style={{ WebkitTextStroke: `2px ${strokeColor}` }}
          >
            Transformative
          </h2>
          <h2
            className="text-bottom text-[18vw] md:text-[14vw] font-black uppercase leading-none whitespace-nowrap text-transparent -mr-[40%]"
            style={{ WebkitTextStroke: `2px ${strokeColor}` }}
          >
            Creativity
          </h2>
        </div>
      </section>

      {/* =========================================
          4. IMPACTS PEOPLE (Fan Animation)
      ========================================= */}
      <section ref={fanSectionRef} className="py-32 md:py-48 px-6 container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Spinning Fan */}
          <div className="flex justify-center md:justify-start">
            <div className="w-72 h-72 md:w-[500px] md:h-[500px]">
              <svg
                ref={fanRef}
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-2xl
                  fill-gray-900 dark:fill-white"
              >
                <path d="M 50 50 L 50 5 A 45 45 0 0 1 95 50 Z" />
                <path d="M 50 50 L 95 50 A 45 45 0 0 1 50 95 Z" />
                <path d="M 50 50 L 50 95 A 45 45 0 0 1 5 50 Z" />
                <path d="M 50 50 L 5 50 A 45 45 0 0 1 50 5 Z" />
              </svg>
            </div>
          </div>

          {/* Text Block */}
          <div className="space-y-6">
            <span className="text-sm md:text-base font-bold uppercase tracking-widest
              text-gray-400 dark:text-neutral-500">
              Transformative Creativity
            </span>
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter
              text-gray-900 dark:text-white">
              Impacts <br /> People
            </h2>
            <p className="text-xl md:text-2xl max-w-lg mt-8 mb-12 leading-relaxed
              text-gray-600 dark:text-neutral-300">
              Ideas that move people by generating powerful cultural conversation and inviting people to join in.
            </p>
            <button className="px-10 py-4 font-bold uppercase tracking-widest rounded-full transition-colors duration-300
              bg-gray-900 text-white hover:bg-[#2eaff0]
              dark:bg-white dark:text-black dark:hover:bg-[#2eaff0]">
              View Work
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
