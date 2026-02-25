import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-to-do-item',
  imports: [],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css',
})
export class ToDoItemComponent {
  @Input() toDoItem!: Task;
  @Output() delBtn = new EventEmitter<number>();

  @Output() togChk = new EventEmitter<number>();

  delTask(id: number) {
    this.delBtn.emit(id);
  }
  toggleChk(id: number) {
    this.togChk.emit(id);
  }
}
