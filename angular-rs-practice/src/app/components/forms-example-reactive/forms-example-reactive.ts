import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-example-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-example-reactive.html',
  styleUrl: './forms-example-reactive.scss',
})
export class FormsExampleReactive {
  name = new FormControl();
  age = new FormControl();
}
