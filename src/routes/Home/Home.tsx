import cookies from '@assets/cookies.jpg';
import ingredients from '@assets/ingredients.jpg';
import packaging from '@assets/packaging.jpeg';
import { DecoratedSection } from '@styled';
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
            <DecoratedSection
                title="Conoce Nuestra Historia"
                description="Descubre cómo nació BCookies y por qué nos apasiona crear las mejores cookies artesanales de Buenos Aires"
                buttonText="Conocer Más"
                buttonHref="/nosotros"
                buttonVariant="primary"
            />
        </div>
    );
};

export default Home;
