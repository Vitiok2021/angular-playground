import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/products';
  constructor() {}

  products = [
    {
      id: 1,
      category: 'coffee',
      name: 'Lavaza',
      price: 205,
      image: 'https://picsum.photos/seed/coffee/200/200',
    },
    {
      id: 2,
      category: 'Tea',
      name: 'Azerchay',
      price: 95,
      image: 'https://picsum.photos/seed/tea/200/200',
    },
    {
      id: 3,
      category: 'Water',
      name: 'Coca Cola',
      price: 45,
      image: 'https://picsum.photos/seed/water/200/200',
    },
  ];
  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
