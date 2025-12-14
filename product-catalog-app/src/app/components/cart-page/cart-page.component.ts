import { Component, OnInit, Signal } from '@angular/core';
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
export class CartPageComponent implements OnInit {
  constructor(private cartService: CartService) {}
  items!: Signal<CartItem[]>;
  total!: Signal<number>;

  ngOnInit(): void {
    this.items = this.cartService.items$;
    this.total = this.cartService.total;
  }
}
