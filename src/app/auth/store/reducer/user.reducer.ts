import { createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { LoginResponse } from '../../interfaces/login-response.interface';
import { loginActionSuccess } from '../actions/user.action';

export interface AppStateWithUser extends AppState {
  user: LoginResponse;
}

export const initialState: LoginResponse = {
  data: undefined,
};

export const loginReducer = createReducer(
  initialState,
  on(loginActionSuccess, (state, action) => {
    return action.user;
  })
);
