import {
  setCurrentPage,
  setCurrentSearchTerm,
  setSearchCriteria,
  setSearchHistory,
} from '../../actions/search/search.actions';
import { searchReducer } from '../searchReducer';

describe('searchReducer', () => {
  const initialState = {
    criteria: 'Repositories',
    currentPage: 1,
    historyItems: ['history'],
    searchTerm: '',
  };

  it('updates search criteria on SetSearchCriteria action', () => {
    const newCriteria = 'Organizations';
    const action = setSearchCriteria(newCriteria);
    const newState = searchReducer(initialState, action);

    expect(newState.criteria).toEqual(newCriteria);
  });

  it('updates search history item on SetSearchHistoryItem action', () => {
    const newItem = 'new history item';
    const action = setSearchHistory(newItem);
    const newState = searchReducer(initialState, action);

    expect(newState.historyItems).toContain(newItem);
  });

  it('updates current search page on SetCurrentPage action', () => {
    const newPage = 5;
    const action = setCurrentPage(newPage);
    const newState = searchReducer(initialState, action);

    expect(newState.currentPage).toEqual(newPage);
  });

  it('updates search term on SetCurrentSearchTerm action', () => {
    const searchTerm = 'search';
    const action = setCurrentSearchTerm(searchTerm);
    const newState = searchReducer(initialState, action);

    expect(newState.searchTerm).toEqual(searchTerm);
  });
});
