import { render, cleanup, fireEvent } from '../../../setupTests';

import { PageButton } from '../PageButton';

afterEach(cleanup);

describe('<PageButton />', () => {
  const props = {
    isCurrent: true,
    value: '1',
    isDisabled: false,
    onChoose: jest.fn(),
  };

  it('renders successfully', () => {
    const { container } = render(<PageButton {...props} />);
    expect(container.firstChild).toHaveClass('current');
    expect(container.firstChild).not.toBeDisabled();
    expect(container.firstChild).toHaveTextContent(props.value);
  });

  it('fires onChoose props on click', () => {
    const { getByText } = render(<PageButton {...props} />);
    fireEvent.click(getByText(props.value));

    expect(props.onChoose).toHaveBeenCalled();
    expect(props.onChoose).toHaveBeenCalledTimes(1);
  });
});
