import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterParrentComponent } from './counter-parrent/counter-parrent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterParrentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'counters';
}
