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
    phones2: new FormArray([this.createPhone()]),
  });

  get phones2() {
    return this.user.get('phones2') as FormArray;
  }

  createPhone() {
    return new FormGroup({
      type: new FormControl(),
      number: new FormControl(),
    });
  }

  addPhone() {
    this.phones2.push(this.createPhone());
    console.log(this.phones2);
  }
  submit2() {
    this.user.setValue({
      name2: 'Viktor',
      age2: '37',
      phones2: [
        {
          type: 'home',
          number: '343',
        },
      ],
    });
    console.log(this.user);
  }
}
