import { Component, computed, signal } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products = signal([
    {
      id: 1,
      name: 'Tea',
      description: 'Black tea',
      price: 99,
    },
    {
      id: 2,
      name: 'Coffee',
      description: 'Brasilian coffee',
      price: 125,
    },
    {
      id: 3,
      name: 'Water',
      description: 'Sparkle water',
      price: 40,
    },
  ]);

  totalPrice = computed(() =>
    this.products().reduce((sum, item) => sum + item.price, 0)
  );
}
