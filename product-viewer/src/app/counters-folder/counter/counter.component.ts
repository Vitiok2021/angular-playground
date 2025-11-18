import {
  Component,
  effect,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  start = input<number>(0);

  count = signal(0);

  valueChanged = output<number>();

  constructor() {
    effect(() => {
      const startValue = this.start();
      this.count.set(startValue);
      this.valueChanged.emit(startValue);
    });
  }

  increment() {
    this.count.update((current) => current + 1);
    this.valueChanged.emit(this.count());
  }
  decrement() {
    this.count.update((current) => current - 1);
    this.valueChanged.emit(this.count());
  }
}
