import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rick-and-morty-wiki';

  constructor() {
    this.showCharters();
  }

  private rickAndMorty = inject(RickAndMortyService);

  showCharters() {
    this.rickAndMorty.getCharacters().subscribe((data) => {
      console.log(data);
    });
  }
}
