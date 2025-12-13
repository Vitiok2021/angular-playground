import { Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<CartItem[]>([]);

  add(product: Product) {}
  remove(id: number) {}
  clear() {}

  items$ = this.items.asReadonly();
}
