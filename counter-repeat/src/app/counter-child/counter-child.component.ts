import {
  Component,
  input,
  OnChanges,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-counter-child',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './counter-child.component.html',
  styleUrl: './counter-child.component.scss',
})
export class CounterChildComponent implements OnInit, OnChanges {
  fromInput = input<number>(0); // дані вниз
  counterId = input<number>(0); // дані вниз

  counterValue = signal(0); // локальний стан

  toOutput = output<{ id: number; value: number }>(); // подія наверх
  remId = output<number>(); // подія remove

  ngOnInit() {
    this.counterValue.set(this.fromInput());
  }
  ngOnChanges() {
    this.counterValue.set(this.fromInput());
  }
  plusOne() {
    this.counterValue.update((x) => x + 1);
    this.toOutput.emit({ id: this.counterId(), value: this.counterValue() });
  }
  minusOne() {
    this.counterValue.update((x) => x - 1);
    this.toOutput.emit({ id: this.counterId(), value: this.counterValue() });
  }
  resToStart() {
    this.counterValue.set(this.fromInput());
    this.toOutput.emit({ id: this.counterId(), value: this.counterValue() });
  }
  resToZero() {
    this.counterValue.set(0);
    this.toOutput.emit({ id: this.counterId(), value: this.counterValue() });
  }
  resToCust() {
    this.counterValue.set(50);
    this.toOutput.emit({ id: this.counterId(), value: this.counterValue() });
  }
  removeCounter() {
    this.remId.emit(this.counterId());
  }
}
