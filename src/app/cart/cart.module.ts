import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, MatCardModule],
})
export class CartModule {}
