export function mobileScreen(cssStr: string) {
  return `@media only screen and (max-width: 540px) {
    ${cssStr}
  }`;
}
