import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movies-page',
  imports: [NgFor, RouterLink, FormsModule, NgIf],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss',
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.movies = this.movieService.movies;
  }

  searchTerm: string = '';
  get filteredMovies() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.movies;
    }

    return this.movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(term)
    );
  }
}
