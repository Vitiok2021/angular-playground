import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Coin } from '../models/coin';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private http = inject(HttpClient);
  private apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

  constructor() {}

  getCoins() {
    return this.http.get<Coin[]>(this.apiUrl);
  }
}
