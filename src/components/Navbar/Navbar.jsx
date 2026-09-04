const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home" aria-label="Atenix home">
          Atenix
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#home">Inicio</a>
          <a href="#features">Servicios</a>
          <a href="#about">Nosotros</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
