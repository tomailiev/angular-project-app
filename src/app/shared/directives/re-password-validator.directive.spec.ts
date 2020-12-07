import { RePasswordValidatorDirective } from './re-password-validator.directive';

describe('RePasswordValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new RePasswordValidatorDirective('pass', 'false');
    expect(directive).toBeTruthy();
  });
});
