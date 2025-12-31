import { effect, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartItem } from '../interfaces/cart-item';
import { computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<CartItem[]>([]);
  items$ = this.items.asReadonly();

  constructor() {
    const isBrowser = typeof localStorage !== 'undefined';
    if (isBrowser) {
      const saveItems = localStorage.getItem('cartItems');
      if (saveItems) this.items.set(JSON.parse(saveItems));
      effect(() => {
        const items = this.items();
        console.log(this.items());
        localStorage.setItem('cartItems', JSON.stringify(items));
      });
    }
  }

  add(product: Product, count: number = 1) {
    this.items.update((currentItems) => {
      const existing = currentItems.find(
        (item) => item.product.id === product.id
      );

      if (existing) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + count }
            : item
        );
      }
      return [...currentItems, { product, quantity: count }];
    });
  }
  remove(id: number) {
    this.items.update((items) =>
      items.filter((item) => item.product.id !== id)
    );
  }

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
