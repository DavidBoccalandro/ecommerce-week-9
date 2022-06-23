import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { ProductCartResponse } from '../interfaces/product-cart-response.interface';
import { ProductsResponse } from '../interfaces/products-response.interface';

@Injectable()
export class ProductsService {
  url: string = environment.url;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  getProducts() {
    return this.http
      .get<ProductsResponse>(
        `${this.url}/products?include=image_attachment.blob,category,master`
      )
      .pipe(
        tap((res: ProductsResponse) => {
          this.localStorage.setItem('products', JSON.stringify(res));
          this.router.navigate(['home/products']);
        }),
        catchError((error: Response) => {
          throw error;
        })
      );
  }

  addProductToCart(body: any) {
    return this.http.post<ProductCartResponse>(`${this.url}/cart`, body, {
      headers: {
        Authorization: `Bearer ${this.localStorage.getItem('token')}`,
      },
    });
  }
}
