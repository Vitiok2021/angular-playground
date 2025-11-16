import { Component, Input, signal, output, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-price-display',
  imports: [DecimalPipe],
  templateUrl: './price-display.component.html',
  styleUrl: './price-display.component.scss',
})
export class PriceDisplayComponent {
  currentPrice = input<number>();

  currentCurrency = input<string>();

  changeVal = output<string>();

  changeCurVal() {
    const newCur = this.currentCurrency() === 'USD' ? 'EUR' : 'USD';
    this.changeVal.emit(newCur);
  }
}
