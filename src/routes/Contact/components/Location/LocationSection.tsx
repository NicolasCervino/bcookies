import './LocationSection.css';

const LocationSection = ({
    locations,
}: {
    locations: { name: string; address: string; details: string[]; mapUrl: string }[];
}) => {
    return (
        <div className="locations-card">
            <h2>Ubicaciones</h2>
            <p className="locations-description">
                Encontranos en nuestros puntos de venta o coordiná tu pedido por WhatsApp. Seguinos
                en Instagram para saber en tiempo real dónde estamos. ¡Hacemos envíos!
            </p>
            <div className="locations-grid">
                {locations.map((location, index) => (
                    <div key={index} className="location-item">
                        <div className="location-header">
                            <h3>{location.name}</h3>
                            <p>
                                <strong>{location.address}</strong>
                            </p>
                            {location.details.map((detail, i) => (
                                <p key={i}>{detail}</p>
                            ))}
                        </div>
                        <div className="map-container">
                            <iframe
                                src={location.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationSection;
