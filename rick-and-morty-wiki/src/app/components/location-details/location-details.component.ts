import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-location-details',
  imports: [RouterLink],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.scss',
})
export class LocationDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private rickAndMorty = inject(RickAndMortyService);

  location: any;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickAndMorty.getLocation(Number(id)).subscribe((data) => {
        this.location = data;
        console.log(data);
      });
    }
  }
}
