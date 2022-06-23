import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs';
import { CartService } from '../../services/cart.service';
import * as cartActions from '../actions/cart.action';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private store: Store
  ) {}

  cartEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.getCartAction),
      mergeMap(() =>
        this.cartService.getCart().pipe(
          map((response) => {
            return cartActions.getCartSuccess({ cart: response });
          }),
          catchError((error) => {
            if (error.status === 404) {
              this.snackBar.open('Empty Cart', 'Retry', {
                duration: 3000,
              });
            } else {
              this.snackBar.open(error.statusText, 'Retry', {
                duration: 3000,
              });
            }
            throw error;
          })
        )
      )
    )
  );

  removeItemEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.removeItemAction),
      mergeMap((action) =>
        this.cartService.removeItem(action.item).pipe(
          map((response) => {
            this.snackBar.open('Item removed successfully', 'Close', {
              duration: 3000,
            });
            return cartActions.getCartSuccess({ cart: response });
          }),
          catchError((error) => {
            if (error.status === 422) {
              this.store.dispatch(cartActions.resetCart());
              this.snackBar.open('Cart is Empty', 'Close', {
                duration: 3000,
              });
            }
            throw error;
          })
        )
      )
    )
  );
}
