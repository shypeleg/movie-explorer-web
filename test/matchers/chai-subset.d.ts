declare module Chai {
  interface Assertion {
    containSubset(expected: any): Assertion;
  }
}
