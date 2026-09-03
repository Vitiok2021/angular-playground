import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../shared/api/api.service';
import { Product } from '../../entities/product/models/product.interface';

@Component({
  selector: 'app-admin-page',
  imports: [],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage implements OnInit {
  private apiService = inject(ApiService);
  readonly products = signal<Product[]>([]);

  ngOnInit(): void {
    this.apiService.getProducts(20).subscribe({
      next: (response) => {
        this.products.set(response);
      },
    });
  }
}
