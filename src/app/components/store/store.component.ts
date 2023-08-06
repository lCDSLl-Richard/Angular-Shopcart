import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  loading = false;

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit() {
    this.loading = true;
    this.productsService.fetchItems().subscribe((res) => {
      this.loading = false;
      this.products = res;
    });
  }
}
