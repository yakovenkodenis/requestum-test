import { Reducer } from 'redux';
import { LocalStorage } from '../../entities/storage';
import { FixedSizeQueue } from '../../utils/fixedSizeQueue';
import {
  SET_CURRENT_PAGE,
  SET_CURRENT_SEARCH_TERM,
  SET_SEARCH_CRITERIA,
  SET_SEARCH_HISTORY_ITEM,
} from '../actions/search/search.actions';
import { SearchActions } from '../actions/search/search.types';

interface SearchState {
  criteria: string;
  historyItems: string[];
  currentPage: number;
  searchTerm: string;
}

const storage = new LocalStorage();

let historyItems: string[] = [];

try {
  const history = storage.getItem('historyItems');
  historyItems = history ? JSON.parse(history) : [];
} catch {
  historyItems = [];
}

const fixedQueue = new FixedSizeQueue(5, historyItems);

export const initialSearchState: SearchState = {
  criteria: 'Repositories',
  currentPage: 1,
  historyItems,
  searchTerm: '',
};

export const searchReducer: Reducer<SearchState, SearchActions> = (
  state = initialSearchState,
  action: SearchActions
) => {
  switch (action.type) {
    case SET_SEARCH_CRITERIA: {
      return {
        ...state,
        criteria: action.payload.criteria,
      };
    }
    case SET_SEARCH_HISTORY_ITEM: {
      fixedQueue.unshift(action.payload);
      return {
        ...state,
        historyItems: fixedQueue.values,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case SET_CURRENT_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    default:
      return state;
  }
};
