import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-page',
  imports: [NgFor, RouterLink],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss',
})
export class MoviesPageComponent implements OnInit {
  constructor(private movieService: MoviesService) {}
  movies: any | null = null;
  ngOnInit(): void {
    this.movies = this.movieService.movies;
  }
}
