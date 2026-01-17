import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, Episode } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private http = inject(HttpClient);

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  getCharacters(page: number = 1) {
    return this.http.get<ApiResponse>(this.apiUrl + '?page=' + page);
  }
  getCharacter(id: number) {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }
  getLocations(page: number = 1) {
    return this.http.get<any>(
      'https://rickandmortyapi.com/api/location?page=' + page,
    );
  }
  getLocation(id: number) {
    return this.http.get<any>('https://rickandmortyapi.com/api/location/' + id);
  }
  getEpisodes(page: number = 1) {
    return this.http.get<any>(
      'https://rickandmortyapi.com/api/episode?page=' + page,
    );
  }
}
