import { Injectable, signal } from '@angular/core';
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
    },
    {
      id: 2,
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
      description: 'Lorem...',
      image: 'https://picsum.photos/200/300',
    },
  ];

  getMovieById(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }
}
