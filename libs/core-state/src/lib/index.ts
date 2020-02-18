import { ActionReducerMap } from '@ngrx/store';

import { appReducer, IAppState } from './app/app.reducer';
import { authReducer, IAuthState } from './auth/auth.reducer';
import * as fromItems from './items/items.reducer';

export interface AppState {
  app: IAppState;
  auth: IAuthState;
  items: fromItems.ItemsState;
}

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
  auth: authReducer,
  items: fromItems.reducer
};

export const defaultState: AppState = {
  app: null,
  auth: null,
  items: {ids: [] } as fromItems.ItemsState
};
