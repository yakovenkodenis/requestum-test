import { truncate } from '../../../core/utils/truncate';
import { render, cleanup } from '../../../setupTests';

import { OrganizationListItem } from '../OrganizationListItem';

afterEach(cleanup);

describe('<OrganizationListItem />', () => {
  const props = {
    name: 'name',
    login: 'login',
    description: 'description',
    html_url: 'html_url',
    avatar_url: 'avatar_url',
  };

  it('renders successfully', () => {
    const { container } = render(<OrganizationListItem {...props} />);
    expect(container.firstChild).toHaveClass('organization-list-item');
    expect(container.firstChild).toHaveTextContent(
      truncate(props.description, 350)
    );
  });
});
