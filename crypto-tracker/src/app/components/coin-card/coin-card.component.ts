import { Component, inject, Input, OnInit } from '@angular/core';
import { Coin } from '../../models/coin';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-coin-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './coin-card.component.html',
  styleUrl: './coin-card.component.scss',
  standalone: true,
})
export class CoinCardComponent implements OnInit {
  @Input() coin!: Coin;

  public cryptoService = inject(CryptoService);
  storage = inject(StorageService);
  isFavorite: boolean = false;

  ngOnInit(): void {
    this.isFavorite = this.storage.isCoinFavorite(this.coin.id);
  }
  toggleLike(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.storage.toggleFavorite(this.coin.id);

    this.isFavorite = !this.isFavorite;
  }
}
