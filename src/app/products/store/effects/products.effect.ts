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
}
