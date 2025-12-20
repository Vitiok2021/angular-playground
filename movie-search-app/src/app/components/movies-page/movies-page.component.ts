import { Component, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movies-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss',
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.movies = this.movieService.movies;
    this.filteredMovies = this.movieService.movies;
  }

  searchTerm: string = '';
  filterMovies() {
    console.log('Фільтрація запущена');
    const term = this.searchTerm.trim().toLowerCase();

    this.filteredMovies = this.movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(term)
    );
  }
}
