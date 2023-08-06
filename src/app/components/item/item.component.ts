import { Component, Input } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  product: Product = new Product();
  loading = false;

  constructor(private readonly productsService: ProductsService) {}

  @Input()
  set id(productId: string) {
    this.loading = true;
    this.productsService.getItem(productId).subscribe((res) => {
      this.product = res;
      this.loading = false;
    });
  }
}
