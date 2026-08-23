import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../product/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  readonly #cartItems = signal<Product[]>([]);
  readCartItems = this.#cartItems.asReadonly();
  readonly cartCount = computed(() => this.#cartItems().length);
  addToCart(product: Product) {
    this.#cartItems.update((items) => [...items, product]);
  }
  deleteFromCart(id: number) {
    this.#cartItems.update((items) => items.filter((item) => item.id !== id));
  }
}
