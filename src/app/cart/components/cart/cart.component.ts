import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getCartAction,
  removeItemAction,
} from '../../store/actions/cart.action';
import { AppStateWithCart } from '../../store/reducer/cart.reducer';
import { cartSelector } from '../../store/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart!: any;

  constructor(private store: Store<AppStateWithCart>) {}

  ngOnInit(): void {
    this.store.dispatch(getCartAction());
    this.store.select(cartSelector).subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeItem(id: number) {
    let cartSlice = {
      data: {
        items: [
          {
            id: id,
            _destroy: true,
          },
        ],
      },
    };
    this.store.dispatch(removeItemAction({ item: cartSlice }));
  }
}
