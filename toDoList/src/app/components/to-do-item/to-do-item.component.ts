import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-to-do-item',
  imports: [],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css',
})
export class ToDoItemComponent {
  @Input() toDoItem!: Task;
}
