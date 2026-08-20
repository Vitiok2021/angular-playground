import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../../shared/api/api.service';
import { Product } from './product.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  api = inject(ApiService);

  products = signal<Product[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);

  loadProducts() {
    this.isLoading.set(true);
    this.api.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.isLoading.set(false);
      },
    });
  }
}
