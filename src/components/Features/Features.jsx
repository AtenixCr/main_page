const featuresData = [
  {
    id: 1,
    title: 'High Performance',
    description: 'Our solutions are optimized for speed and reliability, ensuring the best experience.',
  },
  {
    id: 2,
    title: 'Scalable Architecture',
    description: 'Built with scalability in mind, growing seamlessly as your business expands.',
  },
  {
    id: 3,
    title: 'Secure by Design',
    description: 'Security is at the core of everything we build, protecting your data at all times.',
  },
];

const Features = () => {
  return (
    <section className="section section-alt" id="features">
      <div className="container">
        <h2>Why Choose Atenix?</h2>
        <p className="section-intro">
          Practical software with a clean experience — from first landing page to production-ready platforms.
        </p>
        <ul className="card-grid">
          {featuresData.map((feature) => (
            <li className="card" key={feature.id}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
