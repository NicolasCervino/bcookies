import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER_URL } from '@constants/contact-information';
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
                        <p>¡Seguinos en redes y hacé tu pedido!</p>
                        <div className="social-links">
                            <a
                                href="https://www.instagram.com/bcookies.arg/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Seguinos en Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                                <span>@bcookies.arg</span>
                            </a>
                            <a
                                href={PHONE_NUMBER_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Contactanos por WhatsApp"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <span>{DISPLAY_PHONE_NUMBER}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        &copy; {new Date().getFullYear()} BCookies. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
