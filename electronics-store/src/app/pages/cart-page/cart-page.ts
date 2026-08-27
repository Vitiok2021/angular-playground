import { Component, inject } from '@angular/core';
import { CartStore } from '../../entities/cart/model/cart.store';
import { CartItem } from '../../entities/cart/ui/cart-item/cart-item';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [CartItem, CurrencyPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})
export class CartPage {
  cartStore = inject(CartStore);
}
