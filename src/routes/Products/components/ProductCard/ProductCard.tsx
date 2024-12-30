import './ProductCard.css';

export type Product = {
    name: string;
    description: string;
    price: string;
};

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="product-card">
            <div className="product-content">
                <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                </div>
                <span className="product-price">{product.price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
