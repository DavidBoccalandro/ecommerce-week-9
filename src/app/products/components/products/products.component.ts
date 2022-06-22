import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as productsActions from '../../store/actions/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.getProducts());
  }
}
