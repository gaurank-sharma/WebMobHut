// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MapPin, Phone, Mail } from 'lucide-react';

// const Footer = () => (
//   <footer className="bg-gray-900 text-white pt-16 pb-8">
//     <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
//       <div>
//         <h3 className="text-2xl font-bold font-heading mb-4">WebMobHut.</h3>
//         <p className="text-gray-400 text-sm leading-relaxed">
//           Creating experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
//         </p>
//       </div>
//       <div>
//         <h4 className="text-lg font-bold mb-4">Quick Links</h4>
//         <ul className="space-y-2 text-gray-400 text-sm">
//           <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
//           <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
//           <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
//           <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
//         </ul>
//       </div>
//       <div>
//         <h4 className="text-lg font-bold mb-4">Contact Info</h4>
//         <ul className="space-y-3 text-gray-400 text-sm">
//           <li className="flex items-start gap-3">
//             <MapPin size={18} className="text-blue-500 shrink-0" />
//             <span>New Delhi, India</span>
//           </li>
//           <li className="flex items-center gap-3">
//             <Phone size={18} className="text-blue-500 shrink-0" />
//             <span>+91 98765 43210</span>
//           </li>
//           <li className="flex items-center gap-3">
//             <Mail size={18} className="text-blue-500 shrink-0" />
//             <span>contact@webmobhut.com</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <div className="container mx-auto px-6 pt-8 text-center text-gray-600 text-xs">
//       &copy; {new Date().getFullYear()} WebMobHut Pvt Ltd. All rights reserved.
//     </div>
//   </footer>
// );

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 md:pt-32 pb-10 border-t border-neutral-900 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section: Logo & Link Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 md:mb-32">
          
          {/* Left Column: Logo & Tagline */}
          <div className="lg:w-1/3">
            {/* Replace src with your actual logo path */}
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/wmh final1 (2) (1).png" 
                alt="WebMobHut Logo" 
                className="h-16 md:h-20 w-auto object-contain bg-white/5 p-2 rounded-xl" // Added a subtle background/padding in case your logo has dark text
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-wide">WEBMOBHUT</span>
                <span className="text-xs text-neutral-500 tracking-[0.2em] uppercase">event management</span>
              </div>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:w-2/3 w-full grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
            
            {/* Column 1: About Us */}
            <div>
              <h4 className="text-[#6EE7B7] font-semibold tracking-wide mb-6">About Us</h4>
              <ul className="space-y-4 text-neutral-300 text-sm font-light">
                <li><Link to="/about" className="hover:text-white transition-colors">About us</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Work</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/clients" className="hover:text-white transition-colors">Our Clients</Link></li>
                <li><Link to="/awards" className="hover:text-white transition-colors">Awards</Link></li>
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div>
              <h4 className="text-[#6EE7B7] font-semibold tracking-wide mb-6">Legal</h4>
              <ul className="space-y-4 text-neutral-300 text-sm font-light">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/csr" className="hover:text-white transition-colors">CSR Policy</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Raise a concern</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-[#6EE7B7] font-semibold tracking-wide mb-6">Contact</h4>
              <ul className="space-y-4 text-neutral-300 text-sm font-light">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-neutral-800 gap-6">
          
          {/* Copyright Text */}
          <div className="text-neutral-500 text-xs md:text-sm font-light text-center md:text-left">
            Copyright ©{new Date().getFullYear()} WebMobHut Pvt Ltd. All rights reserved. <br className="hidden md:block" />
            WebMobHut and its logo are registered trademarks.
          </div>

          {/* Social Icons (Solid Mint Green Circles) */}
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#6EE7B7] flex items-center justify-center text-black hover:bg-white hover:-translate-y-1 transition-all duration-300">
              <Linkedin size={18} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#6EE7B7] flex items-center justify-center text-black hover:bg-white hover:-translate-y-1 transition-all duration-300">
              <Instagram size={20} strokeWidth={2} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#6EE7B7] flex items-center justify-center text-black hover:bg-white hover:-translate-y-1 transition-all duration-300">
              <Facebook size={20} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#6EE7B7] flex items-center justify-center text-black hover:bg-white hover:-translate-y-1 transition-all duration-300">
              <Youtube size={22} fill="currentColor" strokeWidth={0} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
