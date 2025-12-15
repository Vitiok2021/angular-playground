import { Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  product = signal<Product | null>(null);
  notFound = signal(false);
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      const product = this.productService.getProductById(id);

      if (product) {
        this.product.set(product ?? null);
        this.notFound.set(false);
      } else {
        this.product.set(null);
        this.notFound.set(true);
      }
    });
  }
}
