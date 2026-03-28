import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  productService = inject(ProductService);

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')!;
    console.log(productId);
    this.productService
      .getProduct(productId)
      .subscribe((data) => console.log(data));
  }
}
