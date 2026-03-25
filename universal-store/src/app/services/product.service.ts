import { inject, Injectable } from '@angular/core';
import { ProductCard } from '../interfaces/product-card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  getProducts() {
    return this.http.get<ProductCard[]>(
      'https://69c3b999b780a9ba03e7b907.mockapi.io/fishing-store/fishing-store',
    );
  }
}
