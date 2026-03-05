import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { ToDoService } from '../../services/to-do.service';

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

  @Output() saveEdit = new EventEmitter<{ value: string; id: number }>();

  saveEdited(value: string, id: number) {
    this.saveEdit.emit({ value, id });
  }

  delTask(id: number) {
    this.delBtn.emit(id);
  }
  toggleChk(id: number) {
    this.togChk.emit(id);
  }
  editTask() {
    this.toDoItem.isEdit = true;
  }

  cancelEdited() {
    this.toDoItem.isEdit = false;
  }
}
