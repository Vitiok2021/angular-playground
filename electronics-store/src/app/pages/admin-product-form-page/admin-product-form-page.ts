import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api/api.service';

@Component({
  selector: 'app-admin-product-form-page',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './admin-product-form-page.html',
  styleUrl: './admin-product-form-page.scss',
})
export class AdminProductFormPage implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);

  fb = inject(FormBuilder);

  productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getProduct(Number(id)).subscribe({
        next: (response) => {
          const { title, price, category, description, image } = response;
          this.productForm.patchValue({ title, price, category, description, image });
        },
      });
    } else {
    }
  }
  onSubmit() {
    console.log(this.productForm.value);
  }
}
