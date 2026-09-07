import { useLanguage } from '../../context/LanguageContext';

const techStack = [
  'React',
  'JavaScript',
  'Node.js',
  'Java',
  'C#',
  'HTML5',
  'CSS3',
];

const Features = () => {
  const { t, getTranslationObj } = useLanguage();
  
  const whyChooseUs = getTranslationObj('features.whyUs') || [];
  const servicesData = getTranslationObj('features.services') || [];

  const icons = [
    (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  ];

  return (
    <section className="section section-alt" id="features">
      <div className="container">
        {/* 1. ¿Por qué elegir Atenix? */}
        <div className="why-us-section">
          <h2>{t('features.whyUsTitle')}</h2>
          <p className="section-intro">
            {t('features.whyUsSubtitle')}
          </p>
          <ul className="card-grid">
            {whyChooseUs.map((feature, idx) => (
              <li className="card" key={idx}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Tecnologías */}
        <div className="tech-stack-container">
          <span className="tech-stack-label">{t('features.techStackLabel')}</span>
          <div className="tech-badges">
            {techStack.map((tech) => (
              <span className="tech-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Nuestros Servicios */}
        <div className="services-section">
          <div className="section-header">
            <h2>{t('features.servicesTitle')}</h2>
            <p className="section-intro">
              {t('features.servicesSubtitle')}
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-icon">{icons[idx]}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-features-list">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <span className="bullet">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-cta">
                  {t('features.quoteBtn')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
