import { Component, inject, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { CryptoService } from '../../services/crypto.service';
import { Coin } from '../../models/coin';
import { CoinCardComponent } from '../coin-card/coin-card.component';

@Component({
  selector: 'app-favorites',
  imports: [CoinCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  private storageService = inject(StorageService);
  private cryptoService = inject(CryptoService);

  coins: Coin[] = [];

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    const ids = this.storageService.getFavorites();

    if (!ids.length) return;
    else {
      this.cryptoService.getFavoriteCoins(ids).subscribe((data) => {
        this.coins = data;
      });
    }
  }
}
