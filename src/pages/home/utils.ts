import { isValidEmail } from '@/utils/common-validator';

export const ErrorMessageConfig = {
  fullNameRequired: 'Full name is required!',
  fullName3Letters: 'Full name needs at least 3 letters!',
  emailInvalid: 'email is invalid',
  confirmEmail: 'email is not matched!',
} as const;

export const formValidator = {
  fullName(n: string) {
    if (!n) {
      return ErrorMessageConfig.fullNameRequired;
    }
    if (n.length < 3) {
      return ErrorMessageConfig.fullName3Letters;
    }
  },
  email(n: string) {
    if (!isValidEmail(n)) {
      return ErrorMessageConfig.emailInvalid;
    }
  },
  confirmEmail(email: string, confirmEmail: string) {
    if (email !== confirmEmail) {
      return ErrorMessageConfig.confirmEmail;
    }
  },
};
