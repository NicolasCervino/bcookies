import { PHONE_NUMBER_URL } from '@constants/contact-information';
import { DecoratedSection } from '@styled';
import './Contact.css';
import LocationSection from './components/Location/LocationSection';
import ScheduleSection from './components/Schedule/ScheduleSection';

const Contact = () => {
    const contactInfo = {
        locations: [
            {
                name: 'Martes',
                address: 'Florencio Varela, Buenos Aires',
                details: ['En la plaza San Juan Bautista', 'Enfrente de la pintureria Prestigio'],
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d819.0201303627646!2d-58.27935407148254!3d-34.80391599829812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ4JzE0LjEiUyA1OMKwMTYnNDMuNCJX!5e0!3m2!1ses-419!2sar!4v1735601357322!5m2!1ses-419!2sar',
            },
            {
                name: 'De Miércoles a Domingo',
                address: 'Palermo, Buenos Aires',
                details: ['Lago de Regatas', 'Enfrente del mirador'],
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3285.703838433877!2d-58.43340822426144!3d-34.56105327296968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMzJzM5LjgiUyA1OMKwMjUnNTEuMCJX!5e0!3m2!1ses!2sar!4v1735601248698!5m2!1ses!2sar',
            },
        ],
        schedule: [
            { days: 'Lunes', hours: 'Cerrado' },
            { days: 'Martes', hours: '9:00 - 18:00' },
            { days: 'Miércoles', hours: '9:00 - 18:00' },
            { days: 'Jueves', hours: '9:00 - 18:00' },
            { days: 'Viernes', hours: '9:00 - 18:00' },
            { days: 'Sábados', hours: '10:00 - 18:00' },
            { days: 'Domingos', hours: '10:00 - 18:00' },
        ],
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contacto</h1>
                <p>
                    ¿Tenés ganas de probar nuestras cookies? ¡Buscanos en nuestros puntos de venta!
                    Seguinos en Instagram (@bcookies.arg) para saber dónde estamos cada día, o pedí
                    directamente por WhatsApp y coordinamos la entrega.
                </p>
            </div>

            <div className="contact-grid">
                <ScheduleSection schedule={contactInfo.schedule} />
                <LocationSection locations={contactInfo.locations} />
            </div>

            <DecoratedSection
                title="¿Listo para ordenar?"
                description="Hacé tu pedido ahora por WhatsApp"
                buttonText="Hacer Pedido"
                buttonHref={PHONE_NUMBER_URL}
                buttonVariant="primary"
            />
        </div>
    );
};

export default Contact;
