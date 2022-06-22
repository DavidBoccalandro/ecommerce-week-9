import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs';
import { LoginService } from '../../services/login.service';
import * as userActions from '../actions/user.action';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  loginEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loginAction),
      mergeMap((action) =>
        this.loginService.login(action.user).pipe(
          map((response) => {
            return userActions.loginActionSuccess({ user: response });
          }),
          catchError((error) => {
            this.snackBar.open(error, 'Retry', {
              duration: 3000,
            });
            throw error;
          })
        )
      )
    )
  );
}
