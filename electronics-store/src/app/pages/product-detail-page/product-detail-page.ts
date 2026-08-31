import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { ApiService } from '../../shared/api/api.service';
import { Product } from '../../entities/product/models/product.interface';
import { CartStore } from '../../entities/cart/model/cart.store';
import { ToastService } from '../../shared/ui/toast/toast.service';
import { Favorite } from '../../entities/favorite/model/favorite.store';

@Component({
  selector: 'app-product-detail-page',
  imports: [],
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.scss',
})
export class ProductDetailPage {
  readonly id = input();

  readonly product = signal<Product | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  apiService = inject(ApiService);
  cartStore = inject(CartStore);
  toastService = inject(ToastService);
  favoriteStore = inject(Favorite);

  isFavorite = computed(() => {
    const currentProduct = this.product();
    if (currentProduct) {
      return this.favoriteStore.favoriteIds().includes(currentProduct.id);
    }
    return false;
  });

  constructor() {
    effect(() => {
      this.isLoading.set(true);
      this.apiService.getProduct(Number(this.id())).subscribe({
        next: (data) => {
          this.product.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set(`Error: ${err.message}`);
          this.isLoading.set(false);
        },
      });
    });
  }
  onAddToCart() {
    const currentProduct = this.product();
    if (currentProduct) {
      this.cartStore.addToCart(currentProduct);
      this.toastService.showMessage('Added to Cart!', 'success');
    }
  }
  onAddToFav(event: Event, id: number) {
    event.stopPropagation();
    event.preventDefault();
    this.favoriteStore.toggleFavorite(id);
  }
}
