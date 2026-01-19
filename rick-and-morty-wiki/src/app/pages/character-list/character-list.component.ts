import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterCardComponent } from '../../cards/character-card/character-card.component';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../../models/character';
@Component({
  selector: 'app-character-list',
  imports: [RouterLink, CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
  private rickAndMorty = inject(RickAndMortyService);

  characters: Character[] = [];
  // locations: any = [];
  // episodes: Episode[] = [];

  totalPages: number = 0;

  currentPage: number = 1;
  // currentCategory: string = 'character';

  constructor() {
    this.showCharters();
  }
  // selectCategory(categoryName: string) {
  //   this.currentCategory = categoryName;
  //   this.currentPage = 1;
  //   this.showCharters();
  // }
  showCharters() {
    this.rickAndMorty.getCharacters(this.currentPage).subscribe((data) => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
      console.log(data);
    });

    // else {
    //   this.rickAndMorty.getEpisodes(this.currentPage).subscribe((data) => {
    //     this.episodes = data.results;
    //     this.totalPages = data.info.pages;
    //   });
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
