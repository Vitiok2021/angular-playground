import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartStore } from '../../entities/cart/model/cart.store';

@Component({
  selector: 'app-checkout-form',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-form.scss',
})
export class CheckoutForm {
  cartStore = inject(CartStore);
  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.checkoutForm.invalid) return;
    const customerData = this.checkoutForm.getRawValue();

    const items = this.cartStore.readCartItems();

    const orderData = {
      customer: customerData,
      orderItems: items,
    };
    console.log(orderData);
    this.checkoutForm.reset();
    this.cartStore.clearCartItems();
  }
}
