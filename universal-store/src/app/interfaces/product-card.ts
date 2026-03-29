export interface ProductCard {
  id: number;
  title: string;
  imageUrl: string;
  images?: string[];
  price: number;
  isFavorite: boolean;
}
