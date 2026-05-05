import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsExample } from './components/forms-example/forms-example';
import { FormsExampleReactive } from './components/forms-example-reactive/forms-example-reactive';

@Component({
  selector: 'app-root',
  imports: [FormsExample, FormsExampleReactive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-rs-practice');
}
