import { Component, inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products-page',
  imports: [NgFor, RouterLink, ProductCardComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  constructor() {}

  private productServiceFromJson = inject(ProductService);
  productsFromJson = toSignal(this.productServiceFromJson.getProducts(), {
    initialValue: [],
  });
}
