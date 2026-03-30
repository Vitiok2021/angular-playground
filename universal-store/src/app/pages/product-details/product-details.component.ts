import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../../interfaces/product-details';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  productService = inject(ProductService);
  product!: ProductDetails;
  currentMainImgUrl?: string;
  galleryImages: string[] = [];

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')!;
    console.log(productId);
    this.productService.getProductFullInfo(productId).subscribe((data) => {
      console.log(data);
      this.product = data;
      this.currentMainImgUrl = data.imageUrl;
      if (data.images) {
        this.galleryImages = [data.imageUrl, ...data.images];
      }
    });
  }
  setMainImage(url: string) {
    this.currentMainImgUrl = url;
  }
}
