import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies-page',
  imports: [NgFor, RouterLink],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss',
})
export class MoviesPageComponent {
  movies = [
    { id: 1, title: 'The matrix' },
    { id: 2, title: 'Inception' },
  ];
}
