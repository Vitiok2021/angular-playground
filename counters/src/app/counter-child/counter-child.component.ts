import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  imports: [],
  templateUrl: './counter-child.component.html',
  styleUrl: './counter-child.component.scss',
})
export class CounterChildComponent {
  counter: number = 0;
  increment() {
    this.counter = this.counter + 1;
  }
  decrement() {
    this.counter = this.counter - 1;
  }
}
