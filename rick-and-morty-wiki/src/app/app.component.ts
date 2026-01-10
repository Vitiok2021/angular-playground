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
  constructor() {
    this.showCharters();
  }
  private rickAndMorty = inject(RickAndMortyService);
  characters: Character[] = [];
  showCharters() {
    this.rickAndMorty.getCharacters(this.currentPage).subscribe((data) => {
      this.characters = data.results;
      // console.log(data);
    });
  }
  currentPage: number = 1;
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.showCharters();
    }
  }
  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.showCharters();
  }
}
