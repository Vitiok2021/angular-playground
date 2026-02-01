import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Episode } from '../../models/character';

@Component({
  selector: 'app-episode-details',
  imports: [RouterLink],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.scss',
})
export class EpisodeDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private rickAndMorty = inject(RickAndMortyService);

  episode: Episode | null = null;

  isFavorite: boolean = false;
  currentId: number = 0;

  ngOnInit(): void {
    this.currentId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.currentId) {
      const favorites = this.getFavoritesFromLocalStorage();
      this.isFavorite = favorites.includes(this.currentId);
      this.rickAndMorty.getEpisode(Number(this.currentId)).subscribe((data) => {
        this.episode = data;
      });
    }
  }
  toggleFavorite(event: Event) {
    this.isFavorite = !this.isFavorite;
    const favorites = this.getFavoritesFromLocalStorage();

    if (this.isFavorite) {
      favorites.push(this.currentId);
    } else {
      const index = favorites.indexOf(this.currentId);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem('favoriteEpisodes', JSON.stringify(favorites));
  }
  getFavoritesFromLocalStorage() {
    const data = localStorage.getItem('favoriteEpisodes');
    return data ? JSON.parse(data) : [];
  }
}
