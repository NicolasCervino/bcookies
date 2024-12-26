import cookies from '@assets/cookies.jpg';
import ingredients from '@assets/ingredients.jpg';
import packaging from '@assets/packaging.jpeg';
import './WhyChoose.css';

const WhyChoose = () => {
    const features = [
        {
            title: 'Recién Horneadas',
            description: 'Frescura y sabor garantizado en cada bocado',
            image: cookies,
        },
        {
            title: 'Ingredientes Premium',
            description: 'Seleccionados cuidadosamente para la mejor calidad',
            image: ingredients,
        },
        {
            title: 'Packaging Especial',
            description: 'Presentación perfecta para regalo o para disfrutar',
            image: packaging,
        },
    ];
    const featuredProducts = [
        { name: 'Bombón Milka Oreo', price: '$3500' },
        { name: 'Nutella', price: '$3500' },
        { name: 'Key Lime Pie', price: '$3500' },
    ];

    return (
        <section className="why-choose">
            <h2>¿Por qué elegir BCookies?</h2>

            <div className="why-choose-content">
                <div className="features-section">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-card-content">
                                <img src={feature.image} alt={feature.title} />
                                <div className="feature-card-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="side-content">
                    <div className="featured-section">
                        <div className="featured-header">
                            <h3>Nuestros Favoritos</h3>
                            <span className="featured-badge">TOP 3</span>
                        </div>
                        <div className="featured-list">
                            {featuredProducts.map((product, index) => (
                                <div key={index} className="featured-item">
                                    <h4>{product.name}</h4>
                                    <p className="featured-price">{product.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-cta">
                        <h3>¿Listo para ordenar?</h3>
                        <p>Haz tu pedido ahora y disfruta de nuestras deliciosas cookies</p>
                        <a href="/contacto" className="cta-button primary">
                            Hacer Pedido
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
