import { render, cleanup } from '@testing-library/react';

import { SkeletonElement } from '../SkeletonElement';

afterEach(cleanup);

it('renders successfully', () => {
  const type = 'light';
  const { container } = render(<SkeletonElement type={type} />);
  expect(container.firstChild).toHaveClass(`skeleton ${type}`);
});
