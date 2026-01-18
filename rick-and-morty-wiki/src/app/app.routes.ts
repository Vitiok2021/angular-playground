import { Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationCardComponent } from './cards/location-card/location-card.component';
import { LocationListComponent } from './pages/location-list/location-list.component';

export const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: 'character',
    component: CharacterListComponent,
  },
  {
    path: 'character/:id',
    component: CharacterDetailsComponent,
  },
  {
    path: 'location',
    component: LocationListComponent,
  },
  {
    path: 'location/:id',
    component: LocationDetailsComponent,
  },
];
