import { Component } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parrent',
  imports: [CounterChildComponent],
  templateUrl: './counter-parrent.component.html',
  styleUrl: './counter-parrent.component.scss',
})
export class CounterParrentComponent {
  fromOutput: number = 0;
  fromOutputMethod(val: number) {
    this.fromOutput = val;
  }
  counters: number[] = [5, 7, 12];
}
