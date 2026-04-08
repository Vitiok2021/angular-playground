import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  cartService = inject(CartService);
  notificationService = inject(NotificationService);
  router = inject(Router);

  checkoutForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[- +()0-9]{10,15}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    this.cartService.clearCart();
    this.checkoutForm.reset();
    this.notificationService.show('Готово! Товар замовлено!');
    this.router.navigate(['/']);
  }
}
