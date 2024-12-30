import { Button } from '@atoms';
import './DecoratedSection.css';

interface DecoratedSectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    buttonVariant?: 'primary' | 'secondary';
}

const DecoratedSection = ({
    title,
    description,
    buttonText,
    buttonHref,
    buttonVariant = 'primary',
}: DecoratedSectionProps) => {
    return (
        <div className="decorated-section">
            <span className="decorated-section-decoration">🍪</span>
            <div className="decorated-section-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Button href={buttonHref} variant={buttonVariant}>
                    {buttonText}
                </Button>
            </div>
            <span className="decorated-section-decoration">🍪</span>
        </div>
    );
};

export default DecoratedSection;
