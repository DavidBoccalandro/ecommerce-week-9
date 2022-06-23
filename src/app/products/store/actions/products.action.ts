import { createAction, props } from '@ngrx/store';
import { ProductCartResponse } from '../../interfaces/product-cart-response.interface';
import { ProductsResponse } from '../../interfaces/products-response.interface';

export const getProducts = createAction('[Products] Load Products');

export const getProductsSuccess = createAction(
  '[Products] Getting Products',
  props<{ products: ProductsResponse }>()
);

export const addProductToCart = createAction(
  '[Products] Add Product to Cart',
  props<{ data: ProductCartResponse }>()
);

export const addProductToCartSuccess = createAction(
  '[Products] Add Product to Cart Success',
  props<{ data: ProductCartResponse }>()
);
