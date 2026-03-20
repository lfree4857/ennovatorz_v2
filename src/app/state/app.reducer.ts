import { createReducer, on } from '@ngrx/store';
import { appInit } from './app.actions';

export interface AppState {
  loaded: boolean;
}

export const initialAppState: AppState = {
  loaded: false
};

export const appReducer = createReducer(
  initialAppState,
  on(appInit, (state) => ({ ...state, loaded: true }))
);
