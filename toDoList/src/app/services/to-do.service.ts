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
      this.tasks.push({ id: id, name: task, isDone: isDone, isEdit: false });
      this.saveToStorage();
    }
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

  currentFilter: 'all' | 'active' | 'completed' = 'all';
  get filteredTask() {
    let filteredTasks = this.tasks;
    // if (this.currentFilter === 'active') {
    //   return (filteredTasks = filteredTasks.filter((item) => !item.isDone));
    // }
    // if (this.currentFilter === 'completed') {
    //   return (filteredTasks = filteredTasks.filter((item) => item.isDone));
    // } else {
    // return filteredTasks
    // }
    switch (this.currentFilter) {
      case 'active':
        return filteredTasks.filter((item) => !item.isDone);
      case 'completed':
        return filteredTasks.filter((item) => item.isDone);
      default:
        return filteredTasks;
    }
  }
  get activeCount() {
    let filteredTasks = this.tasks;
    return filteredTasks.filter((item) => !item.isDone).length;
  }
  get allCount() {
    return this.tasks.length;
  }
  clearCompletedTasks() {
    this.tasks = this.tasks.filter((task) => !task.isDone);
    this.saveToStorage();
  }
  editedTask(name: string, id: number) {
    const findedTask = this.tasks.find((task) => task.id === id);
    if (findedTask) {
      findedTask.name = name;
      this.saveToStorage();
    }
  }
}
