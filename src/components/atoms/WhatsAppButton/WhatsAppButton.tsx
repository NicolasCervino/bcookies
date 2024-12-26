import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
    phoneNumber: string;
}

const WhatsAppButton = ({ phoneNumber }: WhatsAppButtonProps) => {
    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
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
