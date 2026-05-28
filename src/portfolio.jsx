import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Tools from './components/Tools';
import { educationData, experienceData } from './data/education';
import { projects } from './data/projects';
import { softSkills, technicalSkills } from './data/skills';
import { design, frameworks, languages, tools } from './data/tools';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [skillsTab, setSkillsTab] = useState('technical');
  const [experienceTab, setExperienceTab] = useState('education');
  const [toolsTab, setToolsTab] = useState('All');
  const [comingSoonFilter] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        toast.success('Message sent successfully!', { style: { background: '#1e1e1e', color: '#fff', border: '1px solid #9453a5' } });
        formRef.current.reset();
      },
      (error) => {
        toast.error('Something went wrong. Please try again.', { style: { background: '#1e1e1e', color: '#fff', border: '1px solid #9453a5' } });
        console.error(error.text);
      }
    );
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'tools', 'contact']
      .map((section) => document.getElementById(section))
      .filter(Boolean);
    let ticking = false;

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      let currentSection = sections[0];

      sections.forEach((section) => {
        if (marker >= section.offsetTop) {
          currentSection = section;
        }
      });

      if (currentSection) {
        setActiveSection((current) => (current === currentSection.id ? current : currentSection.id));
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All'
      || (Array.isArray(project.category)
        ? project.category.includes(activeCategory)
        : project.category === activeCategory);
    const matchesStatus = comingSoonFilter === 'Coming Soon' ? project.comingSoon === true : comingSoonFilter !== 'Completed' || project.comingSoon !== true;
    return matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen portfolio-background">
      <Navbar activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
      <Hero />
      <About skillsTab={skillsTab} setSkillsTab={setSkillsTab} experienceTab={experienceTab} setExperienceTab={setExperienceTab} technicalSkills={technicalSkills} softSkills={softSkills} educationData={educationData} experienceData={experienceData} />
      <Projects activeCategory={activeCategory} setActiveCategory={setActiveCategory} showAll={showAll} setShowAll={setShowAll} filteredProjects={filteredProjects} />
      <Tools toolsTab={toolsTab} setToolsTab={setToolsTab} languages={languages} frameworks={frameworks} tools={tools} design={design} />
      <Contact formRef={formRef} sendEmail={sendEmail} />
      <Footer />
    </div>
  );
};

export default Portfolio;
