import { ProductCard } from './product-card';

export interface ProductCharacteristics {
  description: string;
  manufacturer: string;
  length: string;
  weight: string;
  color: string;
  packSize: string;
}

export interface ProductDetails extends ProductCard {
  details: ProductCharacteristics;
}
