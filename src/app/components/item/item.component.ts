import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  product: Product = new Product();
  loading = false;
  isInCart = false;

  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService,
    private readonly router: Router
  ) {}

  @Input()
  set id(productId: string) {
    this.loading = true;
    this.productsService.getItem(productId).subscribe((res) => {
      this.product = res;
      this.loading = false;
      this.isInCart = this.cartService.isInCart(this.product);
    });
  }

  handleClick() {
    if (this.isInCart) {
      this.router.navigate(['cart']);
      return;
    }

    this.cartService.addItem(this.product);
    this.isInCart = true;
  }
}
