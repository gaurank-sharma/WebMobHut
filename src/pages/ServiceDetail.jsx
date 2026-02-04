import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <div className="pb-20">
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
            <Link to="/services" className="text-gray-400 hover:text-white flex items-center mb-6">
                <ArrowLeft size={16} className="mr-2"/> Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-bold">{service.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
            <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg" />
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">{service.fullDesc}</p>
            
            <h3 className="text-xl font-bold mb-4">What We Include:</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <CheckCircle className="text-blue-500 mr-3 mt-1 shrink-0" size={20} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Sidebar Call to Action */}
        <div className="md:col-span-1">
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Interested in this service?</h3>
                <p className="mb-6 text-blue-100">Contact us today to get a quote or discuss your requirements.</p>
                <Link to="/contact" className="block w-full py-3 bg-white text-blue-600 text-center rounded-lg font-bold hover:bg-gray-100 transition">
                    Get a Quote
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;