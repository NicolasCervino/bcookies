import { DecoratedSection } from '@styled';
import './About.css';
import { IntroSection } from './components/Intro/IntroSection';
import { TeamSection } from './components/Team/TeamSection';
import ValuesSection from './components/Values/ValuesSection';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-initial-section">
                <div className="about-header">
                    <h1>Nuestra Historia</h1>
                    <p>
                        Descubre cómo nació BCookies y por qué nos apasiona crear las mejores
                        cookies artesanales de Buenos Aires
                    </p>
                </div>
                <IntroSection />
            </div>

            <div className="about-values-section">
                <TeamSection />
                <ValuesSection />
                <DecoratedSection
                    title="¿Listo para probar nuestras cookies?"
                    description="Haz tu pedido ahora y disfruta de nuestras deliciosas cookies artesanales hechas con amor"
                    buttonText="Hacer Pedido"
                    buttonHref="https://wa.me/TUNUMERO"
                    buttonVariant="primary"
                />
            </div>
        </div>
    );
};

export default About;
