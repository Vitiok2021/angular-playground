import { Component, input, signal } from '@angular/core';
import { Product } from '../../../models/product';
import { TitleCasePipe } from '@angular/common';
import { StockStatus } from '../stock-status/stock-status';
import { QtySelector } from '../../../components/qty-selector/qty-selector';

@Component({
  selector: 'app-product-info',
  imports: [TitleCasePipe, StockStatus, QtySelector],
  template: `
    <div class="text-xs rounded-xl bg-gray-100 px-2 py-1 w-fit mb-2">
      {{ product().category | titlecase }}
    </div>
    <h1 class="text-2xl font-extrabold mb-3">{{ product().name }}</h1>
    <p class="text-3xl font-extrabold mb-4">{{ product().price }}</p>
    <app-stock-status [inStock]="product().inStock"></app-stock-status>
    <p class="font-semibold mb-2">Description</p>
    <div class="text-gray-600 border-b border-gray-200 pb-4">{{ product().description }}</div>
    <div class="flex items-center gap-2 mb-3 pt-4">
      <span class="font-semibold">Quantity</span>
      <app-qty-selector
        [quantity]="quantity()"
        (qtyUpdated)="quantity.set($event)"
      ></app-qty-selector>
    </div>
  `,
  styles: ``,
})
export class ProductInfo {
  product = input.required<Product>();
  quantity = signal(1);
}
