import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-display',
  imports: [AsyncPipe],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  constructor(public counterService: CounterService) {}
}
