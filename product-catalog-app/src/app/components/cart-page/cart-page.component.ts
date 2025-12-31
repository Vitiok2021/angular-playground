import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgFor } from '@angular/common';
import { CartItem } from '../../interfaces/cart-item';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    NgFor,
    ProductCardComponent,
    RouterLink,
    MatButtonModule,
    MatCardModule,
  ],
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
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.product.id, item.quantity - 1);
    } else {
      this.cartService.remove(item.product.id);
    }
  }
  increment(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
  }
}
