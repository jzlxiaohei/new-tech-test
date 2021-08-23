// just for simple,

// anyStringWithoutAtSymbol@anyStringWithoutAtSymbol.anyStringWithoutAtSymbol will be validated
export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function hasNoErrors(error: Record<string, any>) {
  for (const i in error) {
    const v = error[i];
    if (v) {
      return false;
    }
  }
  return true;
}
