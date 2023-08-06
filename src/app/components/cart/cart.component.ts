import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  constructor(private readonly cartService: CartService) {}

  getTotal(): number {
    return this.cartService.total;
  }

  getItems() {
    return this.cartService.cart;
  }
}
