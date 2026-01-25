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

  searchQuery: string = '';

  statusQuery: string = '';

  private searchTimeout: any;

  error: string = '';

  isLoading: boolean = false;

  constructor() {
    this.showCharters();
  }

  showCharters() {
    this.error = '';
    this.isLoading = true;
    this.rickAndMorty
      .getCharacters(this.currentPage, this.searchQuery, this.statusQuery)
      .subscribe({
        next: (data) => {
          this.characters = data.results;
          this.totalPages = data.info.pages;
          this.isLoading = false;
          // console.log(data);
        },
        error: (err) => {
          if (err.status === 429 || err.status === 0) {
            this.error =
              'Забагато запитів! Сервер втомився. Зачекайте 5 хвилин ☕️';
          } else if (err.status === 404) {
            this.error = 'Нічого не знайдено за цими параметрами 🤷‍♂️';
            this.characters = []; // Очищаємо список
          } else {
            this.error = 'Сталася помилка завантаження даних.';
          }
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        },
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
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.currentPage = 1;
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      if (this.searchQuery.length > 0 && this.searchQuery.length < 3) {
        console.log('Замало букв для пошуку... чекаю');
        return;
      }
      console.log('Роблю запит...');
      this.showCharters();
    }, 1000);
  }
  onFilterStatus(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.statusQuery = select.value;
    this.currentPage = 1;
    this.showCharters();
  }
  resetFilters() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchQuery = '';
    this.statusQuery = '';
    this.currentPage = 1;
    this.showCharters();
  }
}
