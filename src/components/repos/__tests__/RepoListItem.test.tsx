import { kNumberFormatter } from '../../../core/utils/formatters';
import { render, cleanup } from '../../../setupTests';

import { RepoListItem } from '../RepoListItem';

afterEach(cleanup);

describe('<RepoListItem />', () => {
  const props = {
    full_name: 'full_name',
    description: 'description',
    html_url: 'html_url',
    language: 'language',
    stargazers_count: 1999,
    updated_at: '2021-01-08T01:38:20',
    license: {
      name: 'license',
      url: 'url',
    },
  };

  it('renders successfully', () => {
    const { container } = render(<RepoListItem {...props} />);
    expect(container.firstChild).toHaveClass('repo-list-item');
    expect(container.firstChild).toHaveTextContent(props.description);
    expect(container.firstChild).toHaveTextContent(
      kNumberFormatter(props.stargazers_count)
    );
  });
});
