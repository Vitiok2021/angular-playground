import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notification$ = new Subject<string>();

  public message$ = this.notification$.asObservable();

  show(message: string) {
    this.notification$.next(message);
  }
}
