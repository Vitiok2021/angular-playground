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
export class CounterChildComponent {
  counterValue: number = 0;

  plusOne() {
    this.counterValue++;
  }
  minusOne() {
    this.counterValue--;
  }
}
