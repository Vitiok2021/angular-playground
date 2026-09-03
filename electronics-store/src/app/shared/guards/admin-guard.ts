import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAdmin = localStorage.getItem('isAdmin');

  if (isAdmin === 'true') {
    return true;
  }

  return router.createUrlTree(['/login']);
};
