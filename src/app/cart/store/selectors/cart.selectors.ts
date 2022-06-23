import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateWithCart } from '../reducer/cart.reducer';

export const selectCartState = createFeatureSelector<AppStateWithCart>('cart');

export const cartSelector = createSelector(selectCartState, (cart) => cart);
