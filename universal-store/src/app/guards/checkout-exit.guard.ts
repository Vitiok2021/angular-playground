import { CanDeactivateFn } from '@angular/router';
import { CheckoutComponent } from '../pages/checkout/checkout.component';

export const checkoutExitGuard: CanDeactivateFn<CheckoutComponent> = (
  component: CheckoutComponent,
  currentRoute,
  currentState,
  nextState,
) => {
  if (component.checkoutForm.dirty) {
    return confirm(
      'У вас є незбережені дані. Ви дійсно хочете покинути сторінку?',
    );
  } else {
    return true;
  }
};
