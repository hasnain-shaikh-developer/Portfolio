import React, { useState, useEffect } from 'react';
import profilePic from "./assets/pic.png"; 
import './styles.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  const skills = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'Typescript', 'React', 'Firebase', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub'];

  const projects = [
    {
      title: 'MoneyFlow – Expense Tracker',
      description: 'A modern finance tool that helps users track income and expenses with real-time balance updates and a clean, intuitive interface.',
      tech: ['React'],
      liveDemo: 'https://cashtrack-chi.vercel.app/',
      github: 'https://github.com/hasnain-shaikh-developer/Finance-Tools'
    },
    {
      title: 'Task Manager – CRUD App',
      description: 'A simple yet powerful CRUD app that manages user data with precision — built for scalability and ease of use.',
      tech: ['React'],
      liveDemo: 'https://mobile-crud-app.vercel.app/',
      github: 'https://github.com/hasnain-shaikh-developer/Mobile-Crud-App'
    },
    {
      title: 'FilmFlix – Explore Movies Instantly',
      description: 'A simple yet powerful app that brings movie information to your fingertips — search, explore, and enjoy cinematic data instantly.',
      tech: ['React'],
      liveDemo: 'https://movie-search-app-qfg1.vercel.app/',
      github: 'https://github.com/hasnain-shaikh-developer/Movie-Search-App'
    },
    {
      title: 'FoodieSearch – Find Your Next Recipe',
      description: 'A simple yet powerful app for discovering recipes quickly — perfect for food lovers who enjoy exploring new dishes online.',
      tech: ['React'],
      liveDemo: 'https://recipe-finder-app-virid.vercel.app/',
      github: 'https://github.com/hasnain-shaikh-developer/Recipe-Finder-App'
    },
    {
      title: 'WeatherNow – Real-Time Weather App',
      description: 'A simple yet powerful weather app that displays current weather conditions and forecasts using live data fetching.',
      tech: ['React'],
      liveDemo: 'https://weather-app-phi-mocha-68.vercel.app/',
      github: 'https://github.com/hasnain-shaikh-developer/Weather-App'
    },
    {
      title: 'TimeNow – Real-Time Digital Clock',
      description: 'A sleek and responsive digital clock that displays real-time hours, minutes, and seconds with smooth transitions and clean UI design.',
      tech: ['React'],
      liveDemo: 'https://digital-clock-iota-ten.vercel.app/',
      github: 'https://github.com/hasnain-shaikh-developer/Digital-Clock'
    },
    {
      title: 'Smart Counter App',
      description: 'A simple yet engaging counter app created to highlight elegant design and efficient logic handling using modern web technologies.',
      tech: ['React'],
      liveDemo: 'https://counter-app-smoky-theta.vercel.app/',
      github: 'https://github.com/hasnain-shaikh-developer/Counter-App'
    },
  ];

  return (
    <div className="portfolio">
      {/* Navigation - Same as before */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span>&lt;/&gt;</span> Hasnain Shaikh
          </div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          <div className="mobile-nav">
            <button className="menu-toggle" onClick={toggleMenu}>
              <div className="menu-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        )}
      </nav>

      {/* Social Media Bar - Same as before */}
      <div className="social-bar">
        {/* <a href="#" className="social-link" title="Email">
          📩
        </a> */}
        <a href="https://www.linkedin.com/in/hasnain-shaikh-502008339" className="social-link" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-label="LinkedIn">
           <rect x="1" y="1" width="22" height="22" rx="4" fill="#0A66C2"/>
          <path fill="#ffffff" d="M6.2 7.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM4.7 9.3h3v10.1h-3V9.3Zm6.6 0h2.9v1.4h.1c.4-.7 1.5-1.7 3.2-1.7 3.4 0 4 2.1 4 4.8v5.6h-3v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1h-3V9.3Z"/>
          </svg>
        </a>
        <a href="https://github.com/hasnain-shaikh-developer" className="social-link" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-label="GitHub" viewBox="0 0 24 24">
  <rect width="24" height="24" fill="#000000" rx="4"/>
  <path fill="#ffffff" d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.9c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.6 2.1 3.5 1.5.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.6 11.6 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
</svg>
        </a>
        <a href="https://www.instagram.com/coding_460?igsh=NXIyZjM3emM1MXVx" className="social-link" title="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-label="Instagram" viewBox="0 0 24 24">
  <rect width="24" height="24" fill="#E1306C" rx="6"/>
  <path fill="#ffffff" d="M16.98 2H7.02C4.25 2 2 4.25 2 7.02v9.96C2 19.75 4.25 22 7.02 22h9.96C19.75 22 22 19.75 22 16.98V7.02C22 4.25 19.75 2 16.98 2zM20 16.98A3.02 3.02 0 0 1 16.98 20H7.02A3.02 3.02 0 0 1 4 16.98V7.02A3.02 3.02 0 0 1 7.02 4h9.96A3.02 3.02 0 0 1 20 7.02v9.96z"/>
  <path fill="#ffffff" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4z"/>
  <circle cx="17.5" cy="6.5" r="1.5" fill="#ffffff"/>
</svg>
        </a>
      </div>

      {/* Hero Section - Same as before */}
      <section id="home" className={`hero ${visibleSections.has('home') ? 'visible' : ''}`}>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Hasnain Shaikh</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Developer & UI Designer</h2>
              <p className="hero-tagline">
                I craft exceptional digital experiences that merge cutting-edge technology 
                with intuitive design, turning complex ideas into elegant solutions.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
                <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                  Let's Connect
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-container">
                <div className="profile-glow"></div>
                <img 
                  src={profilePic} 
                  alt="Hasnain Shaikh - Full Stack Developer" 
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated About Section */}
      <section id="about" className={`about ${visibleSections.has('about') ? 'visible' : ''}`}>
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              I'm a passionate full-stack developer specializing in modern web technologies. 
              I have strong skills in frontend development with React.js and backend with Node.js.
            </p>
            <p className="about-text">
              My technical expertise includes HTML, CSS, JavaScript, TypeScript, Bootstrap, 
              Tailwind CSS, React.js, Express.js, MongoDB, and Firebase. I enjoy creating 
              responsive and user-friendly web applications.
            </p>
            <p className="about-text">
              Currently looking for opportunities as a Frontend Developer or Full Stack Developer 
              where I can contribute to meaningful projects and continue growing my skills.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section - Same as before */}
      <section id="skills" className={`skills ${visibleSections.has('skills') ? 'visible' : ''}`}>
        <div className="container">
          <div className="skills-container">
            <h2 className="section-title">Skills & Technologies</h2>
            <h3 className='frontend'>Frontend & Backend</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-chip">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Same as before */}
      <section id="projects" className={`projects ${visibleSections.has('projects') ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.liveDemo} className="btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Contact Section (Phone removed) */}
      <section id="contact" className={`contact ${visibleSections.has('contact') ? 'visible' : ''}`}>
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-text">
              I'm actively looking for new opportunities and interesting projects. 
              Whether you have a job opportunity, want to collaborate, or just want to connect,
              I'd love to hear from you!
            </p>
            <div className="contact-info">
              <a href="mailto:hasnainshaikh0755@gmail.com" className="contact-link">
                <span>📧</span>
                hasnainshaikh0755@gmail.com
              </a>
              {/* Phone number remove kar diya */}
            </div>
          </div>
        </div>
      </section>

      {/* Updated Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Hasnain Shaikh. Building digital experiences with code and creativity.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;