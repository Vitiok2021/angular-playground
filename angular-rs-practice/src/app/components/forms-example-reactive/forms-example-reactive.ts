import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import appIsInteger from '../../validators/is-integer-func';
@Component({
  selector: 'app-forms-example-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-example-reactive.html',
  styleUrl: './forms-example-reactive.scss',
})
export class FormsExampleReactive {
  user = new FormGroup({
    name2: new FormControl('', [Validators.required]),
    age2: new FormControl('', [Validators.required, appIsInteger]),
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
    console.log(this.phones);
  }
}
