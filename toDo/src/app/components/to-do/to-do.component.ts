import { Component, inject } from '@angular/core';
import { ToDosService } from '../../services/to-dos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent {
  constructor() {}
  private toDoService = inject(ToDosService);
  state = this.toDoService.state;
  completedCount = this.toDoService.completedCount;
  notCompletedCount = this.toDoService.notCompletedCount;
  newTitle = '';

  selectedFilter: 'all' | 'active' | 'completed' = 'all';

  filteredTodos2 = this.toDoService.filteredTodos;

  addToDo(title: string) {
    this.toDoService.addTodo(title);
    this.newTitle = '';
  }
  toggle(id: number) {
    this.toDoService.toggleCompleted(id);
  }
  remove(id: number) {
    this.toDoService.removeTodo(id);
  }
  applyFilter(filter: 'all' | 'active' | 'completed') {
    this.selectedFilter = filter;
    this.toDoService.setFilter(filter);
  }
}
