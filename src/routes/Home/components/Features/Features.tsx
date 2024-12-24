import cookies from '@assets/cookies.jpeg';
import packaging from '@assets/packaging.jpeg';
import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <h2>¿Por qué elegir BCookies?</h2>
            <div className="features-grid">
                <div className="feature-card">
                    <img src={packaging} alt="Packaging BCookies" />
                    <h3>Packaging Especial</h3>
                    <p>Presentación perfecta para regalo o para disfrutar</p>
                </div>
                <div className="feature-card">
                    <img src={cookies} alt="Variedad de cookies" />
                    <h3>Recién Horneadas</h3>
                    <p>Frescura y sabor garantizado en cada bocado</p>
                </div>
                <div className="feature-card">
                    <img src="/cookie-closeup.jpg" alt="Detalle de cookie" />
                    <h3>Ingredientes Premium</h3>
                    <p>Seleccionados cuidadosamente para la mejor calidad</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
