import { Component, inject, OnInit, Signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgFor } from '@angular/common';
import { CartItem } from '../../interfaces/cart-item';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgFor, ProductCardComponent, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  private cartService = inject(CartService);
  items = this.cartService.items$;
  total = this.cartService.total;

  deleteProduct(id: number) {
    this.cartService.remove(id);
  }
  decrement(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity - 1);
  }
  increment(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
  }
}
