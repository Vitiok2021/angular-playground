import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoItemComponent } from '../to-do-item/to-do-item.component';
import { Task } from '../../interfaces/task';
import { ToDoService } from '../../services/to-do.service';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-to-do-view',
  imports: [FormsModule, ToDoItemComponent],
  templateUrl: './to-do-view.component.html',
  styleUrl: './to-do-view.component.css',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ToDoViewComponent {
  task!: string;

  get tasks(): Task[] {
    return this.toDoService.filteredTask;
  }

  toDoService = inject(ToDoService);
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
  changeFilter(filterType: any) {
    this.toDoService.currentFilter = filterType;
  }
}
