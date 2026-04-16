import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggle } = useTheme();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Gallery', path: '/gallery' },
  ];

  /* ── Derived nav bar background ── */
  const navBg = scrolled
    ? isDark
      ? 'bg-black/95 backdrop-blur-xl border-b border-neutral-800 shadow-2xl'
      : 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md'
    : 'bg-transparent border-b border-transparent';

  return (
    <>
      {/* =========================================
          MAIN NAVIGATION BAR
      ========================================= */}
      <nav className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 py-4 ${navBg}`}>
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="relative z-50 flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/wmh-logo.png"
              alt="WebMobHut Logo"
              className={`h-10 md:h-12 w-auto object-contain p-1.5 rounded-lg border transition-colors
                ${isDark
                  ? 'bg-white/5 border-white/5 group-hover:border-[#2eaff0]/30'
                  : 'bg-gray-100 border-gray-200 group-hover:border-[#2eaff0]/50'}`}
            />
            <span className={`font-bold tracking-widest uppercase text-sm hidden sm:block transition-colors group-hover:text-[#2eaff0]
              ${isDark ? 'text-white' : 'text-gray-900'}`}>
              WebMobHut
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive(link.path)
                      ? 'text-[#2eaff0] drop-shadow-[0_0_10px_rgba(46,175,240,0.5)]'
                      : isDark
                        ? 'text-neutral-400 hover:text-white'
                        : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`p-2 rounded-full border transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'border-neutral-700 text-neutral-400 hover:border-[#2eaff0] hover:text-[#2eaff0]'
                  : 'border-gray-300 text-gray-500 hover:border-[#2eaff0] hover:text-[#2eaff0]'
              }`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#2eaff0] text-black font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(46,175,240,0.2)]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3 relative z-50">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`p-2 rounded-full border transition-all duration-300 ${
                isDark
                  ? 'border-neutral-700 text-neutral-400 hover:border-[#2eaff0] hover:text-[#2eaff0]'
                  : 'border-gray-300 text-gray-500 hover:border-[#2eaff0] hover:text-[#2eaff0]'
              }`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className={`transition-colors p-2 ${isDark ? 'text-white hover:text-[#2eaff0]' : 'text-gray-900 hover:text-[#2eaff0]'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================
          MOBILE MENU OVERLAY
      ========================================= */}
      <div
        className={`md:hidden fixed inset-0 backdrop-blur-xl z-[9998] overflow-y-auto transition-all duration-500 ease-in-out ${
          isDark ? 'bg-[#050505]' : 'bg-white'
        } ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 w-full px-6 py-24 relative">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-medium tracking-widest uppercase w-full text-center py-4 border-b transition-colors ${
                isActive(link.path)
                  ? 'text-[#2eaff0]'
                  : isDark
                    ? 'text-neutral-400 hover:text-white border-neutral-900'
                    : 'text-gray-500 hover:text-gray-900 border-gray-100'
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
        <div className={`fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t pointer-events-none z-[9999] ${
          isDark ? 'from-[#2eaff0]/10 to-transparent' : 'from-[#2eaff0]/5 to-transparent'
        }`} />
      </div>
    </>
  );
};

export default Navbar;
