import { ActionCreator } from 'redux';
import { UiActions } from './ui.types';

export const SET_LOADER = 'SET_LOADER' as const;

export const setLoader: ActionCreator<UiActions> = (state: boolean) => ({
  type: SET_LOADER,
  payload: state,
});
