import { Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { cartGuard } from './guards/cart.guard';

export const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [cartGuard] },
];
