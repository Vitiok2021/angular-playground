import { Component, inject } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-favorite',
  imports: [AsyncPipe, ProductCardComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  favoriteService = inject(FavoriteService);

  favorites = this.favoriteService.favorites$;
}
