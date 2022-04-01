import { sharedStallion } from './shared-stallion';

describe('sharedStallion', () => {
  it('should work', () => {
    expect(sharedStallion()).toEqual('shared-stallion');
  });
});
