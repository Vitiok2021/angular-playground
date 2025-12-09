import { Routes } from '@angular/router';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

export const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'cart', component: CartPageComponent },
];
