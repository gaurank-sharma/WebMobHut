import React from 'react';

const About = () => {
  return (
    <div className="pt-10 pb-24">
      {/* Header */}
      <section className="bg-blue-600 py-20 mb-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Who We Are</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Precision, creativity, and operational excellence.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" 
            alt="Team Meeting" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">12 Years of Excellence</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            WebMobHut Pvt Ltd is an event management company specializing in mall decorations, retail activations, and corporate events across shopping complexes, marketplaces, and commercial spaces.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With a strong focus on brand visibility, consumer engagement, and flawless execution, we create experiences that enhance footfall, engagement, and recall for malls and corporate clients alike.
          </p>
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
            <p className="font-bold text-gray-900">Led by Viraj Ratra</p>
            <p className="text-gray-500 text-sm">A dedicated professional with over 12 years of hands-on experience in the event management industry.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;