import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AuthPayload } from '../../entities/auth/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  router = inject(Router);

  readonly isAuth = signal<boolean>(!!localStorage.getItem('token'));

  login(payload: AuthPayload) {
    return this.http.post('https://fakestoreapi.com/auth/login', payload);
  }
  logout() {
    localStorage.removeItem('token');
    this.isAuth.set(false);
  }
}
