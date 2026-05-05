import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms';

import appIsInteger from './is-integer-func';
@Directive({
  selector: '[appIsInteger]',
  standalone: true,
  providers: [{ provide: NG_VALIDATORS, useExisting: IsIntegerValidator, multi: true }],
})
export class IsIntegerValidator implements Validator {
  @Input() appIsInteger: string = '';
  validate(control: AbstractControl): ValidationErrors | null {
    return appIsInteger(control);
  }
}
