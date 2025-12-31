import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatCardImage } from '@angular/material/card';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, MatButtonModule, MatButton, MatCardImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
}
