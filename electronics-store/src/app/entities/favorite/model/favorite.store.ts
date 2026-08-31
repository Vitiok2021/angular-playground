import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Favorite {
  favoriteIds = signal<number[]>([]);

  favoritesCount = computed(() => this.favoriteIds().length);

  toggleFavorite(id: number) {
    this.favoriteIds.update((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds.filter((item) => item !== id);
      }
      return [...currentIds, id];
    });
  }
}
