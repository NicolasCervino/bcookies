import './Button.css';

interface ButtonProps {
    href: string;
    variant: 'primary' | 'secondary' | 'white';
    children: React.ReactNode;
}

const Button = ({ href, variant, children }: ButtonProps) => {
    return (
        <a href={href} className={`cta-button ${variant}`}>
            {children}
        </a>
    );
};

export default Button;
