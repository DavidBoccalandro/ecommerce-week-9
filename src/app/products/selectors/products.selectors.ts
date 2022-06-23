import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateWithProducts } from '../store/reducer/products.reducer';

export const selectProductsState =
  createFeatureSelector<AppStateWithProducts>('products');

export const productsSelector = createSelector(
  selectProductsState,
  (products) => products
);
