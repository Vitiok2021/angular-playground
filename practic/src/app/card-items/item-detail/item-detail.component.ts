import { Component, signal } from '@angular/core';
import { PriceDisplayComponent } from '../price-display/price-display.component';

@Component({
  selector: 'app-item-detail',
  imports: [PriceDisplayComponent],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss',
})
export class ItemDetailComponent {
  items: any[] = [
    {
      name: 'Item 1',
      price: 255,
      weight: 2,
    },
    {
      name: 'Item 2',
      price: 582,
      weight: 8,
    },
  ];
  selectedCurrency = signal<string>('USD');

  changeFromChild(mes: any) {
    console.log('Подія від дитини отримана');
    this.selectedCurrency.set(mes);
  }
}
