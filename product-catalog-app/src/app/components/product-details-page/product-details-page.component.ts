import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { NgIf } from '@angular/common';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-details-page',
  providers: [],
  imports: [RouterLink, NgIf],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.scss',
})
export class ProductDetailsPageComponent implements OnInit {
  product = signal<Product | null>(null);
  notFound = signal(false);
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');
      const id = Number(idString);

      const foundProduct = this.productService.getProductById(id);

      if (foundProduct) {
        this.product.set(foundProduct);
        this.notFound.set(false);
      } else {
        this.product.set(null);
        this.notFound.set(true);
      }
    });
  }
  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.add(product);
    }
  }
}
