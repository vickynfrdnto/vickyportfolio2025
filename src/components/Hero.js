import React from 'react';
import vickyImage from '../assets/vickyprofile.jpeg';
import HeroBackground3D from './HeroBackground3D';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <HeroBackground3D />
      <div className="container mx-auto px-6 py-20 md:py-0 md:flex items-center justify-between relative z-10">
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Vicky Nanda Ferdianto</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400">Data Analyst & Frontend Developer</h2>
          <p className="text-lg md:text-xl max-w-lg">
            Transforming complex data into actionable insights with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">Hire Me</a>
            <a href="#projects" className="px-6 py-3 border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-lg font-medium transition">View Work</a>
          </div>
          <div className="flex space-x-4 justify-center md:justify-start pt-4">
            <a href="https://linkedin.com/in/vickynfrdnto" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition"><i className="fab fa-linkedin"></i></a>
            <a href="https://instagram.com/vickynfrdnto" className="text-2xl hover:text-blue-400 transition"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 relative flex justify-center">
          <div className="w-64 h-64 xl:w-80 xl:h-80 floating">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-10 blur-xl"></div>
              <div className="absolute inset-0 rounded-full bg-purple-600 opacity-10 blur-xl"></div>
              <div className="absolute inset-0 rounded-full bg-pink-600 opacity-10 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden flex items-center justify-center p-1">
                <img src={vickyImage} alt="Vicky Nanda Ferdianto" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;