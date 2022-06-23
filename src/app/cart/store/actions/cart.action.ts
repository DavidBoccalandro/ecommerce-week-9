import { createAction, props } from '@ngrx/store';
import { ProductCartResponse } from 'src/app/products/interfaces/product-cart-response.interface';

export const getCartAction = createAction('[Cart] Get Cart');

export const getCartSuccess = createAction(
  '[Cart] Get Cart Success',
  props<{ cart: ProductCartResponse }>()
);

export const removeItemAction = createAction(
  '[Cart] Remove Item',
  props<{ item: ProductCartResponse }>()
);

export const resetCart = createAction('[Cart] Reset Cart');
