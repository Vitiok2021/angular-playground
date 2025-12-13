import { Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<CartItem[]>([]);

  add(product: Product) {
    this.items.update((currentItems) => {
      const existing = currentItems.find(
        (item) => item.product.id === product.id
      );

      if (existing) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { product, quantity: 1 }];
    });
  }
  remove(id: number) {}
  clear() {}

  items$ = this.items.asReadonly();
}
