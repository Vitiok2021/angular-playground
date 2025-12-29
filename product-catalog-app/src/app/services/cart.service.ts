import { Injectable, Signal, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartItem } from '../interfaces/cart-item';
import { computed } from '@angular/core';

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
  remove(id: number) {
    this.items.update((items) =>
      items.filter((item) => item.product.id !== id)
    );
  }
  items$ = this.items.asReadonly();

  total: Signal<number> = computed(() => {
    return this.items().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  });

  updateQuantity(id: number, newQuantity: number) {
    this.items.update((items) =>
      items.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  }
}
