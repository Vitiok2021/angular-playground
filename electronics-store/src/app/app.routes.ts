import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/products-page/products-page').then((m) => m.ProductsPage),
    pathMatch: 'full',
  },
];
