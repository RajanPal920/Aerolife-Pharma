/**
 * Aerolife Pharma - Menu Products & Categories
 * Re-exports from centralized productsData.js for backwards compatibility
 */
import { CATEGORIES, ALL_PRODUCTS } from './productsData';

export const menuCategories = CATEGORIES.map(cat => ({
  id: cat.id,
  slug: cat.slug,
  name: cat.title,
  badge: `${cat.count} Products`,
  desc: cat.shortDesc,
  image: cat.flagshipImage,
  products: cat.products
}));

export const allProducts = ALL_PRODUCTS;
export default menuCategories;
