import { Component, inject, OnInit } from '@angular/core';
import { CoinCardComponent } from '../coin-card/coin-card.component';
import { CryptoService } from '../../services/crypto.service';
import { Coin } from '../../models/coin';

@Component({
  selector: 'app-coins-list',
  imports: [CoinCardComponent],
  templateUrl: './coins-list.component.html',
  styleUrl: './coins-list.component.scss',
})
export class CoinsListComponent implements OnInit {
  private cryptoService = inject(CryptoService);
  coins: Coin[] = [];

  ngOnInit(): void {
    this.loadCoin();
  }

  loadCoin() {
    this.cryptoService.getCoins().subscribe((data) => {
      this.coins = data;
      console.log(data);
    });
  }
}
