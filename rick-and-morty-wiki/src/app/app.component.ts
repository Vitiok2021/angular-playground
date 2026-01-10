import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { Character } from './models/character';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Rick & Morty Wiki';
  private rickAndMorty = inject(RickAndMortyService);

  characters: Character[] = [];

  totalPages: number = 0;

  currentPage: number = 1;

  constructor() {
    this.showCharters();
  }
  showCharters() {
    this.rickAndMorty.getCharacters(this.currentPage).subscribe((data) => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
      console.log(data);
    });
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
