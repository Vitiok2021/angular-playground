import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CoinsListComponent } from './components/coins-list/coins-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CoinsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crypto-tracker';
}
