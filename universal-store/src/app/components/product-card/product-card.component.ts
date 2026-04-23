import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ProductCard } from '../../interfaces/product-card';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductDetails } from '../../interfaces/product-details';
import { FavoriteService } from '../../services/favorite.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink, AsyncPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  cartService = inject(CartService);
  favoriteService = inject(FavoriteService);

  @Input() prodCard!: ProductCard;
  @Input() isAdmin: boolean = false;

  isFavorites$!: Observable<boolean>;
  ngOnInit(): void {
    this.isFavorites$ = this.favoriteService.favorites$.pipe(
      map((favoritesArray) => {
        const searchedItem = favoritesArray.find(
          (item: ProductCard) => item.id === this.prodCard.id,
        );
        if (searchedItem) {
          return true;
        } else {
          return false;
        }
      }),
    );
  }

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
  addToFavorite(product: ProductCard) {
    this.favoriteService.toggle(product);
  }
}
