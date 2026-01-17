import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episode-card',
  imports: [],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.scss',
})
export class EpisodeCardComponent {
  @Input() episode: any;
}
