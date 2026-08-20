import { Component, inject, OnInit } from '@angular/core';
import { ProductCard } from '../../entities/product/ui/product-card/product-card';
import { ProductStore } from '../../entities/product/models/product.store';

@Component({
  selector: 'app-products-page',
  imports: [ProductCard],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage implements OnInit {
  store = inject(ProductStore);
  ngOnInit(): void {
    this.store.loadProducts();
  }
}
