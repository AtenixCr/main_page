const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <p className="eyebrow">Atenix</p>
        <h1>Building the Future with Atenix</h1>
        <p className="lede">
          We provide cutting-edge solutions to elevate your business.
          Discover innovation, performance, and reliability all in one place.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">Get Started</a>
          <a className="btn btn-ghost" href="#features">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
