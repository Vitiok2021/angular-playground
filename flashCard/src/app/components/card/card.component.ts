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
  dictionary = {
    attach: 'прикріпляти',
    attachment: 'вкладення',
    access: 'доступ',
    crash: 'збій',
  };
  cardForm = new FormGroup({
    word: new FormControl('', [Validators.required, Validators.minLength(2)]),
    translate: new FormControl(''),
  });
  onTranslate() {
    if (!this.cardForm.valid) return;
    const currentWord = this.cardForm.value.word?.trim().toLowerCase() || '';
    const translatedWord = (this.dictionary as any)[currentWord];
    if (translatedWord) {
      this.cardForm.controls.translate.setValue(translatedWord);
    } else {
      this.cardForm.controls.translate.setValue('Not Found');
    }
  }
}
