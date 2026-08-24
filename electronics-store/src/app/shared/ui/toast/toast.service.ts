import { Injectable, signal } from '@angular/core';
import { Toast } from './toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly toasts = signal<Toast[]>([]);

  readonly toastsCopy = this.toasts.asReadonly();
  showMessage(message: string, type: 'success' | 'error' | 'info') {
    const id = Date.now();
    this.toasts.update((currentToast) => [...currentToast, { id, message, type }]);
    setTimeout(() => {
      this.removeMessage(id);
    }, 3000);
  }

  removeMessage(id: number) {
    this.toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
  }
}
