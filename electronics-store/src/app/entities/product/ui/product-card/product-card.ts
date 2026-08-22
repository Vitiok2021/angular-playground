import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CartStore } from '../../../cart/model/cart.store';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();
  cartStore = inject(CartStore);

  onAddToCart() {
    this.cartStore.addToCart(this.product());
  }
}
