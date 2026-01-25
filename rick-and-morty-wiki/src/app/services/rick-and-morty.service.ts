import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, Character, Episode, Location } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private http = inject(HttpClient);

  private apiUrl = 'https://rickandmortyapi.com/api';

  getCharacters(page: number = 1, name: string = '') {
    let params = new HttpParams().set('page', page.toString());
    if (name) {
      params = params.set('name', name);
    }
    return this.http.get<ApiResponse<Character>>(`${this.apiUrl}/character`, {
      params,
    });
  }
  getCharacter(id: number) {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }
  getLocations(page: number = 1, name: string = '') {
    let params = new HttpParams().set('page', page.toString());

    if (name) {
      params = params.set('name', name);
    }
    return this.http.get<ApiResponse<Location>>(`${this.apiUrl}/location`, {
      params,
    });
  }
  getLocation(id: number) {
    return this.http.get<Location>(`${this.apiUrl}/location/${id}`);
  }
  getEpisodes(page: number = 1, name: string = '') {
    let params = new HttpParams().set('page', page.toString());
    if (name) {
      params = params.set('name', name);
    }
    return this.http.get<ApiResponse<Episode>>(`${this.apiUrl}/episode`, {
      params,
    });
  }
  getEpisode(id: number) {
    return this.http.get<Episode>(`${this.apiUrl}/episode/${id}`);
  }
}
