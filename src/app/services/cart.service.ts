import { Injectable, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { Subject } from 'rxjs';
import { CartProduct } from '../interfaces/cart-product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cart: CartProduct[] = [];
  cartLength = new Subject<number>();

  constructor() {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    (savedCart as CartProduct[]).forEach((product) => {
      this.cart.push(product);
    });
  }

  addItem(product: Product): void {
    this.cart.push({ ...product, amount: 1 });
    this.cartLength.next(this.cart.length);
    this.saveCart();
  }

  increaseItem(id: string): void {
    this.cart.find((cartProduct) => cartProduct.id === id)!.amount++;
    this.saveCart();
  }

  decreaseItem(id: string): void {
    const item = this.cart.find((cartProduct) => cartProduct.id === id);
    item!.amount > 1 && item!.amount--;
    this.saveCart();
  }

  removeItem(id: string): void {
    const item = this.cart.find((cartProduct) => cartProduct.id === id);
    this.cart.splice(this.cart.indexOf(item!), 1);
    this.saveCart();
  }

  isInCart(product: Product): boolean {
    return this.cart.some((cartProduct) => cartProduct.id === product.id);
  }

  updateCartLength(): void {
    this.cartLength.next(this.cart.length);
  }

  get total(): number {
    return this.cart.reduce((acum, cartProduct) => {
      return acum + cartProduct.amount * cartProduct.price;
    }, 0);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartLength();
  }
}
