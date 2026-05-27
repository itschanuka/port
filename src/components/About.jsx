import React from 'react';
import { Code, Github, GraduationCap, Linkedin, User } from 'lucide-react';

const About = ({
  experienceTab,
  setExperienceTab,
  technicalSkills,
  softSkills,
  educationData,
  experienceData,
}) => (
  <section id="about" className="px-4 py-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
        About Me
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-400/50 hover:transform hover:scale-105">
          <div className="flex items-center mb-6">
            <User className="mr-3 text-purple-600" size={24} />
            <h3 className="text-2xl font-bold text-white">Introduction</h3>
          </div>

          <p className="leading-relaxed text-white/80">
            I'm a Full Stack Software Engineer based in Sri Lanka with 2+ years of hands-on experience building and deploying complete web applications from the ground up. My work spans the full product lifecycle - from gathering requirements and designing database models to building interfaces, wiring up APIs, and shipping to production. I've developed real-world platforms for dealership operations and contractor workflows, taking each from a blank canvas to a live, deployed product used by actual businesses.
            <br /><br />
            Beyond writing code, I take a product-thinking approach to everything I build. Before starting development, I conduct face-to-face discussions with business owners, analyse operational pain points, and map out workflows - so the software I build solves genuine problems rather than just fulfilling a spec. I've implemented complex features including multi-tenant architectures, role-based access control, AI-assisted query tools, automated reporting, and secure payment workflows across my projects.
            <br /><br />
            I'm now focused on growing within a collaborative engineering team where I can contribute to larger, more complex systems while continuing to sharpen my skills. I'm passionate about writing clean, well-structured code, building software that genuinely helps people, and learning from engineers who've tackled problems at scale. If you're looking for someone who ships real things and cares deeply about the craft, let's connect.
          </p>

          <div className="flex mt-6 space-x-4">
            <a href="https://github.com/itschanuka" target="_blank" rel="noopener noreferrer" className="transition-colors text-white/60 hover:text-purple-600">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/chanuka-keerthisingha/" target="_blank" rel="noopener noreferrer" className="transition-colors text-white/60 hover:text-purple-600">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-600/50 hover:transform hover:scale-105">
          <div className="flex items-center mb-6">
            <Code className="mr-3 text-purple-600" size={24} />
            <h3 className="text-2xl font-bold text-white">Skills</h3>
          </div>

          <div className="space-y-4">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white/80">{skill.name}</span>
                  <span className="text-sm text-purple-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10">
                  <div className="h-2 transition-all duration-1000 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {softSkills.map((skill, index) => (
              <span key={index} className="px-3 py-1 text-sm text-purple-400 border rounded-full bg-purple-700/20 border-purple-500/30">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-600/50 hover:transform hover:scale-105">
          <div className="flex items-center mb-6">
            <GraduationCap className="mr-3 text-purple-600" size={24} />
            <h3 className="text-2xl font-bold text-white">Background</h3>
          </div>

          <div className="flex p-1 mb-6 rounded-lg bg-white/5">
            <button
              onClick={() => setExperienceTab('education')}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                experienceTab === 'education'
                  ? ' bg-gradient-to-r from-purple-600 to-pink-900 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setExperienceTab('experience')}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                experienceTab === 'experience'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-900 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Experience
            </button>
          </div>

          <div className="space-y-6">
            {(experienceTab === 'education' ? educationData : experienceData).map((item, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-purple-500/30">
                <div className="absolute top-0 w-3 h-3 bg-purple-500 rounded-full -left-2"></div>
                <div className="mb-1 text-sm font-semibold text-purple-500">{item.year}</div>
                <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                <p className="mb-2 text-sm text-purple-500">{item.institution}</p>
                <p className="text-sm text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
