import { createReducer } from '@ngrx/store';

export interface AuthState {
  token: string | null;
}

export const initialState: AuthState = {
  token: null
};

export const authReducer = createReducer(
  initialState
);