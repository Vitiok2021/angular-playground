import { computed, Injectable, signal } from '@angular/core';
interface Counter {
  id: number;
  value: number;
  start: number;
}
@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private readonly _counters = signal<Counter[]>([
    { id: 1, value: 5, start: 5 },
    { id: 2, value: 7, start: 7 },
    { id: 3, value: 12, start: 12 },
  ]);
  counters = this._counters.asReadonly();

  private setState(reducer: (state: Counter[]) => Counter[]) {
    this._counters.update(reducer);
  }

  total = computed(() => this.counters().reduce((sum, c) => sum + c.value, 0));

  updateCounter(id: number, newValue: number) {
    this._counters.update((list) =>
      list.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  }

  addCounter() {
    const nextId = Math.max(...this.counters().map((c) => c.id)) + 1;
    const random = Math.floor(Math.random() * 20);
    this._counters.update((list) => [
      ...list,
      { id: nextId, value: random, start: random },
    ]);
  }

  removeCounter(id: number) {
    this._counters.update((list) => list.filter((c) => c.id !== id));
  }

  resetAllToZero() {
    this._counters.update((counters) =>
      counters.map((counter) => ({ ...counter, value: 0 }))
    );
  }
  resetAllToStart() {
    this._counters.update((counters) =>
      counters.map((counter) => ({ ...counter, value: counter.start }))
    );
  }
  resetAllToRandom() {
    this._counters.update((counters) =>
      counters.map((counter) => {
        let random = Math.floor(Math.random() * 20);
        return {
          ...counter,
          value: random,
          start: random,
        };
      })
    );
  }
}
