import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackingService } from '../../services/tracking.service';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  trackingService = inject(TrackingService);
  inpValue: string = '';
  onSearch() {
    if (!this.inpValue.trim()) return;
    const currentTrackNumber = this.trackingService.findParcel(this.inpValue);
  }
}
