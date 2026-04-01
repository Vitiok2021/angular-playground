import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDetails } from '../interfaces/product-details';
import { CartItem } from '../interfaces/cart-item';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private platformId = inject(PLATFORM_ID);
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedCart = localStorage.getItem('fishing_cart');

      if (savedCart) {
        this.cartItemsSubject.next(JSON.parse(savedCart));
      }
    }
  }
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: ProductDetails) {
    // console.log('2. Сервіс отримав команду! ID товару:', item?.id);
    const currentItems = this.cartItemsSubject.getValue();

    const existingItem = currentItems.find(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }
    this.cartItemsSubject.next(currentItems);
    // console.log('Кошик зараз:', currentItems);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('fishing_cart', JSON.stringify(currentItems));
    }
  }
}
