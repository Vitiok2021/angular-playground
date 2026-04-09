import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-sidebar',
  imports: [AsyncPipe],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.scss',
})
export class CartSidebarComponent implements OnInit {
  cartService = inject(CartService);
  isOpen = false;

  cartItems: CartItem[] = [];

  router = inject(Router);

  ngOnInit(): void {
    this.cartService.isCartOpen$.subscribe((status) => (this.isOpen = status));

    this.cartService.cartItems$.subscribe((data) => (this.cartItems = data));
  }

  closeCart() {
    this.cartService.toggleCart();
  }

  goToCheckout() {
    this.closeCart();
    this.router.navigate(['/checkout']);
  }
}
