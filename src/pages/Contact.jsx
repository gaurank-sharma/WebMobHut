// import React from 'react';
// import { MapPin, Phone, Mail } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
//           <p className="text-gray-500">We'd love to hear from you.</p>
//         </div>

//         <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
//             <div className="p-10 bg-gray-900 text-white flex flex-col justify-center">
//                 <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
//                 <div className="space-y-6">
//                     <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
//                             <MapPin size={20} />
//                         </div>
//                         <div>
//                             <p className="font-bold">Address</p>
//                             <p className="text-gray-400">New Delhi, India</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
//                             <Phone size={20} />
//                         </div>
//                         <div>
//                             <p className="font-bold">Phone</p>
//                             <p className="text-gray-400">+91 98765 43210</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
//                             <Mail size={20} />
//                         </div>
//                         <div>
//                             <p className="font-bold">Email</p>
//                             <p className="text-gray-400">contact@webmobhut.com</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="p-10">
//                 <form className="space-y-4">
//                     <div>
//                         <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
//                         <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
//                         <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
//                         <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"></textarea>
//                     </div>
//                     <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
//                         Send Message
//                     </button>
//                 </form>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from 'react';

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-black text-white font-sans py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Hero Header for Contact */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide">
            Experience <br />
            <span className="text-[#6EE7B7]">Connection</span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Ready to Experience Everything? If you're searching for the right agency partner, 
            we want to hear from you. Shoot us an email or fill out this form and we'll eagerly respond.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Text & Contact Info */}
          <div className="space-y-10 pr-0 md:pr-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">How can we help?</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                If you would like to work with WebMobHut, we'd love to hear from you. Send us a note 
                and we'll set up a time to get to know each other. We love a good challenge, 
                and look forward to meeting you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Person Contact Details */}
              <div>
                <p className="font-bold text-xl">Bhawna</p>
                <p className="font-semibold text-gray-300 mb-2">Director, WebMobHut Pvt Ltd</p>
                <p className="text-gray-400">Phone: +91-8860585993</p>
                <p className="text-gray-400">Email: bhavishya39@gmail.com</p>
                <p className="text-gray-400">Web: www.webmobhut.com</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#2a3040] p-8 md:p-10 rounded-lg shadow-2xl">
            <form className="space-y-6">
              
              {/* Name Fields */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Name <span className="text-red-500 font-normal italic">(Required)</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="text" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7]" />
                    <span className="text-xs text-gray-400 mt-1 block">First</span>
                  </div>
                  <div>
                    <input type="text" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7]" />
                    <span className="text-xs text-gray-400 mt-1 block">Last</span>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Company</label>
                <input type="text" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7]" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email <span className="text-red-500 font-normal italic">(Required)</span>
                </label>
                <input type="email" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7]" />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message <span className="text-red-500 font-normal italic">(Required)</span>
                </label>
                <textarea rows="5" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7] resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button type="button" className="px-8 py-3 bg-[#6EE7B7] text-black font-bold rounded-full hover:bg-[#58d5a3] transition-colors duration-300">
                  SUBMIT
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
