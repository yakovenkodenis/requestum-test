import { render, cleanup, fireEvent } from '../../../setupTests';

import { SearchField } from '../SearchField';

afterEach(cleanup);

describe('<SearchField />', () => {
  const props = {
    searchTerm: 'search',
    searchCriteria: 'criteria',
    onChange: jest.fn(),
    clear: jest.fn(),
  };

  it('renders successfully', () => {
    const { container } = render(<SearchField {...props} />);
    expect(container.firstChild).toHaveClass('search-field');
  });

  it('calls onChange callback when user types', () => {
    const { getByTestId } = render(<SearchField {...props} />);
    const searchInput = getByTestId('search-input') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(props.onChange).toHaveBeenCalled();
  });

  it('calls clear search input callback on dismiss dismiss click', () => {
    const { getByLabelText } = render(<SearchField {...props} />);
    const dismissButton = getByLabelText('clear search field');

    fireEvent.mouseDown(dismissButton);
    expect(props.clear).toHaveBeenCalled();
    expect(props.clear).toHaveBeenCalledTimes(1);
  });
});
