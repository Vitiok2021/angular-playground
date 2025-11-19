import { Component, effect, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  imports: [],
  templateUrl: './counter-child.component.html',
  styleUrl: './counter-child.component.scss',
})
export class CounterChildComponent implements OnInit {
  counter: number = 0;

  @Input() initial: number = 0;
  ngOnInit() {
    this.counter = this.initial;
  }

  increment() {
    this.counter = this.counter + 1;
  }
  decrement() {
    this.counter = this.counter - 1;
  }
}
