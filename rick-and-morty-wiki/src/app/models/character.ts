export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface ApiResponse {
  info: any;
  results: Character[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}
