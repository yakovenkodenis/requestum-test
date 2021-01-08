import {
  ORGANIZATIONS_LOADED,
  REPOS_LOADED,
  setOrganizations,
  setRepositories,
} from '../data/data.actions';
import {
  setCurrentPage,
  setCurrentSearchTerm,
  setSearchCriteria,
  setSearchHistory,
  SET_CURRENT_PAGE,
  SET_CURRENT_SEARCH_TERM,
  SET_SEARCH_CRITERIA,
  SET_SEARCH_HISTORY_ITEM,
} from '../search/search.actions';
import { setLoader, SET_LOADER } from '../ui/ui.actions';

describe('Data action creators', () => {
  let payload = {
    total_count: 1,
    items: [],
    meta: {
      nextPage: 2,
      lastPage: 3,
    },
  };

  it('creates setRepositories object', () => {
    const action = setRepositories(payload);
    const expectedAction = {
      type: REPOS_LOADED,
      payload: {
        ...payload,
      },
    };

    expect(action).toMatchObject(expectedAction);
  });

  it('creates setOrganizations object', () => {
    const action = setOrganizations(payload);
    const expectedAction = {
      type: ORGANIZATIONS_LOADED,
      payload: {
        ...payload,
      },
    };

    expect(action).toMatchObject(expectedAction);
  });
});

describe('Ui action creators', () => {
  it('creates setLoader object', () => {
    const action = setLoader(true);
    const expectedAction = {
      type: SET_LOADER,
      payload: true,
    };

    expect(action).toMatchObject(expectedAction);
  });
});

describe('Search action creators', () => {
  it('creates setSearchCriteria object', () => {
    const action = setSearchCriteria('criteria');
    const expectedAction = {
      type: SET_SEARCH_CRITERIA,
      payload: {
        criteria: 'criteria',
      },
    };

    expect(action).toMatchObject(expectedAction);
  });

  it('creates setSearchHistory object', () => {
    const action = setSearchHistory('history');
    const expectedAction = {
      type: SET_SEARCH_HISTORY_ITEM,
      payload: 'history',
    };

    expect(action).toMatchObject(expectedAction);
  });

  it('creates setCurrentPage object', () => {
    const action = setCurrentPage(5);
    const expectedAction = {
      type: SET_CURRENT_PAGE,
      payload: 5,
    };

    expect(action).toMatchObject(expectedAction);
  });

  it('creates setCurrentSearchTerm object', () => {
    const action = setCurrentSearchTerm('search');
    const expectedAction = {
      type: SET_CURRENT_SEARCH_TERM,
      payload: 'search',
    };

    expect(action).toMatchObject(expectedAction);
  });
});
