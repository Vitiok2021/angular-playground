import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsExample } from './components/forms-example/forms-example';

@Component({
  selector: 'app-root',
  imports: [FormsExample],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-rs-practice');
}
