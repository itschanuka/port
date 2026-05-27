import React from 'react';
import { Code, Github, GraduationCap, Linkedin, User } from 'lucide-react';

const About = ({
  skillsTab,
  setSkillsTab,
  experienceTab,
  setExperienceTab,
  technicalSkills,
  softSkills,
  educationData,
  experienceData,
}) => (
  <section id="about" className="px-4 py-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-center text-transparent sm:text-4xl md:mb-16 md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
        About Me
      </h2>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="p-5 transition-all duration-300 border sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-400/50 hover:transform hover:scale-105">
          <div className="flex items-center mb-6">
            <User className="mr-3 text-purple-600" size={24} />
            <h3 className="text-2xl font-bold text-white">Introduction</h3>
          </div>

          <p className="leading-relaxed text-white/80">
            I'm a Full Stack Software Engineer based in Sri Lanka with 2+ years of hands-on experience building and deploying complete web applications. I work across the full product lifecycle - from requirements and database design to APIs, interfaces, and production deployment.
            <br /><br />
            I take a product-thinking approach to development by understanding business problems first, then turning real workflows into practical software. My projects include dealership operations and contractor workflow platforms with features like RBAC, multi-tenant architecture, AI-assisted tools, reporting, and secure payments.
            <br /><br />
            I'm now focused on growing within a collaborative engineering team, contributing to larger systems, and continuing to sharpen my craft. I care about clean code, useful products, and shipping real things that help people.
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

        <div className="p-5 transition-all duration-300 border sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-600/50 hover:transform hover:scale-105">
          <div className="flex items-center mb-6">
            <Code className="mr-3 text-purple-600" size={24} />
            <h3 className="text-2xl font-bold text-white">Skills</h3>
          </div>

          <div className="flex p-1 mb-6 rounded-lg bg-white/5">
            <button
              onClick={() => setSkillsTab('technical')}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                skillsTab === 'technical'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-900 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setSkillsTab('soft')}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                skillsTab === 'soft'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-900 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Soft Skills
            </button>
          </div>

          <div className="space-y-4">
            {(skillsTab === 'technical' ? technicalSkills : softSkills).map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <h4 className="font-medium leading-snug text-white text-[15px]">{skill.name}</h4>
                  <span className="text-sm font-semibold text-purple-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10">
                  <div className="h-2 transition-all duration-1000 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 transition-all duration-300 border sm:p-8 bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-600/50 hover:transform hover:scale-105">
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
