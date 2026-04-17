import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);

  userName = '';
  userPassword = '';

  ngOnInit(): void {
    if (this.authService.isLogined.value) {
      this.router.navigate(['dashBoard']);
      return;
    }
  }

  onSubmit() {
    const isSuccess = this.authService.login(this.userName, this.userPassword);
    if (isSuccess) {
      this.router.navigate(['dashBoard']);
    } else {
      alert('Логін не правильний');
      this.userName = '';
      this.userPassword = '';
    }
  }
}
