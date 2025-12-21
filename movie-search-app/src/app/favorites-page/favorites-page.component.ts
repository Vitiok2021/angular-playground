import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites-page',
  imports: [RouterLink],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPageComponent implements OnInit {
  movieList = inject(MoviesService);
  favoriteMovies: Movie[] = [];

  ngOnInit(): void {
    this.favoriteMovies = this.movieList.movies.filter(
      (movie) => movie.isFavorite
    );
  }
  removeFromFav(id: number) {
    this.movieList.toggleFavorite(id);
    this.favoriteMovies = this.favoriteMovies.filter(
      (movie) => movie.id !== id
    );
  }
}
