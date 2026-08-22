import { Component, input } from '@angular/core';
import { Product } from '../../../product/models/product.interface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem {
  product = input.required<Product>();

  onDelete() {}
}
