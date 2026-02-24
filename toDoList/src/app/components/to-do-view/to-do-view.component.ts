import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { Task } from '../../interfaces/task';
@Component({
  selector: 'app-to-do-view',
  imports: [FormsModule, ToDoItemComponent],
  templateUrl: './to-do-view.component.html',
  styleUrl: './to-do-view.component.css',
})
export class ToDoViewComponent {
  task!: string;

  tasks: Task[] = [];

  addTask() {
    const id = Date.now();
    const isDone = false;

    if (this.task) {
      this.tasks.push({ id: id, name: this.task, isDone: isDone });
      this.task = '';
    }
  }
  delTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  toggleIsDone(id: number) {
    const foundedTask = this.tasks.find((task) => task.id === id);
    if (foundedTask) foundedTask.isDone = !foundedTask.isDone;
  }
}
