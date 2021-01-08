import { render, cleanup } from '../../../setupTests';

import { Header } from '../Header';

afterEach(cleanup);

it('renders successfully', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toHaveClass('header');
  expect(container.firstChild?.firstChild).toHaveClass('header-logo');
});
