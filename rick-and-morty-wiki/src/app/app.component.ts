import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Character, Episode } from './models/character';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
