import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EpisodeCardComponent } from '../../cards/episode-card/episode-card.component';
import { Episode } from '../../models/character';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-episode-list',
  imports: [RouterLink, EpisodeCardComponent],
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss',
})
export class EpisodeListComponent {
  constructor() {
    this.loadEpisode();
  }
  private rickAndMorty = inject(RickAndMortyService);
  episodes: Episode[] = [];
  totalPages: number = 0;

  currentPage: number = 1;

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.loadEpisode();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.loadEpisode();
    }
  }
  loadEpisode() {
    this.rickAndMorty.getEpisodes(this.currentPage).subscribe((data) => {
      this.episodes = data.results;
      this.totalPages = data.info.pages;
      console.log(data);
    });
  }
}
