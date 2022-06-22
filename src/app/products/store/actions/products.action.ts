import { createAction, props } from '@ngrx/store';
import { ProductsResponse } from '../../interfaces/products-response.interface';

export const getProducts = createAction('[Products] Load Products');

export const getProductsSuccess = createAction(
  '[Products] Getting Products',
  props<{ products: ProductsResponse }>()
);
