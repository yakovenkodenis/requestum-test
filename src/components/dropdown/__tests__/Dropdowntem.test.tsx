import { render, cleanup, fireEvent } from '../../../setupTests';

import { DropdownItem } from '../DropdownItem';

afterEach(cleanup);

describe('<DropdownItem />', () => {
  const callback = jest.fn();

  it('renders successfully', () => {
    const option = 'Option';
    const { container } = render(
      <DropdownItem option={option} setItem={callback} />
    );

    expect(container.firstChild).toHaveTextContent(option);
  });

  it('calls the passed in setItem callback with own value when clicked', () => {
    const option = 'Option';
    const { getByText } = render(
      <DropdownItem option={option} setItem={callback} />
    );

    fireEvent.click(getByText(option));

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(option);
  });
});
