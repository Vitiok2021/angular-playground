import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLinkWithHref,
  RouterLinkActive,
} from '@angular/router';
import { Character, Episode } from './models/character';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Rick & Morty Wiki';
}
