import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from '../../interfaces/product-card';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductDetails } from '../../interfaces/product-details';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  cartService = inject(CartService);

  @Input() prodCard!: ProductCard;
  @Input() isAdmin: boolean = false;

  @Output() onDelete = new EventEmitter();
  onDeleteProduct() {
    this.onDelete.emit(this.prodCard.id);
  }

  @Output() onEdited = new EventEmitter();
  onEditProduct() {
    this.onEdited.emit(this.prodCard);
  }
  addCart(product: ProductCard) {
    this.cartService.addToCart(product);
  }
}
