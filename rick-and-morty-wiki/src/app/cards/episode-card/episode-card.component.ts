import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode-card',
  imports: [],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss',
})
export class EpisodeCardComponent implements OnInit {
  @Input() episode: any;
  isFavorite: boolean = false;
  ngOnInit(): void {
    const favorites = this.getEpisodesFromStorage();
    this.isFavorite = favorites.includes(this.episode.id);
  }
  toggleFavorite(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.isFavorite = !this.isFavorite;

    const favorites = this.getEpisodesFromStorage();

    if (this.isFavorite) {
      favorites.push(this.episode.id);
    } else {
      const index = favorites.indexOf(this.episode.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem('favoriteEpisode', JSON.stringify(favorites));
  }
  getEpisodesFromStorage(): number[] {
    const data = localStorage.getItem('favoriteEpisode');
    return data ? JSON.parse(data) : [];
  }
}
