import { Product } from '../product/models/product.interface';

export interface OrderPayload {
  customer: {
    name: string | null;
    phone: string | null;
    address: string | null;
  };
  orderItems: Product[];
}
