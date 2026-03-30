import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductCard } from '../../interfaces/product-card';
import { ProductService } from '../../services/product.service';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-catalog',
  imports: [ProductCardComponent, AsyncPipe, HeroComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  productService = inject(ProductService);
  fishingProducts: Observable<ProductCard[]> =
    this.productService.getProducts();
}
