import { ProductDetails } from './product-details';

export interface CartItem extends ProductDetails {
  quantity: number;
}
