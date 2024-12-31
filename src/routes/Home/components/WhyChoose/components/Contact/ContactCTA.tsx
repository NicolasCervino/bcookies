import { Button } from '@atoms';
import { PHONE_NUMBER_URL } from '@constants/contact-information';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-cta">
            <h3>¿Listo para ordenar?</h3>
            <p>Haz tu pedido ahora y disfruta de nuestras deliciosas cookies</p>
            <Button href={PHONE_NUMBER_URL} variant="white">
                Hacer Pedido
            </Button>
        </div>
    );
};

export default Contact;
