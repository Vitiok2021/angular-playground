import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-example-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-example-reactive.html',
  styleUrl: './forms-example-reactive.scss',
})
export class FormsExampleReactive {
  user = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phones: new FormArray([this.createPhone()]),
  });

  get phones() {
    return this.user.get('phones') as FormArray;
  }

  createPhone() {
    return new FormGroup({
      type: new FormControl(),
      number: new FormControl(),
    });
  }

  addPhone() {
    this.phones.push(this.createPhone());
  }
}
