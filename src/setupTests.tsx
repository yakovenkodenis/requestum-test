import '@testing-library/jest-dom';
import React, { FC } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as mockReactRedux from 'react-redux';

import { configureStore } from './core/redux/configureStore';

const store = configureStore();
store.dispatch = jest.fn(store.dispatch) as typeof store.dispatch;
const mockDispatch = store.dispatch;

jest.mock('react-redux', () => ({
  ...(jest.requireActual('react-redux') as typeof mockReactRedux),
  useSelector: jest.fn(),
}));

export const mockState = {
  search: {
    historyItems: ['history 1', 'history 2'],
    criteria: 'criteria',
    currentSearchTerm: 'term',
  },
  ui: { pending: false },
  data: { meta: { nextPage: 1, lastPage: 2 }, items: [], total_count: 1 },
};
let mockedUseSelector: jest.Mock;

beforeEach(() => {
  mockedUseSelector = mockReactRedux.useSelector as jest.Mock;

  mockedUseSelector.mockImplementation((callback) => {
    return callback(mockState);
  });
});

afterEach(() => {
  mockedUseSelector.mockClear();
});

export { mockedUseSelector, mockDispatch };

const WithProviders: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: WithProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
