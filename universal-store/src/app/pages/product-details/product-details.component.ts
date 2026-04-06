import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../../interfaces/product-details';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  productService = inject(ProductService);
  notificationService = inject(NotificationService);
  cartService = inject(CartService);
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
  onAddToCart() {
    console.log('1. Кнопку натиснуто! Товар, який передаємо:', this.product);
    this.cartService.addToCart(this.product);
    this.notificationService.show('Товар додано!');
  }
}
