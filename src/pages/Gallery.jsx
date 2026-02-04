import React, { useState } from 'react';
import { portfolioData } from '../data';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gray-900 py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
             A visual journey through our executions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioData.map((item) => (
            <div 
              key={item.id} 
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square"
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={item.src} 
                alt="Gallery Item" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" size={32} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-h-[90vh] max-w-full rounded-md shadow-2xl" 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;