import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../entities/product/models/product.interface';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  getProducts() {
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
    return this.http.get<Product[]>(environment.apiUrl);
  }
}
