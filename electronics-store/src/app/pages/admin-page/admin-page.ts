import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../../shared/api/api.service';
import { Product } from '../../entities/product/models/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  imports: [RouterLink],
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

  onDelete(id: number) {
    this.apiService.deleteProduct(id).subscribe({
      next: () => {
        this.products.update((currentProduct) =>
          currentProduct.filter((product) => product.id !== id),
        );
        // this.products.set(this.products().filter((product) => product.id !== id));
      },
    });
  }
}
