import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  constructor(public counterService: CounterService) {}

  onIncr() {
    this.counterService.increment();
  }
  onDecr() {
    this.counterService.decrement();
  }
}
