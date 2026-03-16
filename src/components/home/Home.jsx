import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import fotoPortfolio from "../../assets/fotoPortfolio.jpeg";
import './Home.css';

function Home() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.user_email = 'El email es obligatorio.';
    else if (!emailRegex.test(email)) newErrors.user_email = 'Ingresa un correo electrónico válido.';
    if (!message) newErrors.message = 'El mensaje es obligatorio.';
    else if (message.length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);
    setErrors({});
    setLoading(true);
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        setLoading(false);
        alert("Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.");
      });
  };
  return (
    <div className="app-layout">
      <main className="main-content">
        <section id="home" className="hero-section min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
          <div className="hero-content container">
            <div className="mb-4">
              <img 
                src={fotoPortfolio} 
                alt="Perfil" 
                className="rounded-circle shadow-lg border border-3 border-secondary border-opacity-50"
                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
              />
            </div>
            <h1 className="hero-title display-3 fw-bolder text-white mb-2">
              Tomas Gomez<span style={{color: '#ff0000'}}>.</span>
              <hr className="w-25 mx-auto text-white opacity-100" /> 
            </h1>
            <p className="hero-subtitle fs-5 text-secondary mb-4">Desarrollador Full Stack</p>
            <p className="hero-description mx-auto w-75 mb-5 text-light">
              Creando experiencias digitales modernas y funcionales con código limpio y escalable.
            </p>
            <a href="#projects" className="cta-button btn btn-outline-light px-4 py-2 rounded-pill fw-semibold shadow-sm">
              Ver Proyectos
            </a>
          </div>
          <div className="scroll-indicator mt-5 text-secondary"></div>
        </section>
        <section id="about" className="about-section">
          <div className="section-container container">
            <div className="text-center mb-5">
              <h2 className="section-title display-6 fw-bold text-white mb-3">Sobre Mí</h2>
              <hr className="w-25 mx-auto text-white opacity-100" />
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-start">
                <h3 className="text-white fs-4 mb-3">Perfil Analítico & Desarrollador Full Stack</h3>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                  Soy estudiante de programación universitaria en la <span className="text-white fw-bold">Univesidad Tecnologica Nacional Tucumán</span> con un fuerte trasfondo en <span className="text-white">Ingeniería</span>. Mi formación me ha brindado una base sólida en <span className="text-danger fw-bold">lógica y matemáticas</span>, herramientas que aplico día a día para resolver problemas complejos a través del código.
                </p>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                  Me especializo en el stack <span className="text-white fw-bold">MERN</span>, creando aplicaciones modernas y escalables. Soy una persona <span className="text-white fw-bold">altamente disciplinada</span>
                </p>
              </div>
              <div className="col-12 col-lg-5 offset-lg-1">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-3 border border-secondary border-opacity-25 rounded-3 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                      <h4 className="text-danger fs-5 mb-2">+2 Años</h4>
                      <p className="text-secondary small mb-0">Formación en Ingeniería</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border border-secondary border-opacity-25 rounded-3 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                      <h4 className="text-danger fs-5 mb-2">UTN</h4>
                      <p className="text-secondary small mb-0">Programación universitaria</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border border-secondary border-opacity-25 rounded-3 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                      <h4 className="text-danger fs-5 mb-2">MERN</h4>
                      <p className="text-secondary small mb-0">Stack Especializado</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 border border-secondary border-opacity-25 rounded-3 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                      <h4 className="text-danger fs-5 mb-2">Soft Skills</h4>
                      <p className="text-secondary small mb-0">Disciplina y Lógica</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 border border-danger border-opacity-25 rounded-3" style={{ borderStyle: 'dashed' }}>
                  <p className="text-light small mb-0 italic">
                    "Actualmente enfocado en expandir mi portafolio con soluciones reales y escalables."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills-section">
          <div className="section-container container">
            <div className="text-center mb-5">
              <h2 className="section-title display-6 fw-bold text-white mb-3">Habilidades</h2>
              <hr className="w-25 mx-auto text-white opacity-100" />
            </div>
            <div className="skills-grid row justify-content-center g-4 text-center">
              <div className="col-12 col-md-4">
                <div className="skill-card p-4 border border-secondary border-opacity-25 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <h3 className="text-white mb-4 fs-5">Frontend</h3>
                  <ul className="list-unstyled text-secondary">
                    <li className="mb-3">React / JavaScript</li>
                    <li className="mb-3">HTML5 / CSS3</li>
                    <li className="mb-3">Bootstrap / React Bootstrap</li>
                    <li className="mb-3">Manejo de Estado / Hooks</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="skill-card p-4 border border-secondary border-opacity-25 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <h3 className="text-white mb-4 fs-5">Backend</h3>
                  <ul className="list-unstyled text-secondary">
                    <li className="mb-3">Node.js / Express</li>
                    <li className="mb-3">MongoDB / NoSQL</li>
                    <li className="mb-3">PostgreSQL / SQL</li>
                    <li className="mb-3">REST APIs</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="skill-card p-4 border border-secondary border-opacity-25 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <h3 className="text-white mb-4 fs-5">Herramientas</h3>
                  <ul className="list-unstyled text-secondary">
                    <li className="mb-3">Git / GitHub</li>
                    <li className="mb-3">Vite / NPM</li>
                    <li className="mb-3">Docker</li>
                    <li className="mb-3">Postman</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
<section id="certificates" className="certificates-section">
  <div className="section-container container">
    <div className="text-center mb-5">
      <h2 className="section-title display-6 fw-bold text-white mb-3">Certificaciones</h2>
      <hr className="w-25 mx-auto text-white opacity-100" />
      <p className="text-secondary">Validación de mi formación como Desarrollador Full Stack</p>
    </div>

    <div className="row justify-content-center g-4">
      {[
        {
          id: 1,
          url: "https://certs.rollingcodeschool.com/dG9tYXNnb21lenppMzZAZ21haWwuY29t-1737980254748-1.png",
          title: "Full Stack Web Development"
        },
        {
          id: 2,
          url: "https://certs.rollingcodeschool.com/dG9tYXNnb21lenppMzZAZ21haWwuY29t-1764981487148-1.png",
          title: "Especialización Frontend"
        },
        {
          id: 3,
          url: "https://certs.rollingcodeschool.com/dG9tYXNnb21lenppMzZAZ21haWwuY29t-1773604116340-1.png",
          title: "Especialización Backend"
        }
      ].map((cert) => (
        <div className="col-12 col-md-4" key={cert.id}>
          <div 
            className="project-card p-3 border border-secondary border-opacity-25 rounded-4 h-100 shadow-lg transition-all" 
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', transition: 'transform 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div className="overflow-hidden rounded-3 mb-3" style={{ height: '200px' }}>
              <img 
                src={cert.url} 
                alt={cert.title} 
                className="img-fluid w-100 h-100" 
                style={{ objectFit: 'contain', backgroundColor: '#fff' }}
              />
            </div>
            <div className="text-start px-2">
              <h4 className="text-white fs-6 mb-3">{cert.title}</h4>
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-light w-100 rounded-pill"
                style={{ fontSize: '12px' }}
              >
                VER CREDENCIAL
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        <section id="projects" className="projects-section">
          <div className="section-container container">
            <div className="text-center mb-5">
              <h2 className="section-title display-6 fw-bold text-white mb-3">Proyectos</h2>
              <hr className="w-25 mx-auto text-white opacity-100" />
            </div>
            <div className="projects-grid row justify-content-center g-4 text-center">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="project-card p-4 border border-secondary border-opacity-25 rounded-4 h-100 d-flex flex-column" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <h3 className="text-white mb-3 fs-5">Wavv Music</h3>
                  <p className="text-secondary mb-4">Plataforma musical con gestión de productos y buscador interactivo.</p>
                  <div className="project-tags d-flex justify-content-center gap-2 flex-wrap mb-4">
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">MERN</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">React</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">React-Bootstrap</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">JavaScript</span>
                  </div>
                  <a href="https://wavv-music-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light rounded-pill mt-auto w-100" style={{ fontSize: '12px' }}>
                    VER PROYECTO
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6">
                <div className="project-card p-4 border border-secondary border-opacity-25 rounded-4 h-100 d-flex flex-column" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <h3 className="text-white mb-3 fs-5">Clap</h3>
                  <p className="text-secondary mb-4">Página web interactiva para buscar y explorar películas.</p>
                  <div className="project-tags d-flex justify-content-center gap-2 flex-wrap mb-4">
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">HTML</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">CSS</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">Bootstrap</span>
                  </div>
                  <a href="#!" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-outline-light rounded-pill mt-auto w-100" style={{ fontSize: '12px' }}>
                    VER PROYECTO
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-6">
                <div className="project-card p-4 border border-secondary border-opacity-25 rounded-4 h-100 d-flex flex-column" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <h3 className="text-white mb-3 fs-5">Rolling Motors</h3>
                  <p className="text-secondary mb-4">Plataforma e-commerce de motos con carrito de compras y gestión integrada.</p>
                  <div className="project-tags d-flex justify-content-center gap-2 flex-wrap mb-4">
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">MERN</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">React</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">React-Bootstrap</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">JavaScript</span>
                  </div>
                  <a href="https://jususylavirgen.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light rounded-pill mt-auto w-100" style={{ fontSize: '12px' }}>
                    VER PROYECTO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="section-container container">
            <div className="text-center mb-5">
              <h2 className="section-title display-6 fw-bold text-white mb-3">Contacto</h2>
              <hr className="w-25 mx-auto text-white opacity-100" />
            </div>
            <div className="contact-content row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <p className="text-center text-secondary mb-5">Estoy disponible para nuevos proyectos y colaboraciones.</p>
                
                <form ref={form} className="contact-form p-3 p-md-4 border border-secondary border-opacity-25 rounded-4 shadow-sm" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }} onSubmit={sendEmail}>
                  <div className="form-group mb-4 text-start">
                    <label htmlFor="user_email" className="form-label text-secondary fw-semibold ms-1">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="user_email"
                      name="user_email" 
                      className={`form-control bg-dark text-light border-secondary border-opacity-50 py-2 rounded-3 ${errors.user_email ? 'is-invalid' : ''}`} 
                      placeholder="ejemplo@correo.com" 
                    />
                    {errors.user_email && (
                      <div className="invalid-feedback text-start">
                        {errors.user_email}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-4 text-start">
                    <label htmlFor="message" className="form-label text-secondary fw-semibold ms-1">Mensaje</label>
                    <textarea 
                      id="message"
                      name="message" 
                      className={`form-control bg-dark text-light border-secondary border-opacity-50 py-2 rounded-3 ${errors.message ? 'is-invalid' : ''}`} 
                      placeholder="Hola, me gustaría hablar sobre un proyecto..." 
                      rows={5} 
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback text-start">
                        {errors.message}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className={`submit-button btn ${sent ? 'btn-success' : 'btn-outline-light'} px-4 py-2 rounded-pill fw-bold w-100 shadow-sm transition-all`}
                      style={{ letterSpacing: '1px' }}
                    >
                      {loading ? 'ENVIANDO...' : sent ? '¡MENSAJE ENVIADO CON ÉXITO!' : 'ENVIAR MENSAJE'}
                    </button>
                  </div>
                </form>
                <div className="contact-info text-center mt-5">
                  <p className="text-secondary">
                    Email: <a href="mailto:tomasgomezzi36@gmail.com" className="text-white text-decoration-none fw-semibold">tomasgomezzi36@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;