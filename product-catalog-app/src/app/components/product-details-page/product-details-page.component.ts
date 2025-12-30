import { Component, inject, OnInit, signal } from '@angular/core';
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
  constructor() {}
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  notFound = signal(false);

  isLoading = signal(true);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.isLoading.set(true);

      if (id) {
        this.productService.getProductById(id).subscribe({
          next: (serverProduct) => {
            this.product.set(serverProduct);
            this.notFound.set(false);
            this.isLoading.set(false);
          },
          error: (err) => {
            this.notFound.set(true);
            console.log(err);
            this.isLoading.set(false);
          },
        });
      } else {
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
