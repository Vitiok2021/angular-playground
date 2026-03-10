import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  http = inject(HttpClient);
  constructor() {}
  findParcel(trackingNumber: string) {
    console.log('Сервіс отримав номер: ', trackingNumber);
  }
}
