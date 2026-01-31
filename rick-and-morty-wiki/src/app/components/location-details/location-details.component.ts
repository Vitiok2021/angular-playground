import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Location } from '../../models/character';

@Component({
  selector: 'app-location-details',
  imports: [RouterLink],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.scss',
})
export class LocationDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private rickAndMorty = inject(RickAndMortyService);

  location: Location | null = null;

  isFavorite: boolean = false;
  currentId: number = 0;

  ngOnInit(): void {
    this.currentId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.currentId) {
      const favorites = this.getFavorites();
      this.isFavorite = favorites.includes(this.currentId);
      this.rickAndMorty
        .getLocation(Number(this.currentId))
        .subscribe((data) => {
          this.location = data;
          console.log(data);
        });
    }
  }

  getFavorites() {
    const data = localStorage.getItem('favoriteLocations');
    return data ? JSON.parse(data) : [];
  }

  toggleFavorite(event: Event) {
    this.isFavorite = !this.isFavorite;
    const favorites = this.getFavorites();
    if (this.isFavorite) {
      favorites.push(this.currentId);
    } else {
      const index = favorites.indexOf(this.currentId);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem('favoriteLocations', JSON.stringify(favorites));
  }
}
