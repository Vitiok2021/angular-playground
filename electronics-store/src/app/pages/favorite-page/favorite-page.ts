import { Component, computed, inject, signal } from '@angular/core';
import { Favorite } from '../../entities/favorite/model/favorite.store';
import { ApiService } from '../../shared/api/api.service';
import { ProductCard } from '../../entities/product/ui/product-card/product-card';
import { Product } from '../../entities/product/models/product.interface';

@Component({
  selector: 'app-favorite-page',
  imports: [ProductCard],
  templateUrl: './favorite-page.html',
  styleUrl: './favorite-page.scss',
})
export class FavoritePage {
  readonly favoriteStore = inject(Favorite);
  readonly apiService = inject(ApiService);

  allProducts = signal<Product[]>([]);
  favoriteProducts = computed(() => {
    const allProducts = this.allProducts();
    const allIds = this.favoriteStore.favoriteIds();
    return allProducts.filter((item) => allIds.includes(item.id));
  });

  constructor() {
    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.allProducts.set(data);
      },
    });
  }
}
