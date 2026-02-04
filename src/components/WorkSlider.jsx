// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { portfolioData } from '../data';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// const WorkSlider = () => {
//   // Take first 10 images for the slider
//   const sliderImages = portfolioData.slice(0, 10);

//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
//         <div>
//           <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Portfolio</span>
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Recent Executions</h2>
//         </div>
//         <Link to="/gallery" className="hidden md:flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors">
//           View Full Gallery <ArrowRight size={20} className="ml-2" />
//         </Link>
//       </div>

//       <div className="pl-6 md:pl-0 container mx-auto">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1.2}
//           centeredSlides={false}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true, dynamicBullets: true }}
//           breakpoints={{
//             640: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 3.5 },
//           }}
//           className="pb-12 !overflow-visible"
//         >
//           {sliderImages.map((item) => (
//             <SwiperSlide key={item.id} className="h-full">
//               <div className="group relative rounded-xl overflow-hidden h-[300px] md:h-[400px] shadow-lg cursor-grab active:cursor-grabbing">
//                 <img 
//                   src={item.src} 
//                   alt="Portfolio Work" 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 {/* Subtle dark gradient at bottom */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
      
//       <div className="container mx-auto px-6 mt-8 md:hidden">
//          <Link to="/gallery" className="block w-full py-3 border border-gray-300 text-center rounded-lg font-bold text-gray-700">
//             View All Projects
//          </Link>
//       </div>
//     </section>
//   );
// };

// export default WorkSlider;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { portfolioData } from '../data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const WorkSlider = () => {
  // Take first 10 images for the slider
  const sliderImages = portfolioData.slice(0, 10);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">Recent Executions</h2>
        </div>
        <Link to="/gallery" className="hidden md:flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors">
          View Full Gallery <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>

      {/* FIX: Added 'container mx-auto px-6' to align first image with text. 
         The Swiper has '!overflow-visible' to let images bleed to the right edge. 
      */}
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.5 },
          }}
          className="pb-16 !overflow-visible" 
        >
          {sliderImages.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="group relative rounded-2xl overflow-hidden h-[350px] md:h-[450px] shadow-lg cursor-grab active:cursor-grabbing">
                <img 
                  src={item.src} 
                  alt="Portfolio Work" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {/* Video Icon if needed */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white border border-white/30">
                    <PlayCircle size={20} />
                  </div>
                )}

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-bold tracking-wider uppercase rounded-full mb-3">
                    {item.category}
                  </span>
                  <p className="text-white font-medium text-lg md:text-xl line-clamp-1">
                    Event Execution {item.id}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Mobile View All Button */}
      <div className="container mx-auto px-6 mt-8 md:hidden">
         <Link to="/gallery" className="block w-full py-4 border border-gray-200 text-center rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">
            View All Projects
         </Link>
      </div>
    </section>
  );
};

export default WorkSlider;