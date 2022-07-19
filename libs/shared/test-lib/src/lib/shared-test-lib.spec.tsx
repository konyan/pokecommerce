import { render } from '@testing-library/react';

import SharedTestLib from './shared-test-lib';

describe('SharedTestLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedTestLib />);
    expect(baseElement).toBeTruthy();
  });
});
