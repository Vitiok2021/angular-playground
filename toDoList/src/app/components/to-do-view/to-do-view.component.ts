import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { Task } from '../../interfaces/task';
import { ToDoService } from '../../services/to-do.service';
@Component({
  selector: 'app-to-do-view',
  imports: [FormsModule, ToDoItemComponent],
  templateUrl: './to-do-view.component.html',
  styleUrl: './to-do-view.component.css',
})
export class ToDoViewComponent implements OnInit {
  task!: string;

  get tasks(): Task[] {
    return this.toDoService.tasks;
  }

  private toDoService = inject(ToDoService);
  addTaskView(task: any) {
    this.toDoService.addTask(task);
    this.task = '';
  }
  delTaskView(id: number) {
    this.toDoService.delTask(id);
  }
  toggleIsDoneView(id: number) {
    this.toDoService.toggleIsDone(id);
  }
  ngOnInit(): void {}
}
