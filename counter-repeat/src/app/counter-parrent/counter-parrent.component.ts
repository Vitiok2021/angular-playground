import { Component, signal } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parrent',
  imports: [CounterChildComponent],
  templateUrl: './counter-parrent.component.html',
  styleUrl: './counter-parrent.component.scss',
})
export class CounterParrentComponent {
  total = 0;

  counters = signal([
    { id: 1, value: 5 },
    { id: 2, value: 7 },
    { id: 3, value: 12 },
  ]);

  fromOutputMethod(val: { id: number; value: number }) {
    this.counters.update((list) =>
      list.map((item) =>
        item.id === val.id ? { ...item, value: val.value } : item
      )
    );
    this.total = this.counters().reduce((sum, item) => sum + item.value, 0);
  }
  //2 спосіб оновити масив
  // fromOutputMethod(val: { id: number; value: number }) {
  //   const item = this.counters().find((c) => c.id === val.id);
  //   if (item) {
  //     item.value = val.value;
  //     this.counters.update((arr) => [...arr]); // оновити сигнал
  //   }
  // }
  addCounter() {
    const nextId = Math.max(...this.counters().map((c) => c.id)) + 1;
    const random = Math.floor(Math.random() * 20);

    this.counters.update((list) => [...list, { id: nextId, value: random }]);
  }

  removeCounerPar(id: number) {
    this.counters.update((list) => list.filter((item) => item.id !== id));
  }
}
