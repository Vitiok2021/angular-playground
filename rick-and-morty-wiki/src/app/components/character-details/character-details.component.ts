import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-details',
  imports: [RouterLink],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
})
export class CharacterDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private rickAndMorty = inject(RickAndMortyService);

  character: Character | null = null;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.rickAndMorty.getCharacter(Number(id)).subscribe((data) => {
        this.character = data;
        console.log(this.character);
      });
    }
  }
}
