import { render, cleanup, mockState } from '../../../setupTests';

import { History } from '../History';

afterEach(cleanup);

describe('<History />', () => {
  const props = {
    searchTerm: 'searchTerm',
    onSelect: jest.fn(),
  };

  it('renders successfully', () => {
    const { container } = render(<History {...props} />);
    expect(container.firstChild).toHaveClass('autocomplete');
  });

  it('renders history items from store by using useSelector', () => {
    const { container } = render(<History {...props} />);
    expect(container.firstChild?.firstChild?.childNodes.length).toEqual(
      mockState.search.historyItems.length + 1
    );
  });
});
