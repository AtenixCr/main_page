const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home" aria-label="Atenix home">
          <span className="logo-mark" aria-hidden="true" />
          Atenix
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
