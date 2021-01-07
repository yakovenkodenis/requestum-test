import { Action } from 'redux';
import {
  SET_CURRENT_PAGE,
  SET_CURRENT_SEARCH_TERM,
  SET_SEARCH_CRITERIA,
  SET_SEARCH_HISTORY_ITEM,
} from './search.actions';

interface SetSearchCriteria extends Action<typeof SET_SEARCH_CRITERIA> {
  payload: {
    criteria: string;
  };
}

interface SetSearchHistoryItem extends Action<typeof SET_SEARCH_HISTORY_ITEM> {
  payload: string;
}

interface SetCurrentPage extends Action<typeof SET_CURRENT_PAGE> {
  payload: number;
}

interface SetCurrentSearchTerm extends Action<typeof SET_CURRENT_SEARCH_TERM> {
  payload: string;
}

export type SearchActions =
  | SetSearchCriteria
  | SetSearchHistoryItem
  | SetCurrentPage
  | SetCurrentSearchTerm;
