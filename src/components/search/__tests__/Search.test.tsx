import { render, cleanup, mockedUseSelector } from '../../../setupTests';
import { Search } from '../Search';

afterEach(cleanup);

describe('<Search />', () => {
  it('renders successfully', () => {
    const { container } = render(<Search />);

    expect(container.firstChild).toHaveClass('search');
    expect(container.firstChild?.firstChild).toHaveClass('search-form');
  });

  it('sets currentSearchCriteria by calling useSelector', () => {
    render(<Search />);
    expect(mockedUseSelector).toHaveBeenCalled();
  });
});
