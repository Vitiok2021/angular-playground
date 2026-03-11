import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Parcel } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  http = inject(HttpClient);
  constructor() {}
  findParcel(trackingNumber: string) {
    console.log('Сервіс отримав номер: ', trackingNumber);

    return this.http.get<Parcel>(
      `https://jsonplaceholder.typicode.com/todos/${trackingNumber}`,
    );
  }
}
