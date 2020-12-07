import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNumValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumValidatorDirective,
      multi: true
    }
  ]
})
export class NumValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value < 0 ? { numValidator: control.value } : null
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
