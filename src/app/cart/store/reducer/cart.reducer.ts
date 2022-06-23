import { createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ProductCartResponse } from '../../../products/interfaces/product-cart-response.interface';
import { getCartSuccess, resetCart } from '../actions/cart.action';

export interface AppStateWithCart extends AppState {
  user: ProductCartResponse;
}

export const initialState: ProductCartResponse = {
  data: {
    id: undefined,
    user_id: undefined,
    number: undefined,
    status: undefined,
    total: undefined,
    total_items: undefined,
    completed_at: undefined,
    created_at: undefined,
    items: [],
  },
};

export const cartReducer = createReducer(
  initialState,
  on(getCartSuccess, (state, action) => {
    return action.cart;
  }),
  on(resetCart, () => {
    return initialState;
  })
);
