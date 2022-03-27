import { sharedArtifacts } from './shared-artifacts';

describe('sharedArtifacts', () => {
  it('should work', () => {
    expect(sharedArtifacts()).toEqual('shared-artifacts');
  });
});
