import React from 'react';
import { Download, Github, Linkedin } from 'lucide-react';

const Hero = ({ typedText }) => (
  <section id="home" className="flex items-center justify-center min-h-screen px-6 pt-20">
    <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
      <div className="order-2 space-y-6 md:order-1 animate-fade-in">
        <h1 className="text-4xl font-bold text-purple-600 md:text-6xl">
          <span className="text-purple-600">Chanuka Keerthisingha</span>
        </h1>

        <div className="text-2xl font-semibold text-gray-300 md:text-3xl">
          <span className="text-purple-500">{typedText}</span>
        </div>
        <p className="max-w-lg text-lg leading-relaxed text-gray-400">
          Full Stack Software Engineer specialising in business systems, AI integration and SaaS products. Built production systems with Next.js, TypeScript, Node.js, PostgreSQL and Supabase covering role-based access, automated workflows, AI assisted features and full deployment pipelines.
        </p>

        <div className="flex space-x-6">
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
          <div className="w-64 h-64 transition-transform duration-500 transform shadow-2xl md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-purple-600/25 rotate-3 hover:rotate-0"></div>
          <img
            src="/image.png"
            alt="Profile"
            className="absolute top-0 left-0 object-cover w-64 h-64 transition-transform duration-500 transform border-4 border-purple-600 md:w-80 md:h-80 rounded-2xl -rotate-3 hover:rotate-0"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
