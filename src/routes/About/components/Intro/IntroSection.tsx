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
                    un hobby en nuestra cocina se está transformando en un emprendimiento de cookies
                    artesanales que crece día a día.
                </p>
                <p>
                    Cada receta es el resultado de meses de prueba y error, buscando la combinación
                    perfecta de sabores y texturas. Nos enorgullece usar ingredientes de primera
                    calidad y técnicas artesanales para crear cookies únicas.
                </p>
            </div>
        </div>
    );
};
