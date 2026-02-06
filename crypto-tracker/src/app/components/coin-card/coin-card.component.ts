import { Component, Input } from '@angular/core';
import { Coin } from '../../models/coin';
import { CurrencyPipe, UpperCasePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coin-card',
  imports: [UpperCasePipe, CurrencyPipe, DecimalPipe, RouterLink],
  templateUrl: './coin-card.component.html',
  styleUrl: './coin-card.component.scss',
})
export class CoinCardComponent {
  @Input() coin!: Coin;
}
