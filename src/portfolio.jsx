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
import { useTypedText } from './hooks/useTypedText';

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
  const typedText = useTypedText(['Full Stack Software Engineer', 'Business Systems Developer', 'AI Integration Developer', 'Next.js & TypeScript Engineer'], 100, 1500);

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
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of ['home', 'about', 'projects', 'tools', 'contact']) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black ">
      <Navbar activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
      <Hero typedText={typedText} />
      <About skillsTab={skillsTab} setSkillsTab={setSkillsTab} experienceTab={experienceTab} setExperienceTab={setExperienceTab} technicalSkills={technicalSkills} softSkills={softSkills} educationData={educationData} experienceData={experienceData} />
      <Projects activeCategory={activeCategory} setActiveCategory={setActiveCategory} showAll={showAll} setShowAll={setShowAll} filteredProjects={filteredProjects} />
      <Tools toolsTab={toolsTab} setToolsTab={setToolsTab} languages={languages} frameworks={frameworks} tools={tools} design={design} />
      <Contact formRef={formRef} sendEmail={sendEmail} />
      <Footer />
    </div>
  );
};

export default Portfolio;
