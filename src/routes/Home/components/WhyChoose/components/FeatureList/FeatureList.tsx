import './FeatureList.css';

interface FeatureListProps {
    features: Array<{
        title: string;
        description: string;
        image: string;
    }>;
}

const FeatureList = ({ features }: FeatureListProps) => {
    return (
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
    );
};

export default FeatureList;
