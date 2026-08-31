import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Atenix</a>
        </div>
        <nav className="navbar-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact" className="btn-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
