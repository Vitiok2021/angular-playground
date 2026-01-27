import { Component, inject, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../../models/character';
import { RouterLink } from '@angular/router';
import { CharacterCardComponent } from '../../cards/character-card/character-card.component';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, CharacterCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  private rickAndMorty = inject(RickAndMortyService);

  characters: Character[] = [];

  ngOnInit(): void {
    this.loadFavorites();
  }
  loadFavorites() {
    const favoritesData = localStorage.getItem('favoriteCharacters');
    if (favoritesData) {
      const ids: number[] = JSON.parse(favoritesData);
      if (ids.length > 0) {
        this.rickAndMorty.getMultipleCharacters(ids).subscribe((data) => {
          this.characters = Array.isArray(data) ? data : [data];
        });
      }
    }
  }
}
