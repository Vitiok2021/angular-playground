import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDetails } from '../interfaces/product-details';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
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
  }
}
