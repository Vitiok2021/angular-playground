import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './widgets/header/header';
import { Toast } from './shared/ui/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Toast],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('electronics-store');
}
