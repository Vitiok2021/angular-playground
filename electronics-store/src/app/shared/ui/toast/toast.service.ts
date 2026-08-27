import { Injectable, signal } from '@angular/core';
import { Toast } from './toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly toasts = signal<Toast[]>([]);

  readonly toastsCopy = this.toasts.asReadonly();

  showMessage(message: string, type: 'success' | 'error' | 'info') {
    const currentToast = this.toasts();
    if (currentToast.some((toast) => toast.message === message)) {
      return;
    }
    const id = Date.now();
    this.toasts.update((currentToast) => [...currentToast, { id, message, type }]);
    setTimeout(() => {
      this.removeMessage(id);
    }, 2000);
  }

  removeMessage(id: number) {
    this.toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
  }
}
