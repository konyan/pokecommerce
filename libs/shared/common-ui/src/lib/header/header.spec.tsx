import { render } from '@testing-library/react';

import Header from './header';

describe('Header test', () => {
  it('should render successfully', () => {
    let props = {} as any
    const { baseElement } = render(<Header {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
