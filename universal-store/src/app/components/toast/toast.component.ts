import { Component, inject } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  notificationService = inject(NotificationService);

  isHiding: boolean = false;
  currentMessage: string = '';

  constructor() {
    this.notificationService.message$
      .pipe(tap((data) => console.log('Шпигун tap зловив повідомлення:', data)))
      .subscribe((data) => {
        this.currentMessage = data;
        this.isHiding = false;
        setTimeout(() => {
          this.isHiding = true;

          setTimeout(() => {
            this.currentMessage = '';
          }, 300);
        }, 3000);
      });
  }
}
