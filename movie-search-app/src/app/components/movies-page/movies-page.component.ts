import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movies-page',
  imports: [NgFor, RouterLink, FormsModule],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss',
})
export class MoviesPageComponent implements OnInit {
  constructor(private movieService: MoviesService) {}
  movies: Movie[] = [];
  ngOnInit(): void {
    this.movies = this.movieService.movies;
  }

  searchTerm: string = '';
  get filteredMovies() {
    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
