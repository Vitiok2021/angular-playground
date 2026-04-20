import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCard } from '../interfaces/product-card';
import { platformBrowser } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favorites = new BehaviorSubject<any>([]);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedItems = localStorage.getItem('favorites');

      if (savedItems) {
        this.favorites.next(JSON.parse(savedItems));
      }
    }
  }

  toggle(product: ProductCard) {
    const currentFavorites = this.favorites.getValue();

    const searchingFavorite = currentFavorites.find(
      (item: ProductCard) => item.id === product.id,
    );

    if (searchingFavorite) {
      const updatedArray = currentFavorites.filter(
        (item: ProductCard) => item.id !== product.id,
      );
      this.favorites.next(updatedArray);
    } else {
      currentFavorites.push(product);
      this.favorites.next(currentFavorites);
    }
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(this.favorites.getValue()),
      );
    }
  }
}
