

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   // Track scroll position to change navbar background from transparent to solid dark
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Removed Contact from main array to render it as a distinct CTA button
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Gallery', path: '/gallery' },
//   ];

//   return (
//     <nav 
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-black/90 backdrop-blur-md border-b border-neutral-900 py-4 shadow-2xl' 
//           : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        
//         {/* =========================================
//             LOGO SECTION
//         ========================================= */}
//         <Link 
//           to="/" 
//           className="relative z-50 flex items-center gap-3 group"
//           onClick={() => setIsOpen(false)}
//         >
//           <img 
//             src="/wmh-logo.png" 
//             alt="WebMobHut Logo" 
//             className="h-10 md:h-12 w-auto object-contain bg-white/5 p-1.5 rounded-lg border border-white/5 group-hover:border-[#2eaff0]/30 transition-colors" 
//           />
//           {/* Optional Text next to logo if desired - currently hidden on small screens */}
//           <span className="text-white font-bold tracking-widest uppercase text-sm hidden sm:block group-hover:text-[#2eaff0] transition-colors">
//             WebMobHut
//           </span>
//         </Link>

//         {/* =========================================
//             DESKTOP MENU
//         ========================================= */}
//         <div className="hidden md:flex items-center space-x-10">
//           <div className="flex space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${
//                   isActive(link.path) 
//                     ? 'text-[#2eaff0] drop-shadow-[0_0_10px_rgba(46,175,240,0.5)]' 
//                     : 'text-neutral-400 hover:text-white'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Call to Action Button */}
//           <Link
//             to="/contact"
//             className="px-6 py-2.5 bg-[#2eaff0] text-black font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(46,175,240,0.2)]"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* =========================================
//             MOBILE TOGGLE BUTTON
//         ========================================= */}
//         <button 
//           className="md:hidden relative z-50 text-white hover:text-[#2eaff0] transition-colors p-2" 
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={32} /> : <Menu size={32} />}
//         </button>
//       </div>

//       {/* =========================================
//           MOBILE MENU OVERLAY
//       ========================================= */}
//       <div 
//         className={`md:hidden fixed inset-0 bg-[#050505] backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
//           isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-8 w-full px-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`text-2xl font-medium tracking-widest uppercase w-full text-center py-4 border-b border-neutral-900 transition-colors ${
//                 isActive(link.path) 
//                   ? 'text-[#2eaff0]' 
//                   : 'text-neutral-400 hover:text-white'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
          
//           {/* Mobile Contact Button */}
//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className="mt-8 px-10 py-4 bg-[#2eaff0] text-black font-bold tracking-widest text-sm uppercase rounded-full w-full max-w-xs text-center shadow-[0_0_20px_rgba(46,175,240,0.3)]"
//           >
//             Get In Touch
//           </Link>
//         </div>
        
//         {/* Decorative Bottom Glow in Mobile Menu */}
//         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#2eaff0]/10 to-transparent pointer-events-none"></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Track scroll position to change navbar background from transparent to solid dark
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <>
      {/* BULLETPROOF FIXED POSITIONING */}
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 py-4 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-neutral-800 shadow-2xl' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          
          {/* =========================================
              LOGO SECTION
          ========================================= */}
          <Link 
            to="/" 
            className="relative z-50 flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <img 
              src="/wmh-logo.png" 
              alt="WebMobHut Logo" 
              className="h-10 md:h-12 w-auto object-contain bg-white/5 p-1.5 rounded-lg border border-white/5 group-hover:border-[#2eaff0]/30 transition-colors" 
            />
            <span className="text-white font-bold tracking-widest uppercase text-sm hidden sm:block group-hover:text-[#2eaff0] transition-colors">
              WebMobHut
            </span>
          </Link>

          {/* =========================================
              DESKTOP MENU
          ========================================= */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive(link.path) 
                      ? 'text-[#2eaff0] drop-shadow-[0_0_10px_rgba(46,175,240,0.5)]' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Call to Action Button */}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#2eaff0] text-black font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(46,175,240,0.2)]"
            >
              Contact
            </Link>
          </div>

          {/* =========================================
              MOBILE TOGGLE BUTTON
          ========================================= */}
          <button 
            className="md:hidden relative z-50 text-white hover:text-[#2eaff0] transition-colors p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* =========================================
            MOBILE MENU OVERLAY
        ========================================= */}
        <div 
          className={`md:hidden fixed inset-0 bg-[#050505] backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'
          }`}
        >
          <div className="flex flex-col items-center space-y-8 w-full px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium tracking-widest uppercase w-full text-center py-4 border-b border-neutral-900 transition-colors ${
                  isActive(link.path) 
                    ? 'text-[#2eaff0]' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-10 py-4 bg-[#2eaff0] text-black font-bold tracking-widest text-sm uppercase rounded-full w-full max-w-xs text-center shadow-[0_0_20px_rgba(46,175,240,0.3)]"
            >
              Get In Touch
            </Link>
          </div>
          
          {/* Decorative Bottom Glow */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#2eaff0]/10 to-transparent pointer-events-none"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
