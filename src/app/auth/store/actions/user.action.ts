import { createAction, props } from '@ngrx/store';
import { LoginRequest } from '../../interfaces/login-request.interface';
import { LoginResponse } from '../../interfaces/login-response.interface';

export const loginAction = createAction(
  '[Auth] Login',
  props<{ user: LoginRequest }>()
);

export const loginActionSuccess = createAction(
  '[Auth] LoginSuccess',
  props<{ user: LoginResponse }>()
);