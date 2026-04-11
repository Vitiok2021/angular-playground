import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  dashboardForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl(''),
    isFavorite: new FormControl(false),
    images: new FormControl(''),
    details: new FormGroup({
      description: new FormControl(''),
      manufacturer: new FormControl(''),
      length: new FormControl(''),
      weight: new FormControl(''),
      color: new FormControl(''),
      packSize: new FormControl(''),
    }),
  });
  onAdd() {}
}
