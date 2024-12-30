import aboutImage from '@assets/about-image.jpg';
import './IntroSection.css';
export const IntroSection = () => {
    return (
        <div className="about-content">
            <div className="about-image">
                <img src={aboutImage} alt="BCookies - Nuestra Historia" />
            </div>
            <div className="about-text">
                <h2>De Pasión a Profesión</h2>
                <p>
                    BCookies nació de un sueño y una pasión por la repostería. Lo que comenzó como
                    un hobby en nuestra cocina se transformó en una marca reconocida por sus
                    deliciosas cookies artesanales.
                </p>
                <p>
                    Cada receta es el resultado de meses de prueba y error, buscando la combinación
                    perfecta de sabores y texturas. Nos enorgullece usar ingredientes de primera
                    calidad y técnicas artesanales para crear cookies únicas.
                </p>
                <p>
                    Hoy, BCookies es sinónimo de calidad y sabor en Buenos Aires, y seguimos
                    creciendo gracias al apoyo de nuestros fieles clientes que comparten nuestra
                    pasión por las cookies perfectas.
                </p>
            </div>
        </div>
    );
};
