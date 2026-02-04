import { Component } from '@angular/core';
import { CoinCardComponent } from '../coin-card/coin-card.component';

@Component({
  selector: 'app-coins-list',
  imports: [CoinCardComponent],
  templateUrl: './coins-list.component.html',
  styleUrl: './coins-list.component.scss',
})
export class CoinsListComponent {}
