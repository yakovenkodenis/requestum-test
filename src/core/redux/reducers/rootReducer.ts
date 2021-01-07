import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { searchReducer } from './searchReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  ui: uiReducer,
  data: dataReducer,
});
