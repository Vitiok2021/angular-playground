import { Component, inject, OnInit, Signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgFor } from '@angular/common';
import { CartItem } from '../../interfaces/cart-item';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgFor],
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
}
