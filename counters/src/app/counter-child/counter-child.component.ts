import {
  Component,
  effect,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-counter-child',
  imports: [],
  templateUrl: './counter-child.component.html',
  styleUrl: './counter-child.component.scss',
})
export class CounterChildComponent implements OnInit {
  counter: number = 0;
  @Output() giveCount = new EventEmitter<number>();

  @Input() initial!: number;

  ngOnInit() {
    this.counter = this.initial;
    this.giveCount.emit(this.counter);
  }

  increment() {
    this.counter = this.counter + 1;
    this.giveCount.emit(this.counter);
  }
  decrement() {
    this.counter = this.counter - 1;
    this.giveCount.emit(this.counter);
  }
  resetToStart() {
    this.counter = this.initial;
    this.giveCount.emit(this.counter);
  }
  resetToZero() {
    this.counter = 0;
    this.giveCount.emit(this.counter);
  }
  resetToCustom() {
    this.counter = 50;
    this.giveCount.emit(this.counter);
  }
}
