import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home" aria-label="Atenix home" onClick={() => setIsMenuOpen(false)}>
          Atenix
        </a>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Primary">
          <div className="nav-links">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
          </div>

          <div className="nav-controls">
            <select
              className="lang-select"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                setIsMenuOpen(false);
              }}
              aria-label="Select language"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="pt">PT</option>
            </select>

            <button
              className="icon-btn"
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
