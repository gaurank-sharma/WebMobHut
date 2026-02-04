// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import { servicesData } from '../data';

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[80vh] flex items-center bg-gray-900">
//         <img 
//           src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//           alt="Event Background" 
//         />
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
//               Executing Events <br/> Without Compromise.
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-lg">
//               Specializing in mall activations, retail décor, and corporate experiences across India.
//             </p>
//             <div className="flex gap-4">
//               <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">
//                 Start Planning
//               </Link>
//               <Link to="/services" className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition">
//                 Our Services
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Intro Snippet */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-heading font-bold mb-6">Welcome to WebMobHut</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             We believe in structured planning, timely delivery, and execution without compromise. 
//             Led by Viraj Ratra, we are your trusted partner for impactful and professionally managed events.
//           </p>
//         </div>
//       </section>

//       {/* Services Preview */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="flex justify-between items-end mb-12">
//             <h2 className="text-3xl font-heading font-bold">What We Do</h2>
//             <Link to="/services" className="text-blue-600 font-semibold flex items-center hover:underline">
//               View All <ArrowRight size={16} className="ml-2" />
//             </Link>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {servicesData.slice(0, 3).map((service) => (
//               <Link key={service.id} to={`/services/${service.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
//                 <div className="h-48 overflow-hidden">
//                   <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
//                   <p className="text-gray-500 text-sm line-clamp-2">{service.shortDesc}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data';
import WorkSlider from '../components/WorkSlider'; // Import Slider

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Event Background" 
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Executing Events <br/> Without Compromise.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Specializing in mall activations, retail décor, and corporate experiences across India.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">
                Start Planning
              </Link>
              <Link to="/services" className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Welcome to WebMobHut</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe in structured planning, timely delivery, and execution without compromise. 
            Led by Viraj Ratra, we are your trusted partner for impactful and professionally managed events.
          </p>
        </div>
      </section>

      {/* --- ADDED: Work Slider Section --- */}
      <WorkSlider />
      {/* ---------------------------------- */}

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-heading font-bold">What We Do</h2>
            <Link to="/services" className="text-blue-600 font-semibold flex items-center hover:underline">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <Link key={service.id} to={`/services/${service.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{service.shortDesc}</p>
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