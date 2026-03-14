import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, Code } from 'lucide-react';
import './Navbar.css'; 

export default function Navbar() {
  // Estado para manejar qué item está activo
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'about', label: 'Sobre mí', icon: User },
    { id: 'skills', label: 'Habilidades', icon: Code },
    { id: 'projects', label: 'Proyectos', icon: Briefcase },
    { id: 'contact', label: 'Contacto', icon: Mail },
  ];

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
      <div>
        
      </div>
    </div>
  );
}