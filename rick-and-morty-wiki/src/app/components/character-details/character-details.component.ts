import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-details',
  imports: [RouterLink],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
})
export class CharacterDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private rickAndMorty = inject(RickAndMortyService);

  isFavorite: boolean = false;
  currentId: number = 0;

  character: Character | null = null;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.currentId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.currentId) {
      const favorites = this.getFavorites();
      this.isFavorite = favorites.includes(this.currentId);
      this.rickAndMorty.getCharacter(Number(id)).subscribe((data) => {
        this.character = data;
        console.log(this.character);
      });
    }
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

    localStorage.setItem('favoriteCharacters', JSON.stringify(favorites));
  }
  getFavorites() {
    const data = localStorage.getItem('favoriteCharacters');
    return data ? JSON.parse(data) : [];
  }
}
