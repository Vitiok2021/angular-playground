import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'movie-search-app';
}
