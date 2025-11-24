import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counters = signal([
    { id: 1, value: 5 },
    { id: 2, value: 7 },
    { id: 3, value: 12 },
  ]);

  total = computed(() => this.counters().reduce((sum, c) => sum + c.value, 0));

  updateCounter(id: number, newValue: number) {
    this.counters.update((list) =>
      list.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  }

  addCounter() {
    const nextId = Math.max(...this.counters().map((c) => c.id)) + 1;
    const random = Math.floor(Math.random() * 20);
    this.counters.update((list) => [...list, { id: nextId, value: random }]);
  }

  removeCounter(id: number) {
    this.counters.update((list) => list.filter((c) => c.id !== id));
  }

  resetAllToZero() {
    this.counters.update((counters) =>
      counters.map((counter) => ({ ...counter, value: 0 }))
    );
  }
  resetAllToStart() {}
  resetAllToRandom() {}
}
