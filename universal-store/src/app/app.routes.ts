import { Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];
