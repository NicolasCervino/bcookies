import heroImage from '@assets/hero-1.jpeg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>BCookies</h1>
                <p className="hero-subtitle">Cookies Artesanales</p>
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
                    <a href="#productos" className="cta-button primary">
                        Ver Productos
                    </a>
                    <a href="/contacto" className="cta-button secondary">
                        Hacer Pedido
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Cookie artesanal BCookies" />
            </div>
        </section>
    );
};

export default Hero;
