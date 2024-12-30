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
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-price">{product.price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
