import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product: Product = new Product();
  isInCart = false;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.isInCart = this.cartService.isInCart(this.product);
  }

  addItem(): void {
    this.isInCart = true;
    this.cartService.addItem(this.product);
  }
}
