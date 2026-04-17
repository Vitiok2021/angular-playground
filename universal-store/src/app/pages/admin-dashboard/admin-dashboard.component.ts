import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductDetails } from '../../interfaces/product-details';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductCard } from '../../interfaces/product-card';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

function imagesUrlValidator(control: AbstractControl) {
  const controlVal = control.value;
  if (!controlVal) return null;

  let controlArr = controlVal.split(',');
  for (let link of controlArr) {
    let cleanLink = link.trim();
    if (!cleanLink.startsWith('http://') && !cleanLink.startsWith('https://')) {
      return { invalidLinks: true };
    }
  }
  return null;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [ReactiveFormsModule, ProductCardComponent, AsyncPipe],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  authService = inject(AuthService);
  productService = inject(ProductService);
  router = inject(Router);
  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  dashboardForm = new FormGroup({
    category: new FormControl('rods'),
    title: new FormControl('', Validators.required),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1),
    ]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(https?:\/\/|\/img\/).*/),
    ]),
    isFavorite: new FormControl(false),
    images: new FormControl('', [Validators.required, imagesUrlValidator]),
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

  onSubmit() {
    const rawData = this.dashboardForm.value;
    const imagesArray = rawData.images ? rawData.images.split(',') : [];
    const finalProduct = {
      ...rawData,
      images: imagesArray,
    } as unknown as Omit<ProductDetails, 'id'>;
    const { details, ...mainInfo } = finalProduct;

    if (this.currentProductId) {
      this.productService
        .updateProduct(this.currentProductId.toString(), finalProduct)
        .subscribe({
          next: (response) => {
            this.dashboardForm.reset();
            alert('Товар оновлено');
            this.isEditing = false;
            this.currentProductId = null;
          },
        });
    } else {
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

  getAllProducts = this.productService.getProducts();

  delProduct(id: string) {
    this.productService.delProduct(id).subscribe({
      next: () => (this.getAllProducts = this.productService.getProducts()),
      error: (err) => console.error('Помилка', err),
    });
  }

  isEditing: boolean = false;
  currentProductId: number | null = null;
  editProduct(product: ProductCard) {
    this.isEditing = true;
    this.currentProductId = product.id;
    this.productService.getProductFullInfo(product.id.toString()).subscribe({
      next: (fullProduct) => {
        const imagesString = fullProduct.images
          ? fullProduct.images.join(', ')
          : '';
        const { id, ...productData } = fullProduct;
        this.dashboardForm.patchValue({ ...productData, images: imagesString });
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // let imageString = product.images ? product.images.join(', ') : '';
    // this.dashboardForm.patchValue({ ...product, images: imageString });
  }
}
