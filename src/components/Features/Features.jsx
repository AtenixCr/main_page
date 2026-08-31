import './Features.css';

const featuresData = [
  {
    id: 1,
    title: 'High Performance',
    description: 'Our solutions are optimized for speed and reliability, ensuring the best experience.',
    icon: 'ðŸš€'
  },
  {
    id: 2,
    title: 'Scalable Architecture',
    description: 'Built with scalability in mind, growing seamlessly as your business expands.',
    icon: 'ðŸ“ˆ'
  },
  {
    id: 3,
    title: 'Secure by Design',
    description: 'Security is at the core of everything we build, protecting your data at all times.',
    icon: 'ðŸ”’'
  }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>Why Choose Atenix?</h2>
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
