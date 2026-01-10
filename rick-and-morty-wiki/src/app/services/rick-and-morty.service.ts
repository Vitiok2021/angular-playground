import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private http = inject(HttpClient);

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  getCharacters(page: number = 1) {
    return this.http.get<ApiResponse>(this.apiUrl + '?page=' + page);
  }
}
