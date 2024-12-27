import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    href: string;
    variant: 'primary' | 'secondary' | 'white';
    children: React.ReactNode;
}

const Button = ({ href, variant, children }: ButtonProps) => {
    const isInternalLink = href.startsWith('/');

    if (isInternalLink) {
        return (
            <Link to={href} className={`cta-button ${variant}`}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} className={`cta-button ${variant}`}>
            {children}
        </a>
    );
};

export default Button;
