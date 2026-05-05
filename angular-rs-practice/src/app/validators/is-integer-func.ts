import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl): { [key: string]: any } | null => {
  return Number.isInteger(+control.value) ? null : { noInteger: { value: control.value } };
};
