import { Routes } from '@angular/router';
import { CoinsListComponent } from './components/coins-list/coins-list.component';
import { CoinDetailComponent } from './components/coin-detail/coin-detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: CoinsListComponent },
  { path: 'list/', component: CoinsListComponent },
  { path: 'coin/:id', component: CoinDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
];
