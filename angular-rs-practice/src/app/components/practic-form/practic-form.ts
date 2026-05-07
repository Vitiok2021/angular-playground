import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-practic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './practic-form.html',
  styleUrl: './practic-form.scss',
})
export class PracticForm implements OnInit {
  public itemForm!: FormGroup;
  @Output() save = new EventEmitter();
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.itemForm = this.fb.group({
      id: ['', [Validators.required, this.isInteger]],
      name: ['', Validators.required],
    });
  }
  public isInteger(control: AbstractControl) {
    return Number.isInteger(+control.value) ? null : { noInteger: { value: control.value } };
  }
  submit() {
    console.log('submit', this.itemForm.value);
    this.save.emit(this.itemForm.value);
  }
}
