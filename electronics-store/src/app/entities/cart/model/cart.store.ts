import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../product/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  private readonly cartItems = signal<Product[]>([]);
  readonly cartCount = computed(() => this.cartItems().length);
  addToCart(product: Product) {
    this.cartItems.update((items) => [...items, product]);
  }
}
