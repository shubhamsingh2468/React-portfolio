import React from 'react';

const Hero = () => {
  return (
    <section className="hero bg-gray-800 text-white py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Shubham singh</h1>
      <h2 className="text-2xl font-medium mb-4">Full-Stack developer</h2>
      <p className="text-lg mb-8">Building Full-stack development product using various types of stack.</p>
      <a href="#about-me" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">Learn More</a>
    </section>
  );
};

export default Hero;
