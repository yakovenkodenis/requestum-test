import { render, cleanup, fireEvent } from '../../../setupTests';

import { HistoryItem } from '../HistoryItem';

afterEach(cleanup);

describe('<HistoryItem />', () => {
  const props = {
    value: 'history value',
    onSelectItem: jest.fn(),
  };

  it('renders successfully', () => {
    const { getByText } = render(<HistoryItem {...props} />);
    expect(getByText(props.value)).toBeTruthy();
  });

  it('fires select callback on mousedown', () => {
    const { getByTestId } = render(<HistoryItem {...props} />);
    fireEvent.mouseDown(getByTestId('history-item'));

    expect(props.onSelectItem).toHaveBeenCalled();
    expect(props.onSelectItem).toHaveBeenCalledTimes(1);
    expect(props.onSelectItem).toHaveBeenCalledWith(props.value);
  });
});
