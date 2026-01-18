export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}
export interface Location {
  id: number;
  name: string;
  type: string;
  demension: string;
  residents: string[];
  url: string;
  created: string;
}
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}
export interface ApiResponse<T> {
  info: any;
  results: T[];
}
