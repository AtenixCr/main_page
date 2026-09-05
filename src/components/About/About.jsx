import React from 'react';
import './About.css';
import fotoDavid from './fotodavid.jpg';
import fotoDaniel from './fotodaniel.jpeg';
import fotoKonny from './fotokonny.jpeg';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t, getTranslationObj } = useLanguage();
  const values = getTranslationObj('about.values') || [];

  return (
    <section className="section" id="about">
      <div className="container">

        <div className="section-header">
          <h2>{t('about.title')}</h2>
          <p className="section-intro">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="about-content">
          <div className="about-features-grid">
            <div className="card highlight-card">
              <h3>{t('about.missionTitle')}</h3>
              <p>
                {t('about.missionDesc')}
              </p>
            </div>

            <div className="card highlight-card">
              <h3>{t('about.visionTitle')}</h3>
              <p>
                {t('about.visionDesc')}
              </p>
            </div>

            <div className="card">
              <h3>{t('about.clientsTitle')}</h3>
              <p>
                {t('about.clientsDesc')}
              </p>
            </div>

            <div className="card">
              <h3>{t('about.valuesTitle')}</h3>
              <ul className="values-list">
                {values.map((v, idx) => (
                  <li key={idx}><strong>{v.strong}</strong>{v.text}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="team-section">
            <h3 className="team-section-title">{t('about.teamTitle')}</h3>
            <p></p>
            <div className="card-grid team-grid">
              <div className="card team-card">
                <div className="team-photo-container">
                  <img src={fotoDaniel} alt="Daniel Gómez Solano" className="team-photo" />
                </div>
                <div className="team-info">
                  <h4>Daniel Gómez Solano</h4>
                  <a href="https://danielgomezso.github.io/portafolio/" className="portfolio-link" target="_blank" rel="noopener noreferrer">
                    {t('about.portfolio')}
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
                    {t('about.portfolio')}
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
                    {t('about.portfolio')}
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