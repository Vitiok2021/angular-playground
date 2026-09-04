import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartStore } from '../../entities/cart/model/cart.store';
import { Favorite } from '../../entities/favorite/model/favorite.store';
import { AuthService } from '../../shared/api/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cartStore = inject(CartStore);
  favoriteStore = inject(Favorite);
  authService = inject(AuthService);
  router = inject(Router);

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
