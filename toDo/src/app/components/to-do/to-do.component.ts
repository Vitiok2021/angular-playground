import { Component, inject } from '@angular/core';
import { ToDosService } from '../../services/to-dos.service';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent {
  constructor() {}
  private toDoService = inject(ToDosService);
  state = this.toDoService.state;
  completedCount = this.toDoService.completedCount;
  notCompletedCount = this.toDoService.notCompletedCount;
}
