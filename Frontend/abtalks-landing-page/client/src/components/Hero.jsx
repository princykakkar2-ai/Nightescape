import React from 'react';

const Hero = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#27322c] tracking-tight leading-tight mb-4">
        Code consistently. Build publicly.{' '}
        <span className="block text-[#2f5d3d] mt-1">
          Get noticed.
        </span>
      </h1>
      <p className="text-base sm:text-lg text-[#607367] max-w-2xl mx-auto mb-6 font-medium leading-relaxed">
        Join India's premier coding community for college students to learn, build, and accelerate your tech career through verified proof of work.
      </p>
    </section>
  );
};

export default Hero;