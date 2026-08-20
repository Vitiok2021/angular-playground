import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../entities/product/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
