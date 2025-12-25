import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';

import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-movies-page',
  imports: [
    RouterLink,
    FormsModule,
    MatButton,
    MatButtonModule,
    MatInputModule, 
    MatFormFieldModule,
  ],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss',
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.movieService.getMovieFromApi().subscribe((data: Movie[]) => {
      this.movies = data;
      this.filteredMovies = data;
    });
  }

  searchTerm: string = '';
  filterMovies() {
    console.log('Фільтрація запущена');
    const term = this.searchTerm.trim().toLowerCase();

    this.filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(term)
    );
  }
  toggleFavorite(id: number) {
    this.movieService.toggleFavorite(id);
  }
}
