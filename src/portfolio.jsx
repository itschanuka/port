import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User, Code, GraduationCap, Mail, Phone, MapPin, Github, Linkedin, ExternalLink , Facebook, Instagram} from 'lucide-react';
import { Download } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [skillsTab, setSkillsTab] = useState('technical');
  const [experienceTab, setExperienceTab] = useState('education');
  const [toolsTab, setToolsTab] = useState('All');
  const [comingSoonFilter] = useState('All');
 // 'All', 'Coming Soon', 'Completed'
 
  
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4avw3ky',       // Replace with your EmailJS service ID
      'template_tqhvhne',      // Replace with your EmailJS template ID
      formRef.current,
      '4g5oAeWZJG1DEvQEr'        // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        toast.success('Message sent successfully!', {
          
 style: {
            background: '#1e1e1e',
            color: '#fff',
            border: '1px solid #9453a5',
          },
        });
        formRef.current.reset();
      },
      (error) => {
        toast.error('Something went wrong. Please try again.', {
    
       style: {
            background: '#1e1e1e',
            color: '#fff',
            border: '1px solid #9453a5',
          },
        });
        console.error(error.text);
      }
    );
 };


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
 if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'tools', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < 
 offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 const useTypedText = (words, speed = 100, pause = 1500) => {
  const [index, setIndex] = useState(0);
 // Current word index
  const [subIndex, setSubIndex] = useState(0);  // Character index
  const [forward, setForward] = useState(true);
 // Typing direction
 // Optional: cursor blinking

  useEffect(() => {
    if (index >= words.length) return;

    if (forward && subIndex === words[index].length + 1) {
      setForward(false);
      return;
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
 
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? speed : speed / 2); // Faster backspacing

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed]);
 return words[index].substring(0, subIndex);
};


