import { render, cleanup, fireEvent } from '../../../setupTests';

import { Dropdown } from '../Dropdown';

afterEach(cleanup);

describe('<Dropdown />', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const defaultOption = 'Option 1';

  it('renders successfully', () => {
    const { container } = render(
      <Dropdown options={options} defaultOption={defaultOption} />
    );

    expect(container.firstChild).toHaveClass('dropdown');
  });

  it('becomes active on click', () => {
    const { container, getByTestId } = render(
      <Dropdown options={options} defaultOption={defaultOption} />
    );

    fireEvent.click(getByTestId('dropdown-current-option'));
    expect(container.firstChild).toHaveClass('active');
  });

  it('changes current option on click on options list', () => {
    const { container, getByTestId, getByText } = render(
      <Dropdown options={options} defaultOption={defaultOption} />
    );

    fireEvent.click(getByTestId('dropdown-current-option'));
    fireEvent.click(getByText('Option 3'));

    expect(container.firstChild).not.toHaveClass('active');
    expect(getByTestId('dropdown-current-option')).toHaveTextContent(
      'Option 3'
    );
  });
});
