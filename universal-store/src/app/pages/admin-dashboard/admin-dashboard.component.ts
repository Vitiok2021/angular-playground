import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../../interfaces/product-details';
import { ProductCard } from '../../interfaces/product-card';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-admin-dashboard',
  imports: [ReactiveFormsModule, ProductCardComponent, AsyncPipe],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  productService = inject(ProductService);
  dashboardForm = new FormGroup({
    category: new FormControl('rods'),
    title: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/.*/),
    ]),
    isFavorite: new FormControl(false),
    images: new FormControl('', Validators.required),
    details: new FormGroup({
      description: new FormControl('', Validators.minLength(20)),
      manufacturer: new FormControl('', Validators.required),
      length: new FormControl('', Validators.required),
      weight: new FormControl(''),
      color: new FormControl('', Validators.required),
      packSize: new FormControl('', Validators.required),
    }),
  });
  titleLength: number = 0;
  descrLength!: number;
  ngOnInit(): void {
    this.dashboardForm
      .get('title')
      ?.valueChanges.subscribe(
        (value) => (this.titleLength = value?.length || 0),
      );
    this.dashboardForm
      .get('category')
      ?.valueChanges.subscribe((selectedCategory) => {
        const weightCtrl = this.dashboardForm.get('details.weight');

        switch (selectedCategory) {
          case 'baits':
            weightCtrl?.setValidators([Validators.required]);
            break;
          case 'rods':
          case 'reels':
            weightCtrl?.clearValidators();
            break;
          default:
            weightCtrl?.clearValidators();
            break;
        }
        weightCtrl?.updateValueAndValidity();
      });
    this.dashboardForm
      .get('details.description')
      ?.valueChanges.subscribe(
        (value) => (this.descrLength = 20 - (value?.length || 0)),
      );
  }

  onAdd() {
    const rawData = this.dashboardForm.value;
    const imagesArray = rawData.images ? rawData.images.split(',') : [];
    const finalProduct = {
      ...rawData,
      images: imagesArray,
    } as unknown as Omit<ProductDetails, 'id'>;
    const { details, ...mainInfo } = finalProduct;
    // console.log('Основна інфа для першої бази:', mainInfo);
    // console.log('Деталі для другої бази:', details);
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

  // products: ProductCard[] = [];
  // getAllProducts() {
  //   this.productService
  //     .getProducts()
  //     .subscribe((data) => (this.products = data));
  // }
  getAllProducts = this.productService.getProducts();

  delProduct(id: string) {
    this.productService.delProduct(id).subscribe({
      next: () => (this.getAllProducts = this.productService.getProducts()),
      error: (err) => console.error('Помилка', err),
    });
  }
}
