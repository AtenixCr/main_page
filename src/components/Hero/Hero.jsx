const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <p className="eyebrow">Atenix</p>
        <h1>Programamos hoy el éxito de tu mañana</h1>
        <p className="lede">
          Transformamos tus ideas en soluciones tecnológicas eficientes y escalables, diseñadas para impulsar el crecimiento de tu negocio.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">Contáctanos</a>
          <a className="btn btn-ghost" href="#features">Nuestros Servicios</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
