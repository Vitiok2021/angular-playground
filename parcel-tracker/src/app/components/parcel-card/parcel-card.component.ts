import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parcel } from '../../interfaces/search';

@Component({
  selector: 'app-parcel-card',
  imports: [],
  templateUrl: './parcel-card.component.html',
  styleUrl: './parcel-card.component.css',
})
export class ParcelCardComponent {
  @Input() parcelCard!: Parcel;

  @Output() deletedCard = new EventEmitter<number>();
  onDelete() {
    this.deletedCard.emit();
  }
}
