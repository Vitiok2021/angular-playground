import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/api/auth.service';
import { AuthPayload } from '../../entities/auth/auth.model';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  authService = inject(AuthService);

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as AuthPayload).subscribe({
        next: (response) => {
          console.log('Успіх!', response);
          localStorage.setItem('token', (response as any).token);
          this.router.navigate(['/admin']);
        },
        error: (err) => {
          console.error('Error', err);
        },
      });
    }
  }
}
