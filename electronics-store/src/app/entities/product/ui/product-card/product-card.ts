import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CartStore } from '../../../cart/model/cart.store';
import { ToastService } from '../../../../shared/ui/toast/toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();
  cartStore = inject(CartStore);
  toastService = inject(ToastService);

  onAddToCart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cartStore.addToCart(this.product());
    this.toastService.showMessage('Added to Cart!', 'success');
  }
}
