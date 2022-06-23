import { createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ProductsResponse } from '../../interfaces/products-response.interface';
import { getProductsSuccess } from '../actions/products.action';

export interface AppStateWithProducts extends AppState {
  products: ProductsResponse;
}

export const initialState: ProductsResponse = {
  data: [],
};

export const productsReducer = createReducer(
  initialState,
  on(getProductsSuccess, (state, action) => {
    return { ...state, data: action.products.data };
  })
);
