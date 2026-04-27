import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-card',
  imports: [ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardForm = new FormGroup({
    word: new FormControl('', Validators.minLength(2)),
    translate: new FormControl('', Validators.minLength(2)),
  });
  onTranslate() {}
}
