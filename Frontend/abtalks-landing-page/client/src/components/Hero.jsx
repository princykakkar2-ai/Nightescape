import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4">
        Code consistently. Build publicly.{' '}
        <span className="block text-purple-600 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Get noticed.
        </span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-medium">
        Join India's premier coding community for college students to learn, build, and accelerate your tech career through verified proof of work.
      </p>
    </section>
  );
};

export default Hero;