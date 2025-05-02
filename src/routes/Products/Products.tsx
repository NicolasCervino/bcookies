import { useState } from 'react';
import { PHONE_NUMBER_URL } from '@constants/contact-information';
import { DecoratedSection } from '@styled';
import '@styles/animations.css';
import './Products.css';
import AccordionItem from './components/AccordionItem/AccordionItem';
import { productUtils } from './utils';

const Products = () => {
    const categories = Object.keys(productUtils.productsByCategory);
    const firstCategory = categories.length > 0 ? categories[0] : null;

    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() => {
        return firstCategory ? { [firstCategory]: true } : {};
    });

    const onCategoryToggle = (categoryName: string) => {
        setOpenCategories(prev => ({
            ...prev,
            [categoryName]: !prev[categoryName]
        }));
    };

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

            <div className="accordion-container">
                {Object.entries(productUtils.productsByCategory).map(([category, categoryProducts]) => (
                    <AccordionItem
                        key={category}
                        category={category}
                        products={categoryProducts}
                        isOpen={openCategories[category] || false}
                        onToggle={onCategoryToggle}
                    />
                ))}
            </div>

            <DecoratedSection
                title="¿Listo para ordenar?"
                description="Haz tu pedido ahora por WhatsApp"
                buttonText="Hacer Pedido"
                buttonHref={PHONE_NUMBER_URL}
                buttonVariant="primary"
            />
        </div>
    );
};

export default Products;
