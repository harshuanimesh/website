import { sharedAdmin } from './shared-admin';

describe('sharedAdmin', () => {
  it('should work', () => {
    expect(sharedAdmin()).toEqual('shared-admin');
  });
});
