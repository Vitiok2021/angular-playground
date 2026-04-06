import { Component, inject } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  notificationService = inject(NotificationService);

  currentMessage: string = '';

  constructor() {
    this.notificationService.message$.subscribe((data) => {
      this.currentMessage = data;
      setTimeout(() => {
        this.currentMessage = '';
      }, 3000);
    });
  }
}
