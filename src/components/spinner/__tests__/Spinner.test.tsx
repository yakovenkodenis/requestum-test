import { render, cleanup } from '../../../setupTests';

import { Spinner } from '../Spinner';

afterEach(cleanup);

it('renders successfully', () => {
  const { container, getByText } = render(<Spinner />);
  expect(container.firstChild).toHaveClass('loader');
  expect(getByText('Loading...')).toBeInTheDocument();
});
