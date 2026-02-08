import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService implements OnInit {
  private key = 'cryptoFavorites';

  getFavorites() {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  saveFavorites(ids: string[]) {
    localStorage.setItem(this.key, JSON.stringify(ids));
  }

  toggleFavorite(id: string) {
    let favList = this.getFavorites();

    if (favList.includes(id)) {
      favList = favList.filter((item) => item !== id);
    } else {
      favList.push(id);
    }
    this.saveFavorites(favList);
  }
  ngOnInit(): void {
    // this.toggleFavorite();
  }
}
