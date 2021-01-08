import { render, cleanup } from '@testing-library/react';

import { SkeletonRepo } from '../SkeletonRepo';

afterEach(cleanup);

it('renders successfully', () => {
  const { container } = render(<SkeletonRepo />);
  expect(container.firstChild).toHaveClass('skeleton-wrapper');
  expect(container.firstChild?.firstChild).toHaveClass('skeleton-repo');
  expect(container.firstChild?.firstChild?.childNodes.length).toEqual(3);
});
