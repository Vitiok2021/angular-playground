import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  imports: [FormsModule],
  templateUrl: './forms-example.html',
  styleUrl: './forms-example.scss',
})
export class FormsExample {
  user = {
    name: '',
    age: null,
  };
}
