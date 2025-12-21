import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  movies = [
    {
      id: 1,
      title: 'The Matrix',
      year: 1999,
      genre: 'Sci-Fi',
      description: 'Lorem...',
      image: 'https://picsum.photos/200/300',
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
      description: 'Lorem...',
      image: 'https://picsum.photos/200/300',
      isFavorite: false,
    },
  ];

  getMovieById(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }

  toggleFavorite(id: number) {
    const findMovie = this.movies.find((movie) => movie.id === id);
    if (findMovie) findMovie.isFavorite = !findMovie.isFavorite;
    // console.log(findMovie?.isFavorite);
  }
}
