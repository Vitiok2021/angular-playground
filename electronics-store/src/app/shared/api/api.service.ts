import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../entities/product/models/product.interface';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { OrderPayload, OrderResponse } from '../../entities/order/order.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  getProducts(limit: number) {
    if (environment.useMockData) {
      return of<Product[]>([
        {
          id: 1,
          title: 'Mock Title',
          price: 1,
          description: 'mock description',
          category: 'mock category',
          image: 'mock image',
        },
      ]);
    }
    return this.http.get<Product[]>(`${environment.apiUrl}?limit=${limit}`);
  }
  getProduct(id: number) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
  createOrder(payload: OrderPayload) {
    return this.http.post('https://fakestoreapi.com/carts', payload);
  }
  deleteProduct(id: number) {
    return this.http.delete(`https://fakestoreapi.com/products/${id}`);
  }
  getOrders() {
    return this.http.get<OrderResponse[]>('https://fakestoreapi.com/carts');
  }
}
