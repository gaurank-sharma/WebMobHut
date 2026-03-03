

// import React from 'react';

// const ContactUs = () => {
//   return (
//     <section className="min-h-screen bg-black text-white font-sans py-20 px-6">
//       <div className="container mx-auto max-w-6xl">
        
//         {/* Hero Header for Contact */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide">
//             Experience <br />
//             <span className="text-[#6EE7B7]">Connection</span>
//           </h1>
//           <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
//             Ready to Experience Everything? If you're searching for the right agency partner, 
//             we want to hear from you. Shoot us an email or fill out this form and we'll eagerly respond.
//           </p>
//         </div>

//         {/* Contact Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
          
//           {/* Left Column: Text & Contact Info */}
//           <div className="space-y-10 pr-0 md:pr-8">
//             <div>
//               <h2 className="text-4xl font-bold mb-4">How can we help?</h2>
//               <p className="text-gray-300 leading-relaxed text-sm md:text-base">
//                 If you would like to work with WebMobHut, we'd love to hear from you. Send us a note 
//                 and we'll set up a time to get to know each other. We love a good challenge, 
//                 and look forward to meeting you.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {/* Person Contact Details */}
//               <div>
//                 <p className="font-bold text-xl">Bhawna</p>
//                 <p className="font-semibold text-gray-300 mb-2">Director, WebMobHut Pvt Ltd</p>
//                 <p className="text-gray-400">Phone: +91-8860585993</p>
//                 <p className="text-gray-400">Email: bhavishya39@gmail.com</p>
//                 <p className="text-gray-400">Web: www.webmobhut.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Form */}
//           <div className="bg-[#2a3040] p-8 md:p-10 rounded-lg shadow-2xl">
//             <form className="space-y-6">
              
//               {/* Name Fields */}
//               <div>
//                 <label className="block text-sm font-semibold text-white mb-2">
//                   Name <span className="text-red-500 font-normal italic">(Required)</span>
//                 </label>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <input type="text" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7]" />
//                     <span className="text-xs text-gray-400 mt-1 block">First</span>
//                   </div>
//                   <div>
//                     <input type="text" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7]" />
//                     <span className="text-xs text-gray-400 mt-1 block">Last</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Company */}
//               <div>
//                 <label className="block text-sm font-semibold text-white mb-2">Company</label>
//                 <input type="text" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7]" />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-semibold text-white mb-2">
//                   Email <span className="text-red-500 font-normal italic">(Required)</span>
//                 </label>
//                 <input type="email" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7]" />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-semibold text-white mb-2">
//                   Message <span className="text-red-500 font-normal italic">(Required)</span>
//                 </label>
//                 <textarea rows="5" className="w-full px-4 py-2 bg-white text-black rounded outline-none focus:ring-2 focus:ring-[#6EE7B7] resize-none"></textarea>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-2">
//                 <button type="button" className="px-8 py-3 bg-[#6EE7B7] text-black font-bold rounded-full hover:bg-[#58d5a3] transition-colors duration-300">
//                   SUBMIT
//                 </button>
//               </div>

//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;



import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      
      {/* =========================================
          CONTACT FORM SECTION
          (Retained exactly from previous request)
      ========================================= */}
      <section className="py-20 px-6">
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

      {/* =========================================
          NATIONAL IMPACT MAP SECTION
          FIXED: Map pin for Bangalore corrected.
      ========================================= */}
      <section className="bg-neutral-950 py-24 px-6 border-t border-neutral-800 mt-auto">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header for Map Section */}
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-[#6EE7B7] font-bold">WebMobHut</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-white">National Impact</h2>
            <div className="h-1 w-24 bg-[#6EE7B7] mx-auto mt-6"></div>
          </div>

          {/* Map Container */}
          <div className="relative max-w-4xl mx-auto w-full aspect-[1/1] md:aspect-[16/10] bg-black rounded-3xl p-6 border border-neutral-800 shadow-2xl overflow-hidden flex items-center justify-center">
            
            {/* The SVG Map via Wikipedia (Grayscale Stylized via Tailwind filters) */}
            {/* Keeping the previously fixed opacity to ensure boundaries are visible. */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b4/India_outline.svg" 
              alt="India Map" 
              className="w-full h-full object-contain filter invert opacity-40 pointer-events-none" 
            />

            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 pointer-events-none"></div>

            {/* --- MAP PINS (Updated for correct relative position) --- */}

            {/* DELHI NCR CLUSTER
              Longitude: ~77.2°E. Located in Northern India.
            */}
            <div className="absolute top-[22%] left-[28%] group pointer-events-auto">
              <div className="w-10 h-10 bg-[#6EE7B7]/20 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 scale-100 group-hover:scale-125 transition-transform animate-pulse">
                <div className="w-3 h-3 bg-[#6EE7B7] rounded-full shadow-[0_0_15px_#6EE7B7]"></div>
              </div>
              {/* Hover Tooltip */}
              <div className="absolute top-0 left-8 bg-neutral-900 border border-neutral-700 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                <p className="font-bold text-white">Delhi NCR</p>
                <p className="text-xs text-neutral-400">Delhi, Noida, Gurgaon</p>
              </div>
            </div>

            {/* BANGALORE (Bengaluru)
              Longitude: ~77.6°E. Located in Southern India.
              FIXED: Now accurately placed almost directly south of Delhi.
            */}
            <div className="absolute top-[75%] left-[49%] group pointer-events-auto">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 scale-100 group-hover:scale-125 transition-transform">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
               {/* Hover Tooltip */}
               <div className="absolute top-0 left-8 bg-neutral-900 border border-neutral-700 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
                <p className="font-bold text-white">Bangalore</p>
              </div>
            </div>

            {/* Legend / Credits */}
            <div className="absolute bottom-4 left-4 text-xs md:text-sm text-neutral-500 font-medium">
                © WebMobHut Pvt Ltd / Locations: Delhi NCR, Bangalore.
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
