import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  start = input<number>(0);

  count = signal(this.start());
  valueChanged = output<number>();

  increment() {
    this.count.update((current) => current + 1);
    this.valueChanged.emit(this.count());
  }
  decrement() {
    this.count.update((current) => current - 1);
    this.valueChanged.emit(this.count());
  }
}
