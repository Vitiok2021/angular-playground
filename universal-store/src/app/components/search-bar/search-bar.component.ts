import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit {
  productService = inject(ProductService);

  searchControl = new FormControl('');
  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((data) => {
      this.productService.search(data || '');
    });
  }
}
