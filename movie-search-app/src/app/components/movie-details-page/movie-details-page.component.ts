import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details-page',
  imports: [RouterModule],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
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
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.movie = this.movieService.getMovieById(Number(this.id));
  }
}
