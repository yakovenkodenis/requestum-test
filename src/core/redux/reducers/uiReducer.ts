import { Reducer } from 'redux';
import { SET_LOADER } from '../actions/ui/ui.actions';
import { UiActions } from '../actions/ui/ui.types';

interface UiState {
  pending: boolean;
}

const initialState: UiState = {
  pending: false,
};

export const uiReducer: Reducer<UiState, UiActions> = (
  state = initialState,
  action: UiActions
): UiState => {
  switch (action.type) {
    case SET_LOADER: {
      return {
        pending: action.payload,
      };
    }

    default:
      return state;
  }
};
