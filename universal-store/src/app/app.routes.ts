import { Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { cartGuard } from './guards/cart.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './guards/admin.guard';
import { checkoutExitGuard } from './guards/checkout-exit.guard';
import { FavoriteComponent } from './pages/favorite/favorite.component';

export const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: AuthComponent },
  {
    path: 'dashBoard',
    component: AdminDashboardComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [cartGuard],
    canDeactivate: [checkoutExitGuard],
  },
  {
    path: 'favorites',
    component: FavoriteComponent,
  },
];
