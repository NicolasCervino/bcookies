import { FC } from 'react';
import ProductCard, { Product } from '../ProductCard/ProductCard';
import './AccordionItem.css';

interface AccordionItemProps {
  category: string;
  products: Product[];
  isOpen: boolean;
  onToggle: (category: string) => void;
}

const AccordionItem: FC<AccordionItemProps> = ({ category, products, isOpen, onToggle }) => (
  <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
    <button
      className={`products-category-title ${isOpen ? 'active' : ''}`}
      onClick={() => onToggle(category)}
      aria-expanded={isOpen}
      aria-controls={`category-panel-${category.replace(/\s+/g, '-')}`}
    >
      {category}
      <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div
        id={`category-panel-${category.replace(/\s+/g, '-')}`}
        className="products-grid accordion-panel"
      >
        {products.map((product, index) => (
          <ProductCard key={`${category}-${index}`} product={product} />
        ))}
      </div>
    )}
  </div>
);


export default AccordionItem; 
