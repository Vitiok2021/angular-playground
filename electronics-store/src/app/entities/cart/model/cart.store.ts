import { computed, effect, Injectable, signal } from '@angular/core';
import { Product } from '../../product/models/product.interface';
import { CartQuantity } from './cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  readonly #cartItems = signal<CartQuantity[]>([]);

  readCartItems = this.#cartItems.asReadonly();
  readonly cartCount = computed(() => this.#cartItems().length);

  constructor() {
    const savedProducts = localStorage.getItem('products_localStorage');
    if (savedProducts) this.#cartItems.set(JSON.parse(savedProducts));
    effect(() => {
      localStorage.setItem('products_localStorage', JSON.stringify(this.#cartItems()));
    });
  }

  totalPrice = computed(() =>
    this.#cartItems().reduce((acc, item) => acc + item.price * item.quantity, 0),
  );

  addToCart(product: Product) {
    this.#cartItems.update((items) => {
      const itemInCart = items.find((item) => item.id === product.id);
      if (itemInCart) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        return [...items, { ...product, quantity: 1 }];
      }
    });
  }
  decrementQuantity(id: number) {
    this.#cartItems.update((items) => {
      const findedItem = items.find((item) => item.id === id);
      if (findedItem && findedItem.quantity > 1) {
        return items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        );
      }
      return items.filter((item) => item.id !== id);
    });
  }
  deleteFromCart(id: number) {
    this.#cartItems.update((items) => items.filter((item) => item.id !== id));
  }
  clearCartItems() {
    this.#cartItems.set([]);
  }
}
