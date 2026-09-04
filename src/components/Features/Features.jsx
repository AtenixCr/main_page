const servicesData = [
  {
    id: 'web',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Páginas Web Corporativas',
    description: 'Sitios web institucionales y landing pages modernos, adaptables a móviles y optimizados para posicionarse en buscadores.',
    items: ['Diseño 100% responsivo', 'Optimización SEO y velocidad', 'Enlace directo a WhatsApp y redes'],
  },
  {
    id: 'portfolios',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Portafolios Profesionales',
    description: 'Muestra tus proyectos, trabajos y habilidades con una presencia visual impactante que destaque tu marca personal.',
    items: ['Galerías interactivas', 'Diseños personalizados', 'Fácil de compartir y actualizar'],
  },
  {
    id: 'webapps',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Aplicaciones Web a Medida',
    description: 'Sistemas interactivos y plataformas digitales con bases de datos y lógica avanzada para gestionar tu negocio.',
    items: ['Paneles de administración', 'Gestión de usuarios y datos', 'Integración de APIs y backend'],
  },
  {
    id: 'maintenance',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Mantenimiento & Soporte',
    description: 'Cuidamos la disponibilidad, seguridad y rendimiento de tu web actual para que siempre funcione sin problemas.',
    items: ['Corrección de errores y bugs', 'Actualizaciones de contenido', 'Mejoras de rendimiento y seguridad'],
  },
];

const techStack = [
  'React',
  'JavaScript',
  'Node.js',
  'Java',
  'C#',
  'HTML5',
  'CSS3',
];

const whyChooseUs = [
  {
    id: 1,
    title: 'Impulsamos su negocio',
    description: 'Desarrollamos soluciones de software eficientes que optimizan sus operaciones y mejoran la experiencia de sus clientes.',
  },
  {
    id: 2,
    title: 'Tecnología confiable',
    description: 'Contamos con un equipo de desarrolladores que aprende constantemente sobre las últimas tecnologías, garantizando soluciones robustas y de alto rendimiento.',
  },
  {
    id: 3,
    title: 'Precios accesibles',
    description: 'Ofrecemos precios competitivos sin sacrificar calidad, adaptándonos a sus necesidades y presupuesto.',
  },
];

const Features = () => {
  return (
    <section className="section section-alt" id="features">
      <div className="container">
        {/* 1. ¿Por qué elegir Atenix? */}
        <div className="why-us-section">
          <h2>¿Por qué elegir Atenix?</h2>
          <p className="section-intro">
            Soluciones prácticas con una experiencia limpia, con un equipo de trabajo en constante crecimiento, adaptación y desarrollo personal y profesional.
          </p>
          <ul className="card-grid">
            {whyChooseUs.map((feature) => (
              <li className="card" key={feature.id}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Tecnologías */}
        <div className="tech-stack-container">
          <span className="tech-stack-label">Tecnologías con las que trabajamos:</span>
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
            <h2>Nuestros Servicios</h2>
            <p className="section-intro">
              Soluciones digitales a la medida de tu proyecto, con código limpio y tecnologías modernas.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features-list">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-cta">
                  Cotizar este servicio →
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
