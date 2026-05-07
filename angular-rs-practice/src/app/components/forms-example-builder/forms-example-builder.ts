import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import appIsInteger from '../../validators/is-integer-func';
@Component({
  selector: 'app-forms-example-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-example-builder.html',
  styleUrl: './forms-example-builder.scss',
})
export class FormsExampleBuilder implements OnInit {
  public userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name3: ['', Validators.required],
      age3: ['', [Validators.required, appIsInteger]],
      phones3: this.formBuilder.array([this.createPhone()]),
    });
  }
  get phones3() {
    return this.userForm.get('phones3') as FormArray;
  }

  createPhone() {
    return new FormGroup({
      type: new FormControl(),
      number: new FormControl(),
    });
  }
  addPhone() {
    this.phones3.push(this.createPhone());
  }
}
