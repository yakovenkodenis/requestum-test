import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { GithubApi } from '../api/api';
import { LocalStorage } from '../entities/storage';
import { rootReducer } from './reducers/rootReducer';
import { initialSearchState } from './reducers/searchReducer';

export type RootState = ReturnType<typeof rootReducer>;

const githubApi = new GithubApi();
const storage = new LocalStorage();

let historyItems: string[] = [];

try {
  const history = storage.getItem('historyItems');
  historyItems = history ? JSON.parse(history) : [];
} catch {
  historyItems = [];
}

const persistedState: RootState = {
  ui: undefined as any,
  data: undefined as any,
  search: {
    ...initialSearchState,
    historyItems,
  },
};

export function configureStore() {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk.withExtraArgument(githubApi))
  );

  let currentHistory: string;
  const persistHistory = () => {
    let previousHistory = currentHistory;
    currentHistory = JSON.stringify(store.getState().search.historyItems);

    if (previousHistory !== currentHistory) {
      try {
        storage.setItem('historyItems', currentHistory);
      } catch {
        storage.setItem('historyItems', previousHistory);
      }
    }
  };

  store.subscribe(throttle(persistHistory, 1500));

  return store;
}
