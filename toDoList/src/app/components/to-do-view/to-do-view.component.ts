import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-view',
  imports: [FormsModule],
  templateUrl: './to-do-view.component.html',
  styleUrl: './to-do-view.component.css',
})
export class ToDoViewComponent {
  task!: string;
  tasks: Task[] = [];
  addTask() {
    const id = new Date().getMilliseconds();
    const isDone = false;

    if (this.task) {
      this.tasks.push({ id: id, name: this.task, isDone: isDone });
    }
  }
}
export interface Task {
  id: number;
  name: string;
  isDone: boolean;
}
