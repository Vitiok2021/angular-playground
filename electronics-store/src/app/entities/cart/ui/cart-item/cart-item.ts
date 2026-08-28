import { Component, inject, input } from '@angular/core';
import { CartStore } from '../../model/cart.store';
import { CartQuantity } from '../../model/cart.interface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  cartStore = inject(CartStore);
  product = input.required<CartQuantity>();

  onDelete(id: number) {
    this.cartStore.deleteFromCart(id);
  }
  onDecrement(id: number) {
    this.cartStore.decrementQuantity(id);
  }
  onIncrement() {
    this.cartStore.addToCart(this.product() as any);
  }
}
