import { Component, inject, Input, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CoinDetail } from '../../models/coin';
import {
  CurrencyPipe,
  DecimalPipe,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coin-detail',
  imports: [DecimalPipe, NgIf, CurrencyPipe, UpperCasePipe, RouterLink],
  templateUrl: './coin-detail.component.html',
  styleUrl: './coin-detail.component.scss',
})
export class CoinDetailComponent implements OnInit {
  private cryptoService = inject(CryptoService);

  coin: CoinDetail | null = null;

  isLoading: boolean = true;

  @Input() id = '';
  ngOnInit(): void {
    console.log('Id монети з URL', this.id);
    this.cryptoService.getCoin(this.id).subscribe((data) => {
      this.coin = data;
      console.log('Повне досьє:', data);
      this.isLoading = false;
    });
  }
}
