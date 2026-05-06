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
import { IsIntegerValidator } from '../../validators/is-integer';
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
      name: ['', Validators.required],
      age: ['', [Validators.required, IsIntegerValidator]],
      phones: this.formBuilder.array([this.createPhone()]),
    });
  }
  get phones() {
    return this.userForm.get('phones') as FormArray;
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
