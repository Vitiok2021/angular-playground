import { Component, computed, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../../ecommerce.store';
import { Product } from '../../../models/product';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIconButton, MatIcon],
  template: `
    <button
      class=" !bg-white shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg"
      [class]="isInWishList() ? '!text-red-500' : '!text-gray-400'"
      matIconButton
      (click)="toggleWishList(product())"
    >
      <mat-icon>{{ isInWishList() ? 'favorite' : 'favorite_border' }}</mat-icon>
    </button>
  `,
  styles: ``,
})
export class ToggleWishlistButton {
  product = input.required<Product>();
  store = inject(EcommerceStore);
  isInWishList = computed(() => this.store.wishlistItems().find((p) => p.id === this.product().id));
  toggleWishList(product: Product) {
    if (this.isInWishList()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  }
}
