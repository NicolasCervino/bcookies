import heroImage2 from '@assets/hero-2.jpg';
import heroImage from '@assets/hero.jpg';
import logo from '@assets/logo.png';
import { Button, ScrollIndicator } from '@atoms';
import '@styles/animations.css';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-logo-container">
                    <img src={logo} alt="BCookies" className="hero-logo animate-slideInUp" />
                    <p className="hero-subtitle animate-fadeInGently delay-1">
                        Cookies Artesanales
                    </p>
                </div>
                <p className="hero-description animate-fadeInGently delay-1">
                    Horneadas con amor en el corazón de Buenos Aires
                </p>

                <div className="hero-features">
                    <div className="hero-feature animate-slideInLeft delay-2">
                        <span className="animate-fadeInGently delay-2">🍪</span>
                        <p>Ingredientes premium seleccionados</p>
                    </div>
                    <div className="hero-feature animate-slideInLeft delay-2">
                        <span className="animate-fadeInGently delay-2">🌟</span>
                        <p>Recetas únicas y originales</p>
                    </div>
                    <div className="hero-feature animate-slideInLeft delay-3">
                        <span className="animate-fadeInGently delay-3">🚚</span>
                        <p>Envíos a todo CABA y GBA</p>
                    </div>
                </div>

                <div className="hero-buttons animate-slideInUp delay-3">
                    <Button href="/productos" variant="primary">
                        Ver Productos
                    </Button>
                    <Button href="/contacto" variant="secondary">
                        Hacer Pedido
                    </Button>
                </div>
            </div>
            <div className="hero-image animate-fadeInGently delay-2">
                <img src={heroImage} alt="Cookie artesanal BCookies" className="hero-img-1" />
                <img src={heroImage2} alt="Cookie artesanal BCookies" className="hero-img-2" />
            </div>
            <ScrollIndicator />
        </section>
    );
};

export default Hero;
