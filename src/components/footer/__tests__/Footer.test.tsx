import { render, cleanup } from '../../../setupTests';

import { Footer } from '../Footer';

afterEach(cleanup);

it('renders successfully', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toHaveClass('footer');
});

it('contains a logo', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild?.firstChild).toHaveClass('footer-logo');
});
