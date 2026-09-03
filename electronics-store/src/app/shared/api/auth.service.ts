import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthPayload } from '../../entities/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(payload: AuthPayload) {
    return this.http.post('https://fakestoreapi.com/auth/login', payload);
  }
}
