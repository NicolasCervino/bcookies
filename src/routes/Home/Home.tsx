import Hero from './components/Hero/Hero';
import WhyChoose from './components/WhyChoose/WhyChoose';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <WhyChoose />
        </div>
    );
};

export default Home;
