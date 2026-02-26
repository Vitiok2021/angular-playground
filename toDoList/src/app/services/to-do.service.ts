import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  tasks: Task[] = [];

  constructor() {
    const savedData = localStorage.getItem('toDoStorage');
    if (savedData) {
      this.tasks = JSON.parse(savedData);
    }
  }
  addTask(task: string) {
    const id = Date.now();
    const isDone = false;

    if (task) {
      this.tasks.push({ id: id, name: task, isDone: isDone });
    }
    this.saveToStorage();
  }
  delTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveToStorage();
  }
  toggleIsDone(id: number) {
    const foundedTask = this.tasks.find((task) => task.id === id);
    if (foundedTask) foundedTask.isDone = !foundedTask.isDone;
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('toDoStorage', JSON.stringify(this.tasks));
  }
}
