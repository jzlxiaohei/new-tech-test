import { isValidEmail, hasNoErrors } from '../common-validator';

describe('common validator', () => {
  test('email validator', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('test@test')).toBe(false);
    expect(isValidEmail('tes@t@test.test')).toBe(false);
    expect(isValidEmail('test@tes@t.test')).toBe(false);

    expect(isValidEmail('test@test.test')).toBe(true);
    expect(isValidEmail('user@163.com')).toBe(true);
    expect(isValidEmail('user@outlook.com')).toBe(true);
    expect(isValidEmail('user@gmail.com')).toBe(true);
    expect(isValidEmail('user@qq.com')).toBe(true);
  });

  test('hasNoErrors', () => {
    expect(hasNoErrors({})).toBe(true);
    expect(
      hasNoErrors({
        a: '',
        b: false,
        c: undefined,
      })
    ).toBe(true);

    expect(
      hasNoErrors({
        a: '0',
      })
    ).toBe(false);
  });
});
