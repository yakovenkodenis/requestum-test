import { AnyAction } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { GithubApi } from '../../../api/api';
import { RootState } from '../../configureStore';
import { ORGANIZATIONS_LOADED, REPOS_LOADED } from '../data/data.actions';
import { fetchOrganizations, fetchRepos } from '../data/data.thunks';
import { SET_LOADER } from '../ui/ui.actions';

type DispatchExts = ThunkDispatch<RootState, void, AnyAction>;

const githubApi = new GithubApi();
const middlewares = [thunk.withExtraArgument(githubApi)];
const mockStore = configureMockStore<RootState, DispatchExts>(middlewares);

const initialRootState = {
  search: undefined,
  ui: undefined,
  data: undefined,
};

describe('Test fetchRepos thunk action creator', () => {
  it('expected actions should be dispatched on successful request', () => {
    const store = mockStore(initialRootState as any);
    const expectedActions = [SET_LOADER, REPOS_LOADED, SET_LOADER];

    return store.dispatch(fetchRepos('test') as any).then(() => {
      const actions = store.getActions();
      expect(actions.map((action: AnyAction) => action.type)).toEqual(
        expectedActions
      );
    });
  });
});

describe('Test fetchOrganizations thunk action creator', () => {
  it('expected actions should be dispatched on successful request', () => {
    const store = mockStore(initialRootState as any);
    const expectedActions = [SET_LOADER, ORGANIZATIONS_LOADED, SET_LOADER];

    return store.dispatch(fetchOrganizations('test') as any).then(() => {
      const actions = store.getActions();
      expect(actions.map((action: AnyAction) => action.type)).toEqual(
        expectedActions
      );
    });
  });
});
