# Demo Project

## How to develop

1. yarn
2. yarn start
3. visit http://localhost:8080

## Test

- `yarn test`: see test cases
- `yarn test-watch`: test watch mode.
- `yarn test-coverage`: overall test coverage info
- `yarn test-coverage-detail`: test coverage table for each file

## Typescript Coverage

`yarn ts-coverage`: see typescript coverage

## Commit

use husky and lint-staged to check typescript when committing. (babel + typescript-preset just transform code without checking type validation)

## Deploy

yarn build

## Design

- `src/components`: components for common use might become part of ui library. Use less instead emotion.
- `src/layout`: layout header, footer, main container
