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
    this.rickAndMorty.getCharacters().subscribe((data) => {
      this.characters = data.results;
      console.log(data);
    });
  }
}
