import { Component, inject, signal } from '@angular/core';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialogClose } from '@angular/material/dialog';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatFormField, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-sign-up-dialog',
  imports: [
    MatIcon,
    MatIconButton,
    MatDialogClose,
    MatFormField,
    MatInput,
    MatPrefix,
    MatSuffix,
    MatAnchor,
  ],
  template: `
    <div class="p-8 max-w-[400px] flex flex-col">
      <div class="flex justify-between">
        <div>
          <h2 class="text-xl font-medium mb-1">Sign In</h2>
          <p class="text-sm text-gray-500">Sign in to your account to continue shopping</p>
        </div>
        <button tabindex="-1" class="-mt-2 -mr-2" matIconButton mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <form>
        <mat-form-field class="w-full mb-4">
          <input type="email" matInput formControlName="email" placeholder="Enter your email" />
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>
        <mat-form-field class="w-full mb-6">
          <input
            matInput
            formControlName="password"
            [type]="passwordVisible() ? 'text' : 'password'"
            placeholder="Enter your password"
          />
          <mat-icon matPrefix>lock</mat-icon>
          <button
            class="mr-2"
            matSuffix
            matIconButton
            type="button"
            (click)="passwordVisible.set(!passwordVisible())"
          >
            <mat-icon [fontIcon]="passwordVisible() ? 'visability_off' : 'visability'"></mat-icon>
          </button>
        </mat-form-field>
        <button class="w-full" type="submit" matButton="filled">Sign In</button>
      </form>
    </div>
  `,
  styles: ``,
})
export class SignUpDialog {
  fb = inject(NonNullableFormBuilder);
  passwordVisible = signal(false);

  signInForm = this.fb.group({
    email: ['johnd@test.com', Validators.required],
    password: ['test123', Validators.required],
  });
}
