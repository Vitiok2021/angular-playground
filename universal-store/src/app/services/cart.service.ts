import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ProductDetails } from '../interfaces/product-details';
import { CartItem } from '../interfaces/cart-item';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.isCartOpenSubject.asObservable();

  toggleCart() {
    let currentVal = this.isCartOpenSubject.getValue();

    currentVal = !currentVal;

    this.isCartOpenSubject.next(currentVal);
  }

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  getCartItems() {
    return this.cartItemsSubject.getValue();
  }

  private platformId = inject(PLATFORM_ID);
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedCart = localStorage.getItem('fishing_cart');

      if (savedCart) {
        this.cartItemsSubject.next(JSON.parse(savedCart));
      }
    }
  }
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
  removeFromCart(id: number) {
    const currentItems = this.cartItemsSubject.getValue();

    const filteredItems = currentItems.filter((item) => item.id !== id);
    this.cartItemsSubject.next(filteredItems);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('fishing_cart', JSON.stringify(filteredItems));
    }
  }
  updateQuantity(id: number, delta: number) {
    const currentItems = this.cartItemsSubject.getValue();

    const item = currentItems.find((item) => item.id === id);
    if (item) {
      if (item.quantity == 1 && delta === -1) {
        this.removeFromCart(id);
        return;
      } else {
        item.quantity += delta;
      }
    }
    this.cartItemsSubject.next(currentItems);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('fishing_cart', JSON.stringify(currentItems));
    }
  }
  clearCart() {
    this.cartItemsSubject.next([]);
    localStorage.setItem('fishing_cart', JSON.stringify([]));
  }

  totalPrice$ = this.cartItems$.pipe(
    map((items) =>
      items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    ),
  );
  totalItems$ = this.cartItems$.pipe(
    map((items) => items.reduce((sum, item) => sum + item.quantity, 0)),
  );
}
