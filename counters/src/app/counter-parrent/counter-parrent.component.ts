import { Component } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parrent',
  imports: [CounterChildComponent],
  templateUrl: './counter-parrent.component.html',
  styleUrl: './counter-parrent.component.scss',
})
export class CounterParrentComponent {
  fromOutput: number = 0;

  //обробка значення з Child
  fromOutputMethod(val: { id: number; value: number }) {
    const item = this.counters.find((c) => c.id === val.id);
    if (item) item.value = val.value;
  }

  //масив лічильників
  counters = [
    { id: 1, value: 5 },
    { id: 2, value: 7 },
    { id: 3, value: 12 },
  ];

  //додавання нового лічильника
  addCounter() {
    const random = Math.floor(Math.random() * 10);
    const newId = this.counters.length + 1;
    this.counters.push({
      id: newId,
      value: random,
    });
  }

  //видалення елемента
  removeCounerPar(id: number) {
    this.counters = this.counters.filter((item) => item.id !== id);
  }
}
