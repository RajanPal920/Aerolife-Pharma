/**
 * Aerolife Pharma - Menu Products & Categories
 * Re-exports from centralized productsData.js for backwards compatibility
 */
import { CATEGORIES, ALL_PRODUCTS } from './productsData';

const CATEGORY_NAMES = {
  tablets: 'Tablets',
  capsules: 'Capsules',
  syrups: 'Oral Liquids & Syrups',
  'dry-syrups': 'Pediatric Products',
  creams: 'Creams, Gels & Ointments',
  powders: 'Nutraceutical Products',
  drops: 'Eye & Ear Drops'
};

export const menuCategories = CATEGORIES.map(cat => ({
  id: cat.id,
  slug: cat.slug,
  name: CATEGORY_NAMES[cat.id] || cat.title,
  badge: `${cat.products.length} Products`,
  desc: cat.shortDesc,
  image: cat.flagshipImage,
  products: cat.products
}));

export const allProducts = ALL_PRODUCTS;
export default menuCategories;