const roles = ['Full Stack Developer'];
const typedText = useTypedText(roles, 100, 1500);
 const technicalSkills = [
  { name: 'Java', level: 85 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 70 },
  { name: 'SQL/MySQL', level: 75 },
  { name: 'NOSQL', level: 75 },
  { name: 'Git/GitHub', level: 88 },
  { name: 'PHP', level: 85},
];
 const softSkills = [
    { name: 'Work Under Pressure', level: 90 },
    { name: 'Team Collaboration', level: 95 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Communication', level: 88 },
    { name: 'Leadership', level: 82 },
    { name: 'Time Management', level: 90 }
  ];
 const educationData = [
  {
    year: '2024-Present',
    title: 'Higher National Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    description: 'Focus on software development, programming, and database management.'
 },
  {
    year: '2023-2024',
    title: 'Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    description: 'Gained hands-on experience with various software engineering techniques and tools.'
 },
  {
    year: '2024',
    title: 'Career Essentials in Generative AI',
    institution: 'Microsoft and LinkedIn',
    description: 'Covered Computer Ethics, Artificial Intelligence (AI), Generative AI.'
 },
];

  const experienceData = [
    
  ];
 const projects = [
  {
    title: 'Elite Beauty Salon',
    category: 'Web App (Freelance)',
    description: 'A conversion-focused business website built for a beauty salon to streamline customer inquiries and appointment bookings. Developed using React and Tailwind CSS, with WhatsApp click-to-chat integration to enable direct customer communication and increase lead conversions.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'WhatsApp API'],
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800', 
    website: 'https://deckproprojectsalon.netlify.app/',
  },
  {
    title: 'Precision Construction Services',
    category: 'Web Design (Freelance)',
    description: 'A fully responsive frontend website designed for a construction services company, focusing on project showcases and mobile performance. Built with React, Vite, Tailwind CSS, and Framer Motion to deliver smooth animations and a polished user experience.',
    technologies: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    // New image for Project #2
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    website: 'https://deckproconstruction.netlify.app/'
  },
  {
    title: 'Chanuka Dev Portfolio',
    category: 'Full Stack',
    description: 'A personal freelance brand platform showcasing production-ready projects and providing a central hub for client inquiries. Built with React and supported by a Node.js and Express backend, demonstrating full-stack integration and deployment workflows.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    website: 'https://deckpro.space'
  },
  {
    title: 'Tuition Management Android App',
    category: 'Mobile App',
    description: 'An Android application designed to manage students, classes, attendance, and assignments for tuition centers. Built using Kotlin and Firebase, featuring QR-based attendance tracking and cloud-based assignment submissions',
    technologies: ['Android Studio', 'Firebase', 'QR Code Scanning'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/itschanuka'
  },
  {
    title: 'Smart Parcel Box',
    category: 'IoT Project',
    description: 'An IoT-based smart parcel box system designed to securely manage package deliveries. Integrated ESP8266, sensors, and servo motors with Firebase to enable real-time monitoring, automated access control, and backend device state management.',
    technologies: ['ESP8266', 'Firebase', 'Sensors', 'Servo Motor'],
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/itschanuka'
  },
  {
    title: 'Autonomous Luggage Robot',
    category: 'IoT Project',
    description: 'An automated robotics project designed to assist with luggage handling using line-following, obstacle detection, and RFID-based navigation. Implemented using Arduino Mega, ultrasonic sensors, and RFID modules.',
    technologies: ['Arduino Mega', 'RFID', 'Ultrasonic Sensors'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/itschanuka'
  },
  {
    title: 'Urban Food E-Commerce',
    category: 'Web App',
    description: 'A full-stack food e-commerce platform designed to manage product listings, customer orders, and inventory workflows. Built with PHP and a hybrid MongoDB + SQL backend to handle both flexible product data and structured order information. Implements core e-commerce functionality including product CRUD operations, order processing, and data persistence.',
    technologies: ['PHP', 'HTML', 'CSS', 'MongoDB', 'SQL'],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/itschanuka'
  },
  {
    title: 'Modern Room Clothing',
    category: 'Web App',
    description: 'A responsive e-commerce website developed for a clothing brand, focused on clean UI, usability, and secure user authentication. Built using vanilla HTML, CSS, and JavaScript, featuring structured layouts, responsive design principles, and frontend logic for user interaction and authentication flows.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/itschanuka'
  }
];
 const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
const filteredProjects = projects.filter((project) => {
  // Check Category
  const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
  
  // Check Coming Soon (if you decide to use the filter)
  let matchesStatus = true;
  if (comingSoonFilter === 'Coming Soon') matchesStatus = project.comingSoon === true;
  if (comingSoonFilter === 'Completed') matchesStatus = project.comingSoon !== true;

  return matchesCategory && matchesStatus;
});



  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black ">
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-black/20 backdrop-blur-md border-white/10">
        <div className="max-w-6xl px-4 mx-auto 
 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 bg-clip-text">
              Chanuka Keerthisigha
            </div>
            
            {/* Desktop Navigation */}
           
 <div className="hidden space-x-8 md:flex">
              {['home', 'about', 'projects', 'tools','contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-purple-600 ${
 
 activeSection === item 
                      ?
 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
      
         ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="text-white md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
         
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t md:hidden bg-black/40 backdrop-blur-md border-white/10">
            <div className="px-4 pt-2 pb-3 space-y-1">
     
          {['home', 'about', 'projects','tools', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full px-3 py-2 text-left capitalize transition-colors text-white/80 hover:text-purple-600"
      
           >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      
 {/* Hero Section */}
      <section id="home" className="flex items-center justify-center min-h-screen px-6 pt-20">
          <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
            <div className="order-2 space-y-6 md:order-1 animate-fade-in">
              <h1 className="text-4xl font-bold text-purple-600 md:text-6xl">
                Hi, I'm <span className="text-purple-600">Chanuka</span>
              </h1>
 
              <div className="text-2xl font-semibold text-gray-300 md:text-3xl">
                I'm a <span className="text-purple-500">{typedText}</span>
              </div>
              <p className="max-w-lg text-lg leading-relaxed text-gray-400">
               I build fast, scalable web applications and business websites using modern frontend technologies.
 </p>
              
              {/* Social Icons */}
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
                  src="./image.jpg" 
     
               alt="Profile" 
                  className="absolute top-0 left-0 object-cover w-64 h-64 transition-transform duration-500 transform border-4 border-purple-600 md:w-80 md:h-80 rounded-2xl -rotate-3 hover:rotate-0"
                />
              </div>
            </div>
          </div>
 
        </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
            About Me
          </h2>
          
          <div className="grid 
 gap-8 md:grid-cols-3">
            {/* Card 1: Introduction */}
            <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-400/50 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <User className="mr-3 text-purple-600" size={24} />
                <h3 className="text-2xl font-bold text-white">Introduction</h3>
    
           </div>
              <p className="leading-relaxed text-white/80">
                I’m a frontend-focused software developer with hands-on experience building and deploying real-world web applications, business websites, and mobile solutions.

My core strength is modern frontend development using React, where I focus heavily on clean UI design, performance, and usability. I also have practical experience working with backend APIs, databases, cloud deployment, and IoT-based systems.

I’ve worked independently on freelance and demo projects, taking products from idea to production, and I’m now focused on growing within a professional engineering team building larger, more complex systems.           <div className="flex mt-6 space-x-4">
                <a href="https://github.com/itschanuka" target="_blank" rel="noopener noreferrer"
                  className="transition-colors text-white/60 hover:text-purple-600">
                <Github size={20} /></a>
                <a href="https://www.linkedin.com/in/chanuka-keerthisingha/" target="_blank" rel="noopener noreferrer"
     
               className="transition-colors text-white/60 hover:text-purple-600"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Card 2: Skills */}
            <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-600/50 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
 
                <Code className="mr-3 text-purple-600" size={24} />
                <h3 className="text-2xl font-bold text-white">Skills</h3>
              </div>
              
              {/* Skills Tabs */}
              <div className="flex p-1 
 mb-6 rounded-lg bg-white/5">
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
         
              ?
 'bg-gradient-to-r from-purple-600 to-pink-900 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25 text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Soft Skills
               
  </button>
              </div>

              {/* Skills Content */}
              <div className="space-y-4">
                {(skillsTab === 'technical' ? technicalSkills : softSkills).map((skill, index) => (
                  <div key={index}>
         
            <div className="flex justify-between mb-2">
                      <span className="text-sm text-white/80">{skill.name}</span>
                      <span className="text-sm text-purple-500">{skill.level}%</span>
                    </div>
                  
   <div className="w-full h-2 rounded-full bg-white/10">
                      <div 
                        className="h-2 transition-all duration-1000 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
                        style={{ width: `${skill.level}%` }}
              
         ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
 {/* Card 3: Education & Experience */}
            <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-600/50 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <GraduationCap className="mr-3 text-purple-600" size={24} />
                <h3 className="text-2xl font-bold text-white">Background</h3>
              </div>
 
              
              {/* Experience Tabs */}
              <div className="flex p-1 mb-6 rounded-lg bg-white/5">
                <button
                  onClick={() => setExperienceTab('education')}
               
    className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                    experienceTab === 'education' 
                      ?
 ' bg-gradient-to-r from-purple-600 to-pink-900 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25 text-white' 
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

              {/* Timeline */}
              <div className="space-y-6">
                {(experienceTab === 'education' ? educationData : experienceData).map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 
 border-purple-500/30">
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

      {/* Projects Section */}
      <section id="projects" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
            Featured Projects
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center 
 gap-4 mb-12">
            {['All', 'Web App', 'Mobile App', 'UI/UX Design'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
 setShowAll(false);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border border-white/20 ${
                  activeCategory === category
                  ?
 'bg-gradient-to-r from-purple-600 to-pink-800 hover:from-purple-700 text-white'
                  : 'text-white/70 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-800 hover:text-white'
                }`}   
              >
                {category}
              </button>
          
         ))}
          </div>

          {/* Filtered Projects */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects
              .slice(0, showAll ? filteredProjects.length : 6)
              .map((project, index) => (
             
  <div
                key={index}
                className="overflow-hidden transition-all duration-300 border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-600/50 hover:transform hover:scale-105 group"
              >
                

                <div className="relative overflow-hidden">
        
           <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
       
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
             
      <p className="mb-4 leading-relaxed text-white/70">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
 
                        className="px-3 py-1 text-sm text-purple-400 border rounded-full bg-purple-700/20 border-purple-500/30"
                    >
                      {tech}
                    </span>
        
           ))}
                </div>

                {project.status === "coming-soon" && (
                  <span className="absolute px-3 py-1 text-xs font-bold text-white uppercase bg-purple-600 rounded-full shadow-lg top-3 right-3 animate-bounce">
                   Coming Soon
   
                </span>
                )}

{/* Find this section inside filteredProjects.map */}
<div className="flex gap-4 mt-4">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-purple-600 transition-colors hover:text-purple-500"
    >
      <Github className="mr-1" size={18} /> GitHub
    </a>
  )}

  {/* ADD THIS NEW BLOCK BELOW */}
  {project.website && (
    <a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-pink-600 transition-colors hover:text-pink-500"
    >
      <ExternalLink className="mr-1" size={18} /> Website
    </a>
  )}
</div>
   
             
                
              </div>
              
              
            </div>
      
       
          ))}
          
        </div>

        {/* View More Button */}
        {!showAll && filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => 
 setShowAll(true)}
              className="px-6 py-3 font-semibold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-800 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25"
            >
              View More
            </button>
          </div>
        )}

        
    </div>
</section>
{/* Tools & Languages 
 Section */}
      <section id="tools" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
            Tools & Technics
          </h2>
          
          {/* Category Tabs */}
          <div className="flex justify-center 
 mb-12">
            <div className="flex p-2 border rounded-xl bg-white/5 backdrop-blur-md border-white/10">
              {['All','Languages', 'Frameworks', 'Tools', 'Design'].map((category) => (
                <button
                  key={category}
                  onClick={() => setToolsTab(category)}
        
           className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                    toolsTab === category
                      ?
 'bg-gradient-to-r from-purple-600 to-pink-800 text-white shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
   
            ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {/* Languages */}
            {(toolsTab === 'All' || toolsTab === 'Languages') && [
     
           { name: 'HTML', color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS', color: '#1572B6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'Python', color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
              { name: 'Java', color: '#ED8B00', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' 
 },
              { name: 'PHP', color: '#777BB4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
              { name: 'Kotlin', color: '#7F52FF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
              { name: 'C#', color: '#239120', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' }
            ].map((tool, index) => (
              <div
        
         key={index}
                className="flex flex-col items-center p-6 transition-all duration-300 transform border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-400/50 hover:scale-105 hover:shadow-lg group"
              >
                <div 
                  className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
      
             style={{ backgroundColor: `${tool.color}20` }}
                >
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                </div>
                <h3 className="font-semibold text-white transition-colors group-hover:text-purple-400">
          
         {tool.name}
                </h3>
              </div>
            ))}

            {/* Frameworks */}
            {(toolsTab === 'All' ||
 toolsTab === 'Frameworks') && [
              { name: 'React', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Node.js', color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'Express', color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
              { name: 'Tailwind CSS', color: '#38B2AC', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'}
            
 ].map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 transition-all duration-300 transform border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-400/50 hover:scale-105 hover:shadow-lg group"
              >
                <div 
     
               className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
                  style={{ backgroundColor: `${tool.color}20` }}
                >
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                </div>
     
            <h3 className="font-semibold text-white transition-colors group-hover:text-purple-400">
                  {tool.name}
                </h3>
              </div>
            ))}

            {/* Tools */}
           
  {(toolsTab === 'All' || toolsTab === 'Tools') && [
              { name: 'VS Code', color: '#007ACC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
              { name: 'Git', color: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
              { name: 'GitHub', color: '#181717', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
              { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      
         { name: 'MySQL', color: '#4479A1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
              { name: 'Android Studio', color: '#3DDC84', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' }
            ].map((tool, index) => (
              <div
                key={index}
                className="flex flex-col 
 items-center p-6 transition-all duration-300 transform border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-400/50 hover:scale-105 hover:shadow-lg group"
              >
                <div 
                  className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
                  style={{ backgroundColor: `${tool.color}20` }}
           
      >
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                </div>
                <h3 className="font-semibold text-white transition-colors group-hover:text-purple-400">
                  {tool.name}
                </h3>
  
             </div>
            ))}

            {/* Design */}
            {(toolsTab === 'All' ||
 toolsTab === 'Design') && [
              { name: 'Figma', color: '#F24E1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
              { name: 'Photoshop', color: '#31A8FF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
              { name: 'Canva', color: '#00C4CC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' }
            ].map((tool, index) => (
              <div
    
             key={index}
                className="flex flex-col items-center p-6 transition-all duration-300 transform border bg-white/5 backdrop-blur-md rounded-2xl border-white/10 hover:border-purple-400/50 hover:scale-105 hover:shadow-lg group"
              >
                <div 
                  className="flex items-center justify-center w-16 h-16 mb-4 rounded-full"
  
                 style={{ backgroundColor: `${tool.color}20` }}
                >
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                </div>
                <h3 className="font-semibold text-white transition-colors group-hover:text-purple-400">
      
             {tool.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Contact Section */}
    <section id="contact" className="px-4 py-20">
      <div className="max-w-6xl 
 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text">
          Let's Connect
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
        {/* Contact Info Panel */}
{/* Contact Info Panel */}
<div className="flex flex-col h-full p-8 border shadow-lg rounded-2xl bg-white/5 backdrop-blur-md border-white/10">
  <h3 className="mb-6 text-2xl font-bold text-white">Get in Touch</h3>
  <p className="mb-8 text-white/70">
    Feel free to reach out via email, phone, or the 
 contact form.
  </p>

  <div className="mb-8 space-y-6">
    <div className="flex items-center gap-4">
      <Mail className="text-purple-600" size={24} />
      <div>
        <h4 className="font-semibold text-white">Email</h4>
        <p className="text-white/60">itschanuka@gmail.com</p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <Phone className="text-purple-600" size={24} />
      <div>
        <h4 className="font-semibold text-white">Phone</h4>
        <p className="text-white/60">+(94) 714104425</p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <MapPin className="text-purple-600" size={24} />
      <div>
        <h4 className="font-semibold text-white">Location</h4>
        <p className="text-white/60">Colombo, Sri Lanka</p>
      </div>
    </div>
  </div>

  {/* Social Icons at bottom */}
  <div className="flex mt-auto space-x-6">
    <a
      href="https://github.com/itschanuka"
      target="_blank"
      
 rel="noopener noreferrer"
      className="text-gray-400 transition-colors hover:text-purple-600"
      aria-label="GitHub"
    >
      <Github size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/chanuka-keerthisigha"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 transition-colors hover:text-purple-600"
      aria-label="LinkedIn"
    >
      <Linkedin size={24} />
    </a>
    <a
      href="https://web.facebook.com/"
      
 target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 transition-colors hover:text-purple-600"
      aria-label="Facebook"
    >
      <Facebook size={24} />
    </a>
    <a
      href="https://www.instagram.com/itschanuka/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 transition-colors hover:text-purple-600"
      aria-label="Instagram"
    >
      <Instagram size={24} />
    </a>
  </div>
</div>



      {/* Contact 
 Form Panel */}
      <div className="p-8 border shadow-lg rounded-2xl bg-white/5 backdrop-blur-md border-white/10">
        <h3 className="mb-6 text-2xl font-bold text-white">Send a Message</h3>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
 
            className="w-full p-4 text-white border bg-black/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
           
  className="w-full p-4 text-white border bg-black/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 text-white border bg-black/30 border-white/10 rounded-xl focus:outline-none focus:ring-2 
 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-800 hover:from-purple-700 hover:to-pink-600 hover:scale-105 hover:shadow-purple-500/25"
          >
            Send Message
          </button>
        
 </form>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="px-4 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2026 Chanuka Keerthisigha. Built with React. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
 };

export default Portfolio;
