import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CartStore } from '../../../cart/model/cart.store';
import { ToastService } from '../../../../shared/ui/toast/toast.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();
  cartStore = inject(CartStore);
  toastService = inject(ToastService);

  onAddToCart() {
    this.cartStore.addToCart(this.product());
    this.toastService.showMessage('Added to Cart!', 'success');
  }
}
