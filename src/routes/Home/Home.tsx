import cookies from '@assets/cookies.jpg';
import ingredients from '@assets/ingredients.jpg';
import packaging from '@assets/packaging.jpeg';
import { Button } from '@atoms';
import Hero from './components/Hero/Hero';
import WhyChoose from './components/WhyChoose/WhyChoose';
import './Home.css';

const Home = () => {
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
        <div className="home">
            <Hero />
            <WhyChoose features={features} featuredProducts={featuredProducts} />
            <div className="home-about-preview">
                <span className="home-about-decoration">🍪</span>
                <div className="home-about-content">
                    <h2>Conoce Nuestra Historia</h2>
                    <p>
                        Descubre cómo nació BCookies y por qué nos apasiona crear las mejores
                        cookies artesanales de Buenos Aires
                    </p>
                    <Button href="/nosotros" variant="primary">
                        Conocer Más
                    </Button>
                </div>
                <span className="home-about-decoration">🍪</span>
            </div>
        </div>
    );
};

export default Home;
