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
  counterValue: number = 0;

  @Input() fromInput!: number;
  @Input() counterId!: number;
  @Output() toOutput = new EventEmitter<number>();

  ngOnInit(): void {
    this.counterValue = this.fromInput;
  }
  plusOne() {
    this.counterValue++;
    this.toOutput.emit(this.counterValue);
  }
  minusOne() {
    this.counterValue--;
    this.toOutput.emit(this.counterValue);
  }
  resToStart() {
    this.counterValue = this.fromInput;
    this.toOutput.emit(this.counterValue);
  }
  resToZero() {
    this.counterValue = 0;
    this.toOutput.emit(this.counterValue);
  }
  resToCust() {
    this.counterValue = 50;
    this.toOutput.emit(this.counterValue);
  }
}
