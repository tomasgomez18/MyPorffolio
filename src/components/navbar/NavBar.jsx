import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Code, Award } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Navbar.css'; 

const navItems = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'about', label: 'Sobre mí', icon: User },
  { id: 'skills', label: 'Habilidades', icon: Code },
  { id: 'certificates', label: 'Certificaciones', icon: Award },
  { id: 'projects', label: 'Proyectos', icon: Briefcase },
  { id: 'contact', label: 'Contacto', icon: Mail },
];
export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= window.innerHeight / 3) {
            current = item.id;
          }
        }
      });
      setActiveTab(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="vertical-navbar">
      <nav className="nav-items">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActiveTab(id)}
            className={`nav-item-custom ${activeTab === id ? 'active' : ''}`}
          >
            <Icon size={20} className="nav-icon" />
            <span className="nav-label">{label}</span>
          </a>
        ))}
      </nav>
      <div className="navbar-footer">
  <div className="social-links">
    <a 
      href="https://github.com/tomasgomez18" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link" 
      aria-label="GitHub"
    >
      <FaGithub size={20} />
    </a>
    <a 
      href="https://www.linkedin.com/in/tomas-gomez-15a613383/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link" 
      aria-label="LinkedIn"
    >
      <FaLinkedin size={20} />
    </a>
    <a 
      href="mailto:tomasgomezzi36@gmail.com" 
      className="social-link" 
      aria-label="Email"
    >
      <FaEnvelope size={20} />
    </a>
  </div>
</div>
    </div>
  );
}