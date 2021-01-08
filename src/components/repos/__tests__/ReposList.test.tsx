import { setLoader } from '../../../core/redux/actions/ui/ui.actions';
import {
  render,
  cleanup,
  mockedUseSelector,
  mockDispatch,
} from '../../../setupTests';

import { ReposList } from '../ReposList';

afterEach(cleanup);

describe('<ReposList />', () => {
  it('renders successfully', () => {
    const { container } = render(<ReposList />);
    expect(container.firstChild).toHaveClass('container');
  });

  it('calls useSelector for selecting needed state from the store', () => {
    render(<ReposList />);
    expect(mockedUseSelector).toHaveBeenCalled();
  });
});
