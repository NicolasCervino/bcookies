import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Hero />

            <section className="featured">
                <h2>Nuestros Favoritos</h2>
                <div className="featured-grid">
                    <div className="featured-item">
                        <img src="/cookies-chocolate.jpg" alt="Cookies de Chocolate" />
                        <h3>Cookies de Chocolate</h3>
                    </div>
                    <div className="featured-item">
                        <img src="/cookies-nutella.jpg" alt="Cookies de Nutella" />
                        <h3>Cookies de Nutella</h3>
                    </div>
                    <div className="featured-item">
                        <img src="/brownies.jpg" alt="Brownies" />
                        <h3>Brownies</h3>
                    </div>
                </div>
            </section>

            <Features />
        </div>
    );
};

export default Home;
