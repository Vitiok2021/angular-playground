import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogined = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLogined.asObservable();

  login(user: string, password: any) {
    const currentUser = 'Viktor';
    const currentPassword = 123;

    if (user == currentUser && password == currentPassword) {
      this.isLogined.next(true);
      localStorage.setItem('isAdmin', JSON.stringify('true'));
      return true;
    } else {
      return false;
    }
  }
  logout() {
    this.isLogined.next(false);
    localStorage.removeItem('isAdmin');
  }
}
