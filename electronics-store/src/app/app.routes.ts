import { Routes } from '@angular/router';
import { adminGuard } from './shared/guards/admin-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/products-page/products-page').then((m) => m.ProductsPage),
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts').then((m) => m.Contacts),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart-page/cart-page').then((m) => m.CartPage),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product-detail-page/product-detail-page').then((m) => m.ProductDetailPage),
  },
  {
    path: 'favorite',
    loadComponent: () => import('./pages/favorite-page/favorite-page').then((m) => m.FavoritePage),
  },
  {
    path: 'thank-page',
    loadComponent: () => import('./pages/thank-you/thank-you').then((m) => m.ThankYou),
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin-page/admin-page').then((m) => m.AdminPage),
    canActivate: [adminGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page').then((m) => m.LoginPage),
  },
];
