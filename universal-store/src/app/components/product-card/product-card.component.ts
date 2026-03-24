import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from '../../interfaces/product-card';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() prodCard!: ProductCard;
}
