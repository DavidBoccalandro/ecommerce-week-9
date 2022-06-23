import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import * as productsActions from '../actions/products.action';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private snackBar: MatSnackBar
  ) {}

  productsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.getProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((response) => {
            return productsActions.getProductsSuccess({ products: response });
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

  addProductToCartEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.addProductToCart),
      mergeMap((action) =>
        this.productsService.addProductToCart(action.data).pipe(
          map((response) => {
            this.snackBar.open(
              'The product has been added to the cart successfully',
              'Close',
              { duration: 3000 }
            );
            return productsActions.addProductToCartSuccess({ data: response });
          }),
          catchError((error) => {
            if (error.status === 422) {
              this.snackBar.open(
                'This product already exist in the cart',
                'Retry',
                {
                  duration: 3000,
                }
              );
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
}
