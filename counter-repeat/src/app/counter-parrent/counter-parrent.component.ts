import { Component, computed, OnInit, signal } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';
import { CounterService } from '../counters/counter.service';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-counter-parrent',
  imports: [
    CounterChildComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './counter-parrent.component.html',
  styleUrl: './counter-parrent.component.scss',
})
export class CounterParrentComponent {
  constructor(public counterService: CounterService) {}

  fromOutputMethod(val: { id: number; value: number }) {
    this.counterService.updateCounter(val.id, val.value);
  }
  addCounter() {
    this.counterService.addCounter();
  }

  removeCounerPar(id: number) {
    this.counterService.removeCounter(id);
  }
  editValue(event: any, id: number) {
    const newVal = Number(event.target.value);
    this.counterService.updateCounter(id, newVal);
  }
}
