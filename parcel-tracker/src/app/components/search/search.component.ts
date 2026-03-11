import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackingService } from '../../services/tracking.service';
import { Parcel } from '../../interfaces/search';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  trackingService = inject(TrackingService);
  inpValue: string = '';
  parcelData: Parcel | null = null;
  errorMessage: string = '';
  isLoading: boolean = false;
  onSearch() {
    if (!this.inpValue.trim()) return;
    this.isLoading = true;
    this.parcelData = null;
    this.errorMessage = '';

    this.trackingService.findParcel(this.inpValue).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.parcelData = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.isLoading = false;
        this.parcelData = null;
        this.errorMessage = 'Посилку не знайдено';
      },
    });
  }
}
