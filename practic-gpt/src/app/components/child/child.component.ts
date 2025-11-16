import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Output() mesToPar = new EventEmitter();

  name: string = '';

  sendToParrent() {
    this.mesToPar.emit(this.name);
  }

  isVisible: boolean = true;
  todo!: string;

  displayList: any[] = [
    {
      title: 'Випити кави',
      checked: false,
    },
    {
      title: 'Випити чаю',
      checked: true,
    },
    {
      title: "З'їсти печиво",
      checked: false,
    },
  ];
  showed() {
    this.isVisible = !this.isVisible;
  }
  addItem() {
    if (!this.todo || this.todo.trim() === '') {
      return;
    }
    this.displayList.push({ title: this.todo, checked: false });
    this.todo = '';
    this.updateList();
  }
  toDoList: any[] = [...this.displayList];
  activeFilter: 'all' | 'checked' | 'new' = 'all';
  showAll() {
    this.activeFilter = 'all';
    this.updateList();
  }
  checkItem() {
    this.activeFilter = 'checked';
    this.updateList();
  }
  newed() {
    this.activeFilter = 'new';
    this.updateList();
  }

  searchTerm!: string;

  updateList() {
    let filtered = [...this.displayList];
    if (this.activeFilter === 'checked') {
      filtered = filtered.filter((item) => item.checked);
    }
    if (this.activeFilter === 'new') {
      filtered = filtered.filter((item) => !item.checked);
    }

    if (this.searchTerm && this.searchTerm.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.toDoList = filtered;
  }
}
