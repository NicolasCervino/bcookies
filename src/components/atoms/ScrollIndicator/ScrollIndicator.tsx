import './ScrollIndicator.css';

const ScrollIndicator = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="scroll-indicator" onClick={scrollToContent}>
            <div className="scroll-indicator-chevron"></div>
        </div>
    );
};

export default ScrollIndicator;
