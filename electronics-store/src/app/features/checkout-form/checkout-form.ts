import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartStore } from '../../entities/cart/model/cart.store';
import { ApiService } from '../../shared/api/api.service';
import { OrderPayload } from '../../entities/order/order.model';

@Component({
  selector: 'app-checkout-form',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.scss',
})
export class CheckoutForm {
  readonly cartStore = inject(CartStore);
  readonly apiService = inject(ApiService);
  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.checkoutForm.invalid) return;
    const customerData = this.checkoutForm.getRawValue();

    const items = this.cartStore.readCartItems();

    const orderData: OrderPayload = {
      customer: customerData,
      orderItems: items,
    };
    this.apiService.createOrder(orderData).subscribe({
      next: (response) => {
        console.log('Відповідь сервера:', response);
        this.checkoutForm.reset();
        this.cartStore.clearCartItems();
      },
      error: (err) => {
        console.error('Помилка', err);
      },
    });

    console.log(orderData);
  }
}
