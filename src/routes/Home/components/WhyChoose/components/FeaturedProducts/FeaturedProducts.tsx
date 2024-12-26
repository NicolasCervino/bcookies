import './FeaturedProducts.css';

interface FeaturedProductsProps {
    products: Array<{
        name: string;
        price: string;
    }>;
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
    return (
        <div className="featured-section">
            <div className="featured-header">
                <h3>Nuestros Favoritos</h3>
                <span className="featured-badge">TOP 3</span>
            </div>
            <div className="featured-list">
                {products.map((product, index) => (
                    <div key={index} className="featured-item">
                        <h4>{product.name}</h4>
                        <p className="featured-price">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
