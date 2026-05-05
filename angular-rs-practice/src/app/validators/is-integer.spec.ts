import { IsInteger } from './is-integer';

describe('IsInteger', () => {
  it('should create an instance', () => {
    const directive = new IsInteger();
    expect(directive).toBeTruthy();
  });
});
