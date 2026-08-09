import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-success',
  imports: [MatButton, MatIcon, RouterLink],
  template: `
    <div class="flex justify-center items-center py-6 h-[calc(100vh-64px)]">
      <div
        class="flex flex-col items-center justify-center text-center bg-white rounded-xl shadow p-8 gap-6"
      >
        <mat-icon class="!text-green-500 !h-[56px] !w-[56px] !text-[56px]">check_circle</mat-icon>
        <h2 class="font-semibold text-green-600 text-2xl">Order Succesfull!</h2>
        <p class="text-base">
          Thank you for your purchase! Your order has been confirmed and will be shipped soon.
        </p>
        <p class="text-gray-600">
          You will receive an email confirmation shortly with your order details and tracking
          information.
        </p>
        <button matButton="filled" color="primary" routerLink="/" class="w-full max-w-s mt-2">
          Continue shopping
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export default class OrderSuccess {}
