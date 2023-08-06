import { Component, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { CartProduct } from 'src/app/interfaces/cart-product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() item: CartProduct = { ...new Product(), amount: 0 };

  constructor(private readonly cartService: CartService) {}

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
