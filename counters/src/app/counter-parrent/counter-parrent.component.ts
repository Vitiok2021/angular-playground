import { Component } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parrent',
  imports: [CounterChildComponent],
  templateUrl: './counter-parrent.component.html',
  styleUrl: './counter-parrent.component.scss',
})
export class CounterParrentComponent {
  valueFromChild = 0;
  changeValFromChild(val: number) {
    this.valueFromChild = val;
  }
}
