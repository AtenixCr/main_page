import React from 'react';
import './About.css';
import fotoDavid from './fotodavid.jpg';
import fotoDaniel from './fotodaniel.jpeg';
import fotoKonny from './fotokonny.jpeg';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">

        <div className="section-header">
          <h2>Sobre Nosotros</h2>
          <p className="section-intro">
            Conoce al equipo, nuestra misión, visión y los valores que nos impulsan cada día.
          </p>
        </div>

        <div className="about-content">
          <div className="about-features-grid">
            <div className="card highlight-card">
              <h3>Nuestra Misión</h3>
              <p>
                Desarrollar e implementar soluciones tecnológicas a la medida, ofreciendo creación de software y mantenimiento continuo de los proyectos. Nuestro propósito es resolver los desafíos técnicos de empresas de diversos tamaños de forma ágil y efectiva, convirtiéndonos en el aliado que impulse su productividad diaria.
              </p>
            </div>

            <div className="card highlight-card">
              <h3>Nuestra Visión</h3>
              <p>
                Consolidarnos como una empresa líder en desarrollo y soluciones de TI, reconocida por la calidad de nuestro código, la innovación de nuestras aplicaciones y nuestro compromiso inquebrantable con el éxito y la evolución digital de cada uno de nuestros clientes.
              </p>
            </div>

            <div className="card">
              <h3>Nuestros Clientes</h3>
              <p>
                Dirigimos nuestras soluciones a empresas de diversos tamaños y sectores que buscan optimizar sus procesos, transformar digitalmente sus operaciones y alcanzar nuevos niveles de productividad mediante software a medida y soporte técnico de excelencia.
              </p>
            </div>

            <div className="card">
              <h3>Nuestros Valores</h3>
              <ul className="values-list">
                <li><strong>Innovación:</strong> Buscamos constantemente nuevas formas de aportar valor.</li>
                <li><strong>Calidad:</strong> Nos enorgullece entregar código limpio y mantenible.</li>
                <li><strong>Compromiso:</strong> El éxito de nuestros clientes es nuestro éxito.</li>
                <li><strong>Transparencia:</strong> Comunicación clara en cada etapa del proyecto.</li>
              </ul>
            </div>
          </div>

          <div className="team-section">
            <h3 className="team-section-title">Nuestro Equipo</h3>
            <p></p>
            <div className="card-grid team-grid">
              <div className="card team-card">
                <div className="team-photo-container">
                  <img src={fotoDaniel} alt="Daniel Gómez Solano" className="team-photo" />
                </div>
                <div className="team-info">
                  <h4>Daniel Gómez Solano</h4>
                  <a href="https://danielgomezso.github.io/portafolio/" className="portfolio-link" target="_blank" rel="noopener noreferrer">
                    Ver Portafolio →
                  </a>
                </div>
              </div>

              <div className="card team-card">
                <div className="team-photo-container">
                  <img src={fotoDavid} alt="David Marín Ruiz" className="team-photo" />
                </div>
                <div className="team-info">
                  <h4>David Marín Ruiz</h4>
                  <a href="https://david-t03.github.io/" className="portfolio-link" target="_blank" rel="noopener noreferrer">
                    Ver Portafolio →
                  </a>
                </div>
              </div>

              <div className="card team-card">
                <div className="team-photo-container">
                  <img src={fotoKonny} alt="Konny Agüero Díaz" className="team-photo" />
                </div>
                <div className="team-info">
                  <h4>Konny Agüero Díaz</h4>
                  <a href="https://konny-aguero.github.io/portafolio-academico/" className="portfolio-link" target="_blank" rel="noopener noreferrer">
                    Ver Portafolio →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;