import { Product } from '../../product/models/product.interface';

export interface CartQuantity extends Product {
  quantity: number;
}
