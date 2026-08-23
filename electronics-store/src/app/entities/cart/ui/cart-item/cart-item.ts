import { Component, inject, input } from '@angular/core';
import { Product } from '../../../product/models/product.interface';
import { CartStore } from '../../model/cart.store';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  cartStore = inject(CartStore);
  product = input.required<Product>();

  onDelete(id: number) {
    this.cartStore.deleteFromCart(id);
  }
}
