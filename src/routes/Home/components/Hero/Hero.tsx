import heroImage2 from '@assets/hero-2.jpg';
import heroImage from '@assets/hero.jpg';
import logo from '@assets/logo.png';
import { Button, ScrollIndicator } from '@atoms';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-logo-container">
                    <img src={logo} alt="BCookies" className="hero-logo" />
                    <p className="hero-subtitle">Cookies Artesanales</p>
                </div>
                <p className="hero-description">Horneadas con amor en el corazón de Buenos Aires</p>

                <div className="hero-features">
                    <div className="hero-feature">
                        <span>🍪</span>
                        <p>Ingredientes premium seleccionados</p>
                    </div>
                    <div className="hero-feature">
                        <span>🌟</span>
                        <p>Recetas únicas y originales</p>
                    </div>
                    <div className="hero-feature">
                        <span>🚚</span>
                        <p>Envíos a todo CABA y GBA</p>
                    </div>
                </div>

                <div className="hero-buttons">
                    <Button href="/productos" variant="primary">
                        Ver Productos
                    </Button>
                    <Button href="/contacto" variant="secondary">
                        Hacer Pedido
                    </Button>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Cookie artesanal BCookies" className="hero-img-1" />
                <img src={heroImage2} alt="Cookie artesanal BCookies" className="hero-img-2" />
            </div>
            <ScrollIndicator />
        </section>
    );
};

export default Hero;
