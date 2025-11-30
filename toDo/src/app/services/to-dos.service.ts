import { computed, Injectable, signal } from '@angular/core';
import { ToDo } from '../interfaces/to-do';

@Injectable({
  providedIn: 'root',
})
export class ToDosService {
  constructor() {}

  private readonly _state = signal<ToDo[]>([]);
  state = this._state.asReadonly();

  private setState(reducer: (state: ToDo[]) => ToDo[]) {
    this._state.update(reducer);
  }

  // to-Do: filters will be added tomorrow
  private readonly _filter = signal<'all' | 'active' | 'completed'>('all');
  filter = this._filter.asReadonly();

  setFilter(filter: 'all' | 'active' | 'completed') {
    this._filter.set(filter);
  }

  filterToDos = computed(() => {
    const filter = this._filter();
    const todos = this._state();

    if (filter === 'completed') {
      return todos.filter((item) => item.completed);
    }

    if (filter === 'active') {
      return todos.filter((item) => !item.completed);
    }

    return todos;
  });

  addTodo(title: string) {
    const autoincrId =
      this._state().length === 0
        ? 1
        : Math.max(...this._state().map((item) => item.id)) + 1;
    this.setState((list) => [
      ...list,
      { id: autoincrId, title: title, completed: false },
    ]);
  }
  toggleCompleted(id: number) {
    this.setState((list) => {
      return list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
  }
  removeTodo(id: number) {
    this.setState((list) => {
      return list.filter((item) => item.id !== id);
    });
  }

  completedCount = computed(
    () => this._state().filter((counter) => counter.completed).length
  );
  notCompletedCount = computed(
    () => this._state().filter((counter) => !counter.completed).length
  );
}
