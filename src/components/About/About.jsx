const aboutPoints = [
  {
    title: 'Clear foundations',
    text: 'Folder structure, naming, and APIs that stay easy to extend.',
  },
  {
    title: 'Human-centered products',
    text: "Interfaces that respect the user's time and the team's workflow.",
  },
  {
    title: 'Long-term thinking',
    text: 'Decisions that age well: documentation, tests, and maintainable CSS.',
  },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2>Who we are</h2>
        <p className="section-intro">
          Atenix is a technology company focused on practical software. We keep
          structure simple, code readable, and delivery honest so your team can
          own what we build together.
        </p>
        <ul className="card-grid">
          {aboutPoints.map((point) => (
            <li className="card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
