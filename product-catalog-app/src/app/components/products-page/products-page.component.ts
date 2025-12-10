import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [NgFor, RouterLink],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.products = this.productService.products;
  }
}
