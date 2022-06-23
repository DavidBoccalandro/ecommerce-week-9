import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { productsSelector } from '../../selectors/products.selectors';
import * as productsActions from '../../store/actions/products.action';
import { AppStateWithProducts } from '../../store/reducer/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: any;

  constructor(private store: Store<AppStateWithProducts>) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.getProducts());

    this.store.select(productsSelector).subscribe((products) => {
      this.products = products;
      console.log('Solo products', products);
      console.log('Con THIS', this.products);
    });
  }
}
