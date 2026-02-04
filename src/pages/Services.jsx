import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data';

const Services = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive solutions for retail, corporate, and social engagements.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.shortDesc}</p>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center text-blue-600 font-bold hover:underline mt-auto"
                >
                  View Details <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;