import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Coin, CoinDetail } from '../models/coin';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private http = inject(HttpClient);
  private apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

  constructor() {}

  getCoins(currency: string, page: number = 1) {
    const url = `${this.apiUrl}?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`;
    return this.http.get<Coin[]>(url);
  }
  getCoin(coinId: string) {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    return this.http.get<CoinDetail>(url);
  }
}
