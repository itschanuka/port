import React from 'react';
import { Download, Github, Linkedin } from 'lucide-react';

const Hero = ({ typedText }) => (
  <section id="home" className="flex items-center justify-center min-h-screen px-4 pt-24 pb-16 sm:px-6 md:pt-20 md:pb-0">
    <div className="grid items-center w-full max-w-6xl gap-10 mx-auto md:grid-cols-2 lg:gap-12">
      <div className="order-2 space-y-5 text-center md:order-1 md:text-left md:space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-purple-600 sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-purple-600">Chanuka Keerthisingha</span>
        </h1>

        <div className="min-h-8 text-xl font-semibold text-gray-300 sm:text-2xl md:text-3xl">
          <span className="text-purple-500">{typedText}</span>
        </div>
        <p className="max-w-lg mx-auto text-base leading-relaxed text-gray-400 sm:text-lg md:mx-0">
          Full Stack Software Engineer specialising in business systems, AI integration and SaaS products. Built production systems with Next.js, TypeScript, Node.js, PostgreSQL and Supabase covering role-based access, automated workflows, AI assisted features and full deployment pipelines.
        </p>

        <div className="flex justify-center space-x-6 md:justify-start">
          <a href="https://github.com/itschanuka" className="text-2xl text-gray-400 transition-colors duration-300 hover:text-purple-600">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/chanuka-keerthisingha/" className="text-2xl text-gray-400 transition-colors duration-300 hover:text-purple-600">
            <Linkedin />
          </a>
        </div>

        <a href="/ChanukaCV.pdf" download className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-800 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25">
          <Download size={18} />
          Download CV
        </a>
      </div>

      <div className="flex justify-center order-1 md:order-2">
        <div className="relative">
          <div className="w-56 h-56 transition-transform duration-500 transform shadow-2xl sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-purple-600/25 rotate-3 hover:rotate-0"></div>
          <img
            src="/image.png"
            alt="Profile"
            className="absolute top-0 left-0 object-cover w-56 h-56 transition-transform duration-500 transform border-4 border-purple-600 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl -rotate-3 hover:rotate-0"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
