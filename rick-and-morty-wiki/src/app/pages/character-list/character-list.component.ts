import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterCardComponent } from '../../cards/character-card/character-card.component';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../../models/character';
import { PaginationComponent } from '../../components/pagination/pagination.component';
@Component({
  selector: 'app-character-list',
  imports: [RouterLink, CharacterCardComponent, PaginationComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
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
