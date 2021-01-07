import { ActionCreator } from 'redux';
import { SearchActions } from './search.types';

export const SET_SEARCH_CRITERIA = 'SET_SEARCH_CRITERIA' as const;
export const SET_SEARCH_HISTORY_ITEM = 'SET_SEARCH_HISTORY_ITEM' as const;
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' as const;
export const SET_CURRENT_SEARCH_TERM = 'SET_CURRENT_SEARCH_TERM' as const;

export const setSearchCriteria: ActionCreator<SearchActions> = (
  criteria: string
) => ({
  type: SET_SEARCH_CRITERIA,
  payload: {
    criteria,
  },
});

export const setSearchHistory: ActionCreator<SearchActions> = (
  historyItem: string
) => ({
  type: SET_SEARCH_HISTORY_ITEM,
  payload: historyItem,
});

export const setCurrentPage: ActionCreator<SearchActions> = (page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setCurrentSearchTerm: ActionCreator<SearchActions> = (
  searchTerm: string
) => ({
  type: SET_CURRENT_SEARCH_TERM,
  payload: searchTerm,
});
