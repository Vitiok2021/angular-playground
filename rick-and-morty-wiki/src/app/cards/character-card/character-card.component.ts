import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: Character;

  isFavorite: boolean = false;

  ngOnInit(): void {
    const favorites = this.getFavoritesFromStorage();
    this.isFavorite = favorites.includes(this.character.id);
  }
  toggleFavorite(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.isFavorite = !this.isFavorite;

    const favorites = this.getFavoritesFromStorage();

    if (this.isFavorite) {
      favorites.push(this.character.id);
    } else {
      const index = favorites.indexOf(this.character.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
  }
  private getFavoritesFromStorage(): number[] {
    const data = localStorage.getItem('favoriteCharacters');
    return data ? JSON.parse(data) : [];
  }
}
