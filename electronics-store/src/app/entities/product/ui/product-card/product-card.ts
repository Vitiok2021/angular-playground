import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CartStore } from '../../../cart/model/cart.store';
import { ToastService } from '../../../../shared/ui/toast/toast.service';
import { RouterLink } from '@angular/router';
import { Favorite } from '../../../favorite/model/favorite.store';

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
  favoriteStore = inject(Favorite);

  isFavorite = computed(() => {
    return this.favoriteStore.favoriteIds().includes(this.product().id);
  });

  onAddToCart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.cartStore.addToCart(this.product());
    this.toastService.showMessage('Added to Cart!', 'success');
  }
  onAddToFav(event: Event, id: number) {
    event.stopPropagation();
    event.preventDefault();
    this.favoriteStore.toggleFavorite(id);
  }
}
