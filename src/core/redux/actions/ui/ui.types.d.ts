import { Action } from 'redux';
import { SET_LOADER } from './ui.actions';

interface SetLoader extends Action<typeof SET_LOADER> {
  payload: boolean;
}

export type UiActions = SetLoader;
