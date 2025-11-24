import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ChildComponent } from '../../child/child.component';
@Component({
  selector: 'app-list',
  imports: [ChildComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  parrentMessage = 'Привіт з батька';
  msgToShow!: string;
  onNotify(msg: string) {
    this.msgToShow = msg;
  }
}
