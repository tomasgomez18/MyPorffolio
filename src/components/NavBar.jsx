import { useState } from 'react';
import { Menu, X, Linkedin, Github, Mail } from 'lucide-react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navStyle = {
    backgroundColor: 'rgba(1, 7, 15, 0.9)',
    borderBottom: '1px solid #112240'
  };

  return (
    <nav className="fixed-top" style={navStyle}>
        <div className="d-flex align-items-center justify-content-between">
          <a
            href="#home"
            className="text-decoration-none fw-bold fs-4 text-white"
            style={{ letterSpacing: '2px' }}
          >
            TOMAS<span style={{ color: '#ff0000' }}>.</span>
          </a>
          <div className="d-none d-md-flex align-items-center gap-4">
            <a href="#about" className="nav-link text-secondary text-uppercase small fw-semibold hover-white">About</a>
            <a href="#projects" className="nav-link text-secondary text-uppercase small fw-semibold hover-white">Projects</a>
            <a href="#blog" className="nav-link text-secondary text-uppercase small fw-semibold hover-white">Blog</a>
          </div>
          <div className="d-none d-md-flex align-items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-secondary hover-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-secondary hover-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:tu@email.com" className="text-secondary hover-white">
              <Mail size={20} />
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="d-md-none bg-transparent border-0 text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isOpen && (
          <div className="d-md-none pt-4 pb-3 animate-fadeIn">
            <div className="d-flex flex-column gap-3">
              <a href="#about" className="text-white text-decoration-none" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" className="text-white text-decoration-none" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#blog" className="text-white text-decoration-none" onClick={() => setIsOpen(false)}>Blog</a>
              <div className="d-flex gap-4 pt-3 border-top border-secondary">
                <Github size={20} className="text-secondary" />
                <Linkedin size={20} className="text-secondary" />
                <Mail size={20} className="text-secondary" />
              </div>
            </div>
          </div>
        )}
    </nav>
  );
};