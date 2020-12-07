import { Attribute, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appRePasswordValidator][formControlName],[appRePasswordValidator][formControl],[appRePasswordValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RePasswordValidatorDirective,
      multi: true
    }
  ]
})
export class RePasswordValidatorDirective implements Validator {

  private get isReverse(): boolean {
    if (!this.reverse) { return false; }
    return this.reverse === 'true' ? true : false;
  }

  constructor(
    @Attribute('appRePasswordValidator') private password: string,
    @Attribute('reverse') private reverse: string
  ) { }


  validate(control: AbstractControl): ValidationErrors | null {
    const password: AbstractControl = control.root.get(this.password);

    if (password && password.value !== control.value && !this.isReverse) {
      return { rePasswordValidator: true };
    }

    if (password && control.value === password.value && this.isReverse) {
      delete password.errors['rePasswordValidator'];
      if (!Object.keys(password.errors).length) { password.setErrors(null); }
    }

    if (password && control.value !== password.value && this.isReverse) {
      password.setErrors({ rePasswordValidator: true });
    }

    return null;

  }

}
