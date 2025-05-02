import { products } from '@constants/products';

const productsByCategory: { [key: string]: typeof products } = products.reduce(
  (acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  },
  {} as { [key: string]: typeof products },
);

export const productUtils = {
  productsByCategory
}