import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Building the Future with <span className="highlight">Atenix</span></h1>
        <p>
          We provide cutting-edge solutions to elevate your business. 
          Discover innovation, performance, and reliability all in one place.
        </p>
        <div className="hero-actions">
          <button className="btn-large btn-primary">Get Started</button>
          <button className="btn-large btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
