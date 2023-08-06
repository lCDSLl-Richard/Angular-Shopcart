import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'fakeStore';
  cartLength = 0;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartLength.subscribe((newLength) => {
      this.cartLength = newLength;
    });
    this.cartService.updateCartLength();
  }
}
