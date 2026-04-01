import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-sidebar',
  imports: [],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.scss',
})
export class CartSidebarComponent implements OnInit {
  cartService = inject(CartService);
  isOpen = false;

  ngOnInit(): void {
    this.cartService.isCartOpen$.subscribe((status) => (this.isOpen = status));
  }

  closeCart() {
    this.cartService.toggleCart();
  }
}
