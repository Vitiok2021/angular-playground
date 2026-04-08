import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

export const cartGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const router = inject(Router);
  const products = cartService.getCartItems();

  if (products.length > 0) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
