import React from 'react';
import fotoPortfolio from "../../assets/fotoPortfolio.jpeg";
import './Home.css';

function Home() { 
  return (
    <div className="app-layout">
      <main className="main-content">
        <section id="home" className="hero-section min-vh-100 d-flex flex-column justify-content-center align-items-center text-center pt-5">
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
              Tomas Gomez<span style={{color: '#ff0000'}}>.</span><hr className="w-25 mx-auto text-white opacity-100" /> 
            </h1>
            <p className="hero-subtitle fs-5 text-secondary mb-4">Desarrollador Full Stack</p>
            <p className="hero-description mx-auto w-75 mb-5 text-light">
              Creando experiencias digitales modernas y funcionales con código limpio y escalable.
            </p>
            <a href="#projects" className="cta-button btn btn-outline-light px-4 py-2 rounded-pill fw-semibold shadow-sm">
              Ver Proyectos
            </a>
          </div>
          <div className="scroll-indicator mt-5 text-secondary">
          </div>
        </section>
        <section id="about" className="about-section py-5">
          <div className="section-container container my-5">
            <div className="text-center mb-5">
              <h2 className="section-title display-6 fw-bold text-white mb-3">Sobre Mí</h2>
              <hr className="w-25 mx-auto text-white opacity-100" />
            </div>
            <div className="about-content row justify-content-center">
              <div className="about-text col-12 col-md-8 text-center text-secondary">
                <p className="mb-4">
                 "Desarrollador Full Stack (MERN) y estudiante de programación en la UTN Tucumán. Con un sólido trasfondo en Ingeniería, me especializo en crear aplicaciones web modernas, robustas y centradas en el usuario. Disciplinado por naturaleza, ya sea en un entorno de desarrollo, en el gimnasio o jugando al pádel, siempre busco la mejora continua y el siguiente desafío técnico.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills-section py-5">
          <div className="section-container container my-5">
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
        <section id="projects" className="projects-section py-5">
          <div className="section-container container my-5">
            <div className="text-center mb-5">
              <h2 className="section-title display-6 fw-bold text-white mb-3">Proyectos</h2>
              <hr className="w-25 mx-auto text-white opacity-100" />
            </div>
            <div className="projects-grid row justify-content-center g-4 text-center">
              <div className="col-12 col-md-6">
                <div className="project-card p-4 border border-secondary border-opacity-25 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <h3 className="text-white mb-3 fs-5">Wavv Music</h3>
                  <p className="text-secondary mb-4">Plataforma musical con gestión de productos y buscador interactivo.</p>
                  <div className="project-tags d-flex justify-content-center gap-2 flex-wrap">
                    <span className="tag badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">React</span>
                    <span className="tag badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">JavaScript</span>
                    <span className="tag badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">CSS</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="project-card p-4 border border-secondary border-opacity-25 rounded-4 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                  <h3 className="text-white mb-3 fs-5">E-commerce App</h3>
                  <p className="text-secondary mb-4">Aplicación de compras con carrito y pasarela de pagos.</p>
                  <div className="project-tags d-flex justify-content-center gap-2 flex-wrap">
                    <span className="tag badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">Node.js</span>
                    <span className="tag badge bg-secondary bg-opacity-25 text-light px-2 py-1 rounded-pill">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section py-5 mb-5">
          <div className="section-container container my-5">
            <div className="text-center mb-5">
              <h2 className="section-title display-6 fw-bold text-white mb-3">Contacto</h2>
              <hr className="w-25 mx-auto text-white opacity-100" />
            </div>
            
            <div className="contact-content row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <p className="text-center text-secondary mb-5">Estoy disponible para nuevos proyectos y colaboraciones.</p>
                
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-4">
                    <input type="email" className="form-control bg-dark text-white border-secondary border-opacity-50" placeholder="Tu email" required />
                  </div>
                  <div className="form-group mb-4">
                    <textarea className="form-control bg-dark text-white border-secondary border-opacity-50" placeholder="Tu mensaje" rows={5} required></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="submit-button btn btn-outline-light px-4 py-2 rounded-pill fw-semibold w-100 shadow-sm">
                      Enviar Mensaje
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