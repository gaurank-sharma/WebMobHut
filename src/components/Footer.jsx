import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
      <div>
        <h3 className="text-2xl font-bold font-heading mb-4">WebMobHut.</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Creating experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Contact Info</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li className="flex items-start gap-3">
            <MapPin size={18} className="text-blue-500 shrink-0" />
            <span>New Delhi, India</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-blue-500 shrink-0" />
            <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-blue-500 shrink-0" />
            <span>contact@webmobhut.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-6 pt-8 text-center text-gray-600 text-xs">
      &copy; {new Date().getFullYear()} WebMobHut Pvt Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;