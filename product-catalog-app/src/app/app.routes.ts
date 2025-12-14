import { Routes } from '@angular/router';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/:id', component: ProductDetailsPageComponent },
  { path: 'cart', component: CartPageComponent },
];
