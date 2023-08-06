import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private readonly cartService: CartService) {}

  getTotal(): number {
    return this.cartService.total;
  }

  getItems() {
    return this.cartService.cart;
  }

  increaseItem(id: string): void {
    this.cartService.increaseItem(id);
  }

  decreaseItem(id: string): void {
    this.cartService.decreaseItem(id);
  }

  removeItem(id: string): void {
    this.cartService.removeItem(id);
  }
}
