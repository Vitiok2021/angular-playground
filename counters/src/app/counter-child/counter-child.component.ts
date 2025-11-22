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

  @Output() toOutput = new EventEmitter<{ id: number; value: number }>();

  ngOnInit(): void {
    this.counterValue = this.fromInput;
  }
  plusOne() {
    this.counterValue++;
    this.toOutput.emit({ id: this.counterId, value: this.counterValue });
  }
  minusOne() {
    this.counterValue--;
    this.toOutput.emit({ id: this.counterId, value: this.counterValue });
  }
  resToStart() {
    this.counterValue = this.fromInput;
    this.toOutput.emit({ id: this.counterId, value: this.counterValue });
  }
  resToZero() {
    this.counterValue = 0;
    this.toOutput.emit({ id: this.counterId, value: this.counterValue });
  }
  resToCust() {
    this.counterValue = 50;
    this.toOutput.emit({ id: this.counterId, value: this.counterValue });
  }

  @Output() remId = new EventEmitter<number>();

  removeCounter() {
    this.remId.emit(this.counterId);
  }
}
