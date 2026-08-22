import { Component, inject } from '@angular/core';
import { CartStore } from '../../entities/cart/model/cart.store';
import { ProductCard } from '../../entities/product/ui/product-card/product-card';
import { CartItem } from '../../entities/cart/ui/cart-item/cart-item';

@Component({
  selector: 'app-cart-page',
  imports: [ProductCard, CartItem],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  cartStore = inject(CartStore);
}
