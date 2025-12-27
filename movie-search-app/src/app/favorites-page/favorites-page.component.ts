import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movie';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-favorites-page',
  imports: [
    RouterLink,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIcon,
  ],
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
