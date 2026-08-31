import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartStore } from '../../entities/cart/model/cart.store';
import { Favorite } from '../../entities/favorite/model/favorite.store';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cartStore = inject(CartStore);
  favoriteStore = inject(Favorite);
}
