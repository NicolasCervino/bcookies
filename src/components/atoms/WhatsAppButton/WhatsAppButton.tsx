import { PHONE_NUMBER_URL } from '@constants/contact-information';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a
            href={PHONE_NUMBER_URL}
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    );
};

export default WhatsAppButton;
