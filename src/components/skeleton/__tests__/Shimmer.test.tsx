import { render, cleanup } from '@testing-library/react';

import { Shimmer } from '../Shimmer';

afterEach(cleanup);

it('renders successfully', () => {
  const { container } = render(<Shimmer />);
  expect(container.firstChild).toHaveClass('shimmer-wrapper');
  expect(container.firstChild?.firstChild).toHaveClass('shimmer');
});
