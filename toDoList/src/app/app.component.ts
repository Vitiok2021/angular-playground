import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoViewComponent } from './components/to-do-view/to-do-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'toDoList';
}
