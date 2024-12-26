import ContactCTA from './components/Contact/ContactCTA';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import FeatureList from './components/FeatureList/FeatureList';
import './WhyChoose.css';

interface WhyChooseProps {
    features: Array<{
        title: string;
        description: string;
        image: string;
    }>;
    featuredProducts: Array<{
        name: string;
        price: string;
    }>;
}

const WhyChoose = ({ features, featuredProducts }: WhyChooseProps) => {
    return (
        <section className="why-choose">
            <h2>¿Por qué elegir BCookies?</h2>
            <div className="why-choose-content">
                <FeatureList features={features} />
                <div className="side-content">
                    <FeaturedProducts products={featuredProducts} />
                    <ContactCTA />
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
