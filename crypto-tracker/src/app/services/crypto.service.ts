import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Coin, CoinDetail } from '../models/coin';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.coingecko.com/api/v3/coins/markets';
  constructor() {}

  getCoins(currency: string, page: number = 1) {
    const url = `${this.baseUrl}?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`;
    return this.http.get<Coin[]>(url);
  }
  getFavoriteCoins(ids: string[]) {
    const idsString = ids.join(',');
    const url = `${this.baseUrl}?vs_currency=usd&ids=${idsString}&order=market_cap_desc&sparkline=false`;
    return this.http.get<Coin[]>(url);
  }
  getCoin(coinId: string) {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    return this.http.get<CoinDetail>(url);
  }
  getMarketHistory(coinId: string, days: number = 1) {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
    return this.http.get<any>(url);
  }
}
