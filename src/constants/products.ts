import { ProductCategories } from "./product-categories.enum";

interface Product {
  name: string;
  description: string;
  price: string;
  category: string;
}

export const products: Product[] = [
  {
    name: 'Mini crunchy',
    description: 'Mix de masitas de todas nuestras cookies',
    price: '$2500',
    category: ProductCategories.COOKIES_STYLE_NEW_YORK,
  },
  {
    name: 'Classic',
    description: 'Chips chocolate blanco y chocolate con leche',
    price: '$2500',
    category: ProductCategories.COOKIES_STYLE_NEW_YORK,
  },
  {
    name: 'Chocotorta',
    description: 'Topping de chocolinas y relleno de mousse de dulce de leche',
    price: '$2500',
    category: ProductCategories.COOKIES_STYLE_NEW_YORK,
  },
  {
    name: 'Nutribanana',
    description: 'Topping de chips de chocolate con leche, Avena, banana y nuez',
    price: '$3000',
    category: ProductCategories.COOKIES_STYLE_NEW_YORK,
  },
  {
    name: 'Key lime pie',
    description: 'Topping de chips de chocolate blanco y relleno de crema de lima',
    price: '$3000',
    category: ProductCategories.COOKIES_STYLE_NEW_YORK,
  },
  {
    name: 'Cheesecake de frutos rojos',
    description:
      'Topping de chips de chocolate blanco y relleno de crema de cheesecake de frutos rojos',
    price: '$3000',
    category: ProductCategories.COOKIES_STYLE_NEW_YORK,
  },
  {
    name: 'Nutella',
    description: 'Topping de chips de chocolate oscuro y relleno de pasta de avellanas (nutella)',
    price: '$4000',
    category: ProductCategories.COOKIES_STYLE_NEW_YORK,
  },
  {
    name: 'Árabe con jamón cocido y queso',
    description: 'Todos incluyen tomate y mayonesa',
    price: '$4000',
    category: ProductCategories.PANCITOS_TYPE_ARABIC,
  },
  {
    name: 'Árabe con jamón crudo y queso',
    description: 'Todos incluyen tomate y mayonesa',
    price: '$5000',
    category: ProductCategories.PANCITOS_TYPE_ARABIC,
  },
  {
    name: 'Banana fit',
    description: 'Cookie con harina y avena sin tacc, banana y nuez, endulzada con stevia',
    price: '$3500',
    category: ProductCategories.COOKIES_HEALTHY,
  },
  {
    name: 'Berries fit',
    description: 'Cookie con harina y avena sin tacc, nuez y mermelada de frutos del bosque endulzada con stevia',
    price: '$3500',
    category: ProductCategories.COOKIES_HEALTHY,
  },
  {
    name: 'Gaseosa x 500 ml',
    description: '',
    price: '$2500',
    category: ProductCategories.BEVERAGES,
  },
  {
    name: 'Gatorade x 500 ml',
    description: '',
    price: '$2500',
    category: ProductCategories.BEVERAGES,
  },
  {
    name: 'Agua x 600 ml',
    description: '',
    price: '$2000',
    category: ProductCategories.BEVERAGES,
  },
  {
    name: 'Exprimido de naranja x 500 ml',
    description: '',
    price: '$3000',
    category: ProductCategories.BEVERAGES,
  },
];