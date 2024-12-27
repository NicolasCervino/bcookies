import './Products.css';

interface Product {
    name: string;
    description: string;
    price: string;
    category?: string;
}

const Products = () => {
    const products: Product[] = [
        {
            name: 'Mini Crunchy Cookies',
            description: 'Mix 100 gr de todas nuestras cookies en versión mini',
            price: '$2500',
        },
        {
            name: 'Classic Cookies',
            description: 'Chips de chocolate blanco y con leche',
            price: '$2000',
        },
        {
            name: 'Chocotorta',
            description: 'Topping de chocolinas y relleno de mousse de dulce de leche',
            price: '$2500',
        },
        {
            name: 'Bombón Milka Oreo',
            description: 'Topping de galletas oreo y relleno de bombón milka oreo',
            price: '$3500',
        },
        {
            name: 'Nutribanana',
            description: 'Topping de nuez, chips de chocolate, banana y avena',
            price: '$3000',
        },
        {
            name: 'Key Lime Pie',
            description: 'Topping de chocolate blanco rallado y crema de lima',
            price: '$3500',
        },
        {
            name: 'Cheesecake de frutos rojos',
            description:
                'Topping de chips de chocolate blanco y relleno con cheesecake de frutos rojos',
            price: '$3000',
        },
        {
            name: 'Nutella',
            description: 'Topping de chips de chocolate y relleno con pasta de avellanas',
            price: '$3500',
        },
    ];

    return (
        <div className="products-container">
            <div className="products-header">
                <h1>Menú</h1>
                <p className="products-subtitle">
                    Descubre nuestra selección de cookies artesanales, elaboradas diariamente con
                    ingredientes premium
                </p>
                <div className="products-decoration">
                    <span>🍪</span>
                </div>
            </div>
            <div className="products-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <div className="product-content">
                            <h3>{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <span className="product-price">{product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="products-footer">
                <div className="products-footer-content">
                    <h2>¿Listo para ordenar?</h2>
                    <p>Haz tu pedido ahora por WhatsApp</p>
                    <div className="products-footer-buttons">
                        <a href="https://wa.me/TUNUMERO" className="cta-button primary">
                            Hacer Pedido
                        </a>
                    </div>
                </div>
                <div className="products-footer-decoration">
                    <span>🍪</span>
                </div>
            </div>
        </div>
    );
};

export default Products;
