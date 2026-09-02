import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../../shared/api/api.service';
import { Product } from './product.interface';
// import { delay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  api = inject(ApiService);

  products = signal<Product[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);
  limit = signal(6);

  loadProducts() {
    this.isLoading.set(true);
    this.api
      .getProducts(this.limit())
      // .pipe(delay(500))
      .subscribe({
        next: (data) => {
          this.products.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.log(err);
          this.error.set(`Error: ${err.message}`);
          this.isLoading.set(false);
        },
      });
  }
  loadMore() {
    this.limit.update((current) => current + 6);
    this.loadProducts();
  }
}
