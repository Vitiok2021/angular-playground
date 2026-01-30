import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../models/character';

@Component({
  selector: 'app-location-card',
  imports: [],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss',
})
export class LocationCardComponent implements OnInit {
  @Input() location!: Location;

  isFavorite: boolean = true;

  ngOnInit(): void {
    const favorites = this.getFavoritesFromStorage();
    this.isFavorite = favorites.includes(this.location.id);
  }
  toggleFavorite(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.isFavorite = !this.isFavorite;

    const favorites = this.getFavoritesFromStorage();

    if (this.isFavorite) {
      favorites.push(this.location.id);
    } else {
      const index = favorites.indexOf(this.location.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem('favoriteLocations', JSON.stringify(favorites));
  }
  getFavoritesFromStorage(): number[] {
    const data = localStorage.getItem('favoriteLocations');
    return data ? JSON.parse(data) : [];
  }
}
