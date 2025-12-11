import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-cart-page',
  imports: [RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  id: string | null = null;
  product: any | null = null;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.product = this.productService.getProductById(Number(this.id));
    });
  }
}
