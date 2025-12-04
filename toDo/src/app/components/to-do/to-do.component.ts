import { Component, inject } from '@angular/core';
import { ToDosService } from '../../services/to-dos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../../edit-dialog/edit-dialog.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss',
})
export class ToDoComponent {
  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}
  openEditDialog(item: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { ...item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.toDoService.updateTodo(result.id, result.title);
      }
    });
  }
  private toDoService = inject(ToDosService);
  state = this.toDoService.state;
  completedCount = this.toDoService.completedCount;
  notCompletedCount = this.toDoService.notCompletedCount;
  newTitle = '';

  selectedFilter: 'all' | 'active' | 'completed' = 'all';

  filteredTodos2 = this.toDoService.filteredTodos;

  addToDo(title: string) {
    this.snackBar.open('Task added!', 'Close', {
      duration: 2000,
    });
    const trimmed = title.trim();
    if (!trimmed) {
      return;
    }

    this.toDoService.addTodo(title);
    this.newTitle = '';
  }
  toggle(id: number) {
    this.toDoService.toggleCompleted(id);
  }
  remove(id: number) {
    this.toDoService.removeTodo(id);
  }
  applyFilter(filter: 'all' | 'active' | 'completed') {
    this.selectedFilter = filter;
    this.toDoService.setFilter(filter);
  }

  clearCompl() {
    this.toDoService.clearCompleted();
  }
}
