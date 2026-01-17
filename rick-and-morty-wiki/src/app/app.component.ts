import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { Character, Episode } from './models/character';
import { CharacterCardComponent } from './cards/character-card/character-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Rick & Morty Wiki';
  private rickAndMorty = inject(RickAndMortyService);

  characters: Character[] = [];
  locations: any = [];
  episodes: Episode[] = [];

  totalPages: number = 0;

  currentPage: number = 1;

  currentCategory: string = 'character';

  constructor() {
    this.showCharters();
  }
  selectCategory(categoryName: string) {
    this.currentCategory = categoryName;
    this.currentPage = 1;
    this.showCharters();
  }
  showCharters() {
    if (this.currentCategory === 'character') {
      this.rickAndMorty.getCharacters(this.currentPage).subscribe((data) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
        console.log(data);
      });
    } else if (this.currentCategory === 'location') {
      this.rickAndMorty.getLocations(this.currentPage).subscribe((data) => {
        console.log('Locations:', data);
        this.locations = data.results;
        this.totalPages = data.info.pages;
      });
    } else {
      this.rickAndMorty.getEpisodes(this.currentPage).subscribe((data) => {
        this.episodes = data.results;
        this.totalPages = data.info.pages;
      });
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.showCharters();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.showCharters();
    }
  }
}
