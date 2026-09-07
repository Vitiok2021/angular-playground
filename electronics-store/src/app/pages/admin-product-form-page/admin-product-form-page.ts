import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/api/api.service';
import { Product } from '../../entities/product/models/product.interface';

@Component({
  selector: 'app-admin-product-form-page',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './admin-product-form-page.html',
  styleUrl: './admin-product-form-page.scss',
})
export class AdminProductFormPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private apiService = inject(ApiService);
  productId: string | null = null;

  fb = inject(FormBuilder);

  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
  });

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.apiService.getProduct(Number(this.productId)).subscribe({
        next: (response) => {
          const { title, price, category, description, image } = response;
          this.productForm.patchValue({ title, price, category, description, image });
        },
      });
    }
  }
  onSubmit() {
    console.log(this.productForm.value);
    if (this.productId) {
      this.apiService
        .updateProduct(Number(this.productId), this.productForm.value as Product)
        .subscribe({
          next: () => {
            this.router.navigate(['/admin']);
          },
        });
    } else {
      this.apiService.createProduct(this.productForm.value as Product).subscribe({
        next: () => {
          this.router.navigate(['/admin']);
        },
      });
    }
  }
}
