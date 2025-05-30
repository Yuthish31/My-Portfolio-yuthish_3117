import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Header() {
  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/creations">Creations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
