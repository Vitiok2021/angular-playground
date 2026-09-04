import { Product } from '../product/models/product.interface';

export interface OrderPayload {
  customer: {
    name: string | null;
    phone: string | null;
    address: string | null;
  };
  orderItems: Product[];
}

export interface OrderResponse {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}
