import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCartResponse } from 'src/app/products/interfaces/product-cart-response.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class CartService {
  url: string = environment.url;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getCart() {
    return this.http.get<ProductCartResponse>(`${this.url}/cart`, {
      headers: {
        Authorization: `Bearer ${this.localStorage.getItem('token')}`,
      },
    });
  }

  removeItem(item: ProductCartResponse) {
    return this.http.put<ProductCartResponse>(`${this.url}/cart`, item, {
      headers: {
        Authorization: `Bearer ${this.localStorage.getItem('token')}`,
      },
    });
  }
}
