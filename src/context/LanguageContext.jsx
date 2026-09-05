import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto'
    },
    hero: {
      title: 'Programamos hoy el éxito de tu mañana',
      subtitle: 'Transformamos tus ideas en soluciones tecnológicas eficientes y escalables, diseñadas para impulsar el crecimiento de tu negocio.',
      cta1: 'Contáctanos',
      cta2: 'Nuestros Servicios'
    },
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Conoce al equipo, nuestra misión, visión y los valores que nos impulsan cada día.',
      missionTitle: 'Nuestra Misión',
      missionDesc: 'Desarrollar e implementar soluciones tecnológicas a la medida, ofreciendo creación de software y mantenimiento continuo de los proyectos. Nuestro propósito es resolver los desafíos técnicos de empresas de diversos tamaños de forma ágil y efectiva, convirtiéndonos en el aliado que impulse su productividad diaria.',
      visionTitle: 'Nuestra Visión',
      visionDesc: 'Consolidarnos como una empresa líder en desarrollo y soluciones de TI, reconocida por la calidad de nuestro código, la innovación de nuestras aplicaciones y nuestro compromiso inquebrantable con el éxito y la evolución digital de cada uno de nuestros clientes.',
      clientsTitle: 'Nuestros Clientes',
      clientsDesc: 'Dirigimos nuestras soluciones a empresas de diversos tamaños y sectores que buscan optimizar sus procesos, transformar digitalmente sus operaciones y alcanzar nuevos niveles de productividad mediante software a medida y soporte técnico de excelencia.',
      valuesTitle: 'Nuestros Valores',
      values: [
        { strong: 'Innovación:', text: ' Buscamos constantemente nuevas formas de aportar valor.' },
        { strong: 'Calidad:', text: ' Nos enorgullece entregar código limpio y mantenible.' },
        { strong: 'Compromiso:', text: ' El éxito de nuestros clientes es nuestro éxito.' },
        { strong: 'Transparencia:', text: ' Comunicación clara en cada etapa del proyecto.' }
      ],
      teamTitle: 'Nuestro Equipo',
      portfolio: 'Ver Portafolio →'
    },
    features: {
      whyUsTitle: '¿Por qué elegir Atenix?',
      whyUsSubtitle: 'Soluciones prácticas con una experiencia limpia, con un equipo de trabajo en constante crecimiento, adaptación y desarrollo personal y profesional.',
      whyUs: [
        { title: 'Impulsamos su negocio', desc: 'Desarrollamos soluciones de software eficientes que optimizan sus operaciones y mejoran la experiencia de sus clientes.' },
        { title: 'Tecnología confiable', desc: 'Contamos con un equipo de desarrolladores que aprende constantemente sobre las últimas tecnologías, garantizando soluciones robustas y de alto rendimiento.' },
        { title: 'Precios accesibles', desc: 'Ofrecemos precios competitivos sin sacrificar calidad, adaptándonos a sus necesidades y presupuesto.' }
      ],
      techStackLabel: 'Tecnologías con las que trabajamos:',
      servicesTitle: 'Nuestros Servicios',
      servicesSubtitle: 'Soluciones digitales a la medida de tu proyecto, con código limpio y tecnologías modernas.',
      services: [
        {
          title: 'Páginas Web Corporativas',
          desc: 'Sitios web institucionales y landing pages modernos, adaptables a móviles y optimizados para posicionarse en buscadores.',
          items: ['Diseño 100% responsivo', 'Optimización SEO y velocidad', 'Enlace directo a WhatsApp y redes']
        },
        {
          title: 'Portafolios Profesionales',
          desc: 'Muestra tus proyectos, trabajos y habilidades con una presencia visual impactante que destaque tu marca personal.',
          items: ['Galerías interactivas', 'Diseños personalizados', 'Fácil de compartir y actualizar']
        },
        {
          title: 'Aplicaciones Web a Medida',
          desc: 'Sistemas interactivos y plataformas digitales con bases de datos y lógica avanzada para gestionar tu negocio.',
          items: ['Paneles de administración', 'Gestión de usuarios y datos', 'Integración de APIs y backend']
        },
        {
          title: 'Mantenimiento & Soporte',
          desc: 'Cuidamos la disponibilidad, seguridad y rendimiento de tu web actual para que siempre funcione sin problemas.',
          items: ['Corrección de errores y bugs', 'Actualizaciones de contenido', 'Mejoras de rendimiento y seguridad']
        }
      ],
      quoteBtn: 'Cotizar este servicio →'
    },
    contact: {
      statusBadge: 'Disponibles para nuevos proyectos',
      title: 'Hablemos',
      subtitle: 'Cuéntanos qué quieres construir. Te ayudamos a convertir ideas en productos digitales duraderos y eficientes.',
      subtext: 'Escríbenos directamente por WhatsApp, correo o conéctate con nosotros en nuestras redes oficiales. Te responderemos a la brevedad.',
      channels: [
        { title: 'WhatsApp', desc: 'Respuesta rápida por chat', action: 'Escribir por WhatsApp' },
        { title: 'Correo Electrónico', desc: 'atenixcr@gmail.com', action: 'Enviar un correo' },
        { title: 'LinkedIn', desc: 'Conexión y red profesional', action: 'Ver perfil corporativo' },
        { title: 'GitHub', desc: 'Código y proyectos', action: 'Explorar repositorios' },
        { title: 'Instagram', desc: '@atenix.cr', action: 'Seguir en Instagram' },
        { title: 'Facebook', desc: 'Atenix Cr', action: 'Visitar en Facebook' }
      ]
    },
    footer: {
      rights: 'Atenix. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'We program today the success of your tomorrow',
      subtitle: 'We transform your ideas into efficient and scalable technological solutions, designed to boost your business growth.',
      cta1: 'Contact Us',
      cta2: 'Our Services'
    },
    about: {
      title: 'About Us',
      subtitle: 'Meet the team, our mission, vision, and the values that drive us every day.',
      missionTitle: 'Our Mission',
      missionDesc: 'Develop and implement custom technological solutions, offering software creation and continuous project maintenance. Our purpose is to solve the technical challenges of companies of various sizes in an agile and effective way, becoming the ally that boosts their daily productivity.',
      visionTitle: 'Our Vision',
      visionDesc: 'Consolidate as a leading company in development and IT solutions, recognized for the quality of our code, the innovation of our applications, and our unwavering commitment to the success and digital evolution of each of our clients.',
      clientsTitle: 'Our Clients',
      clientsDesc: 'We direct our solutions to companies of various sizes and sectors that seek to optimize their processes, digitally transform their operations, and reach new levels of productivity through custom software and excellent technical support.',
      valuesTitle: 'Our Values',
      values: [
        { strong: 'Innovation:', text: ' We constantly seek new ways to provide value.' },
        { strong: 'Quality:', text: ' We take pride in delivering clean and maintainable code.' },
        { strong: 'Commitment:', text: ' Our clients\' success is our success.' },
        { strong: 'Transparency:', text: ' Clear communication at every stage of the project.' }
      ],
      teamTitle: 'Our Team',
      portfolio: 'View Portfolio →'
    },
    features: {
      whyUsTitle: 'Why choose Atenix?',
      whyUsSubtitle: 'Practical solutions with a clean experience, with a work team in constant growth, adaptation, and personal and professional development.',
      whyUs: [
        { title: 'We boost your business', desc: 'We develop efficient software solutions that optimize your operations and improve your clients\' experience.' },
        { title: 'Reliable technology', desc: 'We have a team of developers who are constantly learning about the latest technologies, ensuring robust and high-performance solutions.' },
        { title: 'Accessible prices', desc: 'We offer competitive prices without sacrificing quality, adapting to your needs and budget.' }
      ],
      techStackLabel: 'Technologies we work with:',
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Digital solutions tailored to your project, with clean code and modern technologies.',
      services: [
        {
          title: 'Corporate Web Pages',
          desc: 'Institutional websites and modern landing pages, mobile-friendly and SEO optimized.',
          items: ['100% responsive design', 'SEO and speed optimization', 'Direct link to WhatsApp and social media']
        },
        {
          title: 'Professional Portfolios',
          desc: 'Showcase your projects, work, and skills with a striking visual presence that highlights your personal brand.',
          items: ['Interactive galleries', 'Custom designs', 'Easy to share and update']
        },
        {
          title: 'Custom Web Apps',
          desc: 'Interactive systems and digital platforms with databases and advanced logic to manage your business.',
          items: ['Admin dashboards', 'User and data management', 'API and backend integration']
        },
        {
          title: 'Maintenance & Support',
          desc: 'We take care of the availability, security, and performance of your current website so it always works smoothly.',
          items: ['Bug and error fixing', 'Content updates', 'Performance and security improvements']
        }
      ],
      quoteBtn: 'Quote this service →'
    },
    contact: {
      statusBadge: 'Available for new projects',
      title: 'Let\'s talk',
      subtitle: 'Tell us what you want to build. We help you turn ideas into durable and efficient digital products.',
      subtext: 'Write to us directly via WhatsApp, email, or connect with us on our official social media. We will respond shortly.',
      channels: [
        { title: 'WhatsApp', desc: 'Quick response via chat', action: 'Message on WhatsApp' },
        { title: 'Email', desc: 'atenixcr@gmail.com', action: 'Send an email' },
        { title: 'LinkedIn', desc: 'Professional connection', action: 'View corporate profile' },
        { title: 'GitHub', desc: 'Code and projects', action: 'Explore repositories' },
        { title: 'Instagram', desc: '@atenix.cr', action: 'Follow on Instagram' },
        { title: 'Facebook', desc: 'Atenix Cr', action: 'Visit on Facebook' }
      ]
    },
    footer: {
      rights: 'Atenix. All rights reserved.'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      about: 'Sobre nós',
      contact: 'Contato'
    },
    hero: {
      title: 'Programamos hoje o sucesso do seu amanhã',
      subtitle: 'Transformamos suas ideias em soluções tecnológicas eficientes e escaláveis, projetadas para impulsionar o crescimento do seu negócio.',
      cta1: 'Contate-nos',
      cta2: 'Nossos Serviços'
    },
    about: {
      title: 'Sobre Nós',
      subtitle: 'Conheça a equipe, nossa missão, visão e os valores que nos movem todos os dias.',
      missionTitle: 'Nossa Missão',
      missionDesc: 'Desenvolver e implementar soluções tecnológicas personalizadas, oferecendo criação de software e manutenção contínua de projetos. Nosso propósito é resolver os desafios técnicos de empresas de diversos tamanhos de forma ágil e eficaz, tornando-nos o aliado que impulsiona sua produtividade diária.',
      visionTitle: 'Nossa Visão',
      visionDesc: 'Consolidar-nos como uma empresa líder em desenvolvimento e soluções de TI, reconhecida pela qualidade do nosso código, pela inovação de nossas aplicações e pelo nosso compromisso inabalável com o sucesso e a evolução digital de cada um de nossos clientes.',
      clientsTitle: 'Nossos Clientes',
      clientsDesc: 'Direcionamos nossas soluções para empresas de diversos tamanhos e setores que buscam otimizar seus processos, transformar digitalmente suas operações e alcançar novos níveis de produtividade por meio de software personalizado e excelente suporte técnico.',
      valuesTitle: 'Nossos Valores',
      values: [
        { strong: 'Inovação:', text: ' Buscamos constantemente novas formas de agregar valor.' },
        { strong: 'Qualidade:', text: ' Temos orgulho de entregar código limpo e sustentável.' },
        { strong: 'Compromisso:', text: ' O sucesso de nossos clientes é o nosso sucesso.' },
        { strong: 'Transparência:', text: ' Comunicação clara em todas as etapas do projeto.' }
      ],
      teamTitle: 'Nossa Equipe',
      portfolio: 'Ver Portfólio →'
    },
    features: {
      whyUsTitle: 'Por que escolher a Atenix?',
      whyUsSubtitle: 'Soluções práticas com uma experiência limpa, com uma equipe de trabalho em constante crescimento, adaptação e desenvolvimento pessoal e profissional.',
      whyUs: [
        { title: 'Impulsionamos seu negócio', desc: 'Desenvolvemos soluções de software eficientes que otimizam suas operações e melhoram a experiência de seus clientes.' },
        { title: 'Tecnologia confiável', desc: 'Contamos com uma equipe de desenvolvedores que aprende constantemente sobre as tecnologias mais recentes, garantindo soluções robustas e de alto desempenho.' },
        { title: 'Preços acessíveis', desc: 'Oferecemos preços competitivos sem sacrificar a qualidade, adaptando-nos às suas necessidades e orçamento.' }
      ],
      techStackLabel: 'Tecnologias com as quais trabalhamos:',
      servicesTitle: 'Nossos Serviços',
      servicesSubtitle: 'Soluções digitais adaptadas ao seu projeto, com código limpo e tecnologias modernas.',
      services: [
        {
          title: 'Páginas Web Corporativas',
          desc: 'Sites institucionais e landing pages modernos, adaptáveis a dispositivos móveis e otimizados para mecanismos de busca.',
          items: ['Design 100% responsivo', 'Otimização de SEO e velocidade', 'Link direto para WhatsApp e redes sociais']
        },
        {
          title: 'Portfólios Profissionais',
          desc: 'Mostre seus projetos, trabalhos e habilidades com uma presença visual marcante que destaca sua marca pessoal.',
          items: ['Galerias interativas', 'Designs personalizados', 'Fácil de compartilhar e atualizar']
        },
        {
          title: 'Aplicativos Web Sob Medida',
          desc: 'Sistemas interativos e plataformas digitais com bancos de dados e lógica avançada para gerenciar seu negócio.',
          items: ['Painéis de administração', 'Gerenciamento de usuários e dados', 'Integração de APIs e backend']
        },
        {
          title: 'Manutenção e Suporte',
          desc: 'Cuidamos da disponibilidade, segurança e desempenho do seu site atual para que ele sempre funcione sem problemas.',
          items: ['Correção de bugs e erros', 'Atualizações de conteúdo', 'Melhorias de desempenho e segurança']
        }
      ],
      quoteBtn: 'Cotar este serviço →'
    },
    contact: {
      statusBadge: 'Disponível para novos projetos',
      title: 'Vamos conversar',
      subtitle: 'Conte-nos o que você deseja construir. Ajudamos você a transformar ideias em produtos digitais duráveis e eficientes.',
      subtext: 'Escreva diretamente para nós via WhatsApp, e-mail ou conecte-se conosco em nossas redes sociais oficiais. Responderemos em breve.',
      channels: [
        { title: 'WhatsApp', desc: 'Resposta rápida por chat', action: 'Enviar mensagem no WhatsApp' },
        { title: 'E-mail', desc: 'atenixcr@gmail.com', action: 'Enviar um e-mail' },
        { title: 'LinkedIn', desc: 'Conexão e rede profissional', action: 'Ver perfil corporativo' },
        { title: 'GitHub', desc: 'Código e projetos', action: 'Explorar repositórios' },
        { title: 'Instagram', desc: '@atenix.cr', action: 'Siga no Instagram' },
        { title: 'Facebook', desc: 'Atenix Cr', action: 'Visite no Facebook' }
      ]
    },
    footer: {
      rights: 'Atenix. Todos os direitos reservados.'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const browserLang = navigator.language.split('-')[0];
    if (['es', 'en', 'pt'].includes(browserLang)) {
      return browserLang;
    }
    return 'es';
  });

  const t = (key, fallback = '') => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value) {
        value = value[k];
      }
    }
    return value || fallback || key;
  };

  const getTranslationObj = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value) {
        value = value[k];
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getTranslationObj }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
