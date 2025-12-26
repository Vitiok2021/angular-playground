import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-movie-details-page',
  imports: [
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
  standalone: true,
})
export class MovieDetailsPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  id: string | null = null;
  movie: any | null = null;
  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');

    if (idFromRoute) {
      const id = +idFromRoute;
      this.movieService.getMovieByIdFromApi(id).subscribe((data) => {
        this.movie = data;
      });
    }
  }
  toggleFav(id: number) {
    this.movieService.toggleFavorite(id);
    if (this.movie) {
      this.movie.isFavorite = !this.movie.isFavorite;
    }
  }
}
