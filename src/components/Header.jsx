import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking any link
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img 
          src={logo} 
          alt="Logo" 
          className="logo"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <h1 className="logo-text">Yuthish-3117</h1>
      </div>

      <button 
        className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`nav-container ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li className={isActive('/creations') ? 'active' : ''}>
            <Link to="/creations" onClick={closeMenu}>Creations</Link>
          </li>
          <li className={isActive('/contact') ? 'active' : ''}>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;