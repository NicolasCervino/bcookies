import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>BCookies</h4>
            <p>Las mejores cookies artesanales de Buenos Aires</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/bcookies.arg/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://wa.me/TUNUMERO" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BCookies. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
