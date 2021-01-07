import { SET_LOADER } from '../../actions/ui/ui.actions';
import { UiActions } from '../../actions/ui/ui.types';
import { uiReducer } from '../uiReducer';

describe('uiReducer', () => {
  it('returns new state for a SetLoader action', () => {
    const initialState = {
      pending: false,
    };
    const action = {
      type: SET_LOADER,
      payload: true,
    };
    const newState = uiReducer(initialState, action);

    expect(newState.pending).toEqual(true);
  });

  it('returns previous state if unknown action is provided', () => {
    const initialState = {
      pending: false,
    };
    const unknownAction = ({
      type: 'unknown',
      payload: true,
    } as any) as UiActions;

    const newState = uiReducer(initialState, unknownAction);

    expect(newState.pending).toEqual(false);
  });
});
