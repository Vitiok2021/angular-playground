import { Component, inject, OnInit } from '@angular/core';
import { CoinCardComponent } from '../coin-card/coin-card.component';
import { CryptoService } from '../../services/crypto.service';
import { Coin } from '../../models/coin';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coins-list',
  imports: [CoinCardComponent, FormsModule],
  templateUrl: './coins-list.component.html',
  styleUrl: './coins-list.component.scss',
})
export class CoinsListComponent implements OnInit {
  private cryptoService = inject(CryptoService);
  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  searchText = '';

  ngOnInit(): void {
    this.loadCoin();
  }

  loadCoin() {
    this.cryptoService.getCoins().subscribe((data) => {
      this.coins = data;
      this.filteredCoins = data;
      console.log(data);
    });
  }

  handleSearch() {
    this.filteredCoins = this.coins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }
}
