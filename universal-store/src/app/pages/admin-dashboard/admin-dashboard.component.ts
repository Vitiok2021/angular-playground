import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../../interfaces/product-details';

@Component({
  selector: 'app-admin-dashboard',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  productService = inject(ProductService);
  dashboardForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    imageUrl: new FormControl(''),
    isFavorite: new FormControl(false),
    images: new FormControl(''),
    details: new FormGroup({
      description: new FormControl(''),
      manufacturer: new FormControl(''),
      length: new FormControl(''),
      weight: new FormControl(''),
      color: new FormControl(''),
      packSize: new FormControl(''),
    }),
  });
  onAdd() {
    const rawData = this.dashboardForm.value;
    const imagesArray = rawData.images ? rawData.images.split(',') : [];
    const finalProduct = {
      ...rawData,
      images: imagesArray,
    } as unknown as Omit<ProductDetails, 'id'>;
    // console.log(finalProduct);
    this.productService.addProduct(finalProduct).subscribe({
      next: (response) => {
        console.log('Успіх! Сервер відповів:', response);
        this.dashboardForm.reset();
        alert('Товар додано');
      },
      error: (err) => {
        console.error('Помилка', err);
      },
    });
  }
}
