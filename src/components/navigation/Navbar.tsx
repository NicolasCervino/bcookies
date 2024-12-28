import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/b-logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                {!isHome && (
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="BCookies" className="navbar-logo" />
                    </Link>
                )}
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>
                        Inicio
                    </Link>
                    <Link to="/productos" onClick={toggleMenu}>
                        Productos
                    </Link>
                    <Link to="/nosotros" onClick={toggleMenu}>
                        Nosotros
                    </Link>
                    <Link to="/contacto" onClick={toggleMenu}>
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
