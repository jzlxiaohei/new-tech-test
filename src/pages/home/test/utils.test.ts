import { formValidator, ErrorMessageConfig } from '../utils';

describe('common validator', () => {
  test('email validator', () => {
    expect(formValidator.fullName('123')).toBe(undefined);
    expect(formValidator.fullName('1 3')).toBe(undefined);

    expect(formValidator.fullName('')).toBe(
      ErrorMessageConfig.fullNameRequired
    );
    expect(formValidator.fullName('1')).toBe(
      ErrorMessageConfig.fullName3Letters
    );

    expect(formValidator.email('1')).toBe(ErrorMessageConfig.emailInvalid);
    expect(formValidator.confirmEmail('1', '2')).toBe(
      ErrorMessageConfig.confirmEmail
    );
    expect(formValidator.confirmEmail('1', '1')).toBe(undefined);
  });
});
