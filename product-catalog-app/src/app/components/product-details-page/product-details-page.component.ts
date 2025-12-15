import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductDetailService } from '../../services/product-detail.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-product-details-page',
  providers: [ProductDetailService],
  imports: [RouterLink, NgIf],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss',
})
export class ProductDetailsPageComponent {
  product;
  notFound;
  constructor(
    private cartService: CartService,
    private productDetailService: ProductDetailService
  ) {
    this.product = this.productDetailService.product;
    this.notFound = this.productDetailService.notFound;
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.add(product);
    }
  }
}
