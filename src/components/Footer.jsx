import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 md:pt-32 pb-10 border-t font-sans
      bg-white border-gray-100
      dark:bg-black dark:border-neutral-900">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Top Section: Logo & Link Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 md:mb-32">

          {/* Left Column: Logo & Tagline */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/wmh-logo.png"
                alt="WebMobHut Logo"
                className="h-16 md:h-20 w-auto object-contain p-2 rounded-xl
                  bg-gray-100 dark:bg-white/5"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wide
                  text-gray-900 dark:text-white">WEBMOBHUT</span>
                <span className="text-xs tracking-[0.2em] uppercase
                  text-gray-400 dark:text-neutral-500">event management</span>
              </div>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:w-2/3 w-full grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">

            {/* Column 1: About Us */}
            <div>
              <h4 className="font-semibold tracking-wide mb-6 text-[#2eaff0]">About Us</h4>
              <ul className="space-y-4 text-sm font-light
                text-gray-600 dark:text-neutral-300">
                <li><Link to="/about" className="hover:text-[#2eaff0] transition-colors">About us</Link></li>
                <li><Link to="/gallery" className="hover:text-[#2eaff0] transition-colors">Work</Link></li>
                <li><Link to="/services" className="hover:text-[#2eaff0] transition-colors">Services</Link></li>
                <li><Link to="/clients" className="hover:text-[#2eaff0] transition-colors">Our Clients</Link></li>
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div>
              <h4 className="font-semibold tracking-wide mb-6 text-[#2eaff0]">Legal</h4>
              <ul className="space-y-4 text-sm font-light
                text-gray-600 dark:text-neutral-300">
                <li><Link to="/privacy" className="hover:text-[#2eaff0] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-[#2eaff0] transition-colors">Terms &amp; Conditions</Link></li>
                <li><Link to="/contact" className="hover:text-[#2eaff0] transition-colors">Raise a concern</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-semibold tracking-wide mb-6 text-[#2eaff0]">Contact</h4>
              <ul className="space-y-4 text-sm font-light
                text-gray-600 dark:text-neutral-300">
                <li><Link to="/contact" className="hover:text-[#2eaff0] transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-[#2eaff0] transition-colors">Careers</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t gap-6
          border-gray-200 dark:border-neutral-800">

          {/* Copyright Text */}
          <div className="text-xs md:text-sm font-light text-center md:text-left
            text-gray-400 dark:text-neutral-500">
            Copyright ©{new Date().getFullYear()} WebMobHut Pvt Ltd. All rights reserved. <br className="hidden md:block" />
            WebMobHut and its logo are registered trademarks.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { href: 'https://linkedin.com', Icon: Linkedin, fill: true },
              { href: 'https://instagram.com', Icon: Instagram, fill: false },
              { href: 'https://facebook.com', Icon: Facebook, fill: true },
              { href: 'https://youtube.com', Icon: Youtube, fill: true },
            ].map(({ href, Icon, fill }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#2eaff0] flex items-center justify-center text-black hover:bg-gray-900 dark:hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={18} fill={fill ? 'currentColor' : 'none'} strokeWidth={fill ? 0 : 2} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
