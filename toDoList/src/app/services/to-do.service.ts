import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  tasks: Task[] = [];
  constructor() {}
  addTask(task: string) {
    const id = Date.now();
    const isDone = false;

    if (task) {
      this.tasks.push({ id: id, name: task, isDone: isDone });
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
