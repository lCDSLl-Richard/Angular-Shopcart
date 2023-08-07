import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  productName = '';
  selectedCategory = '';
  categories: string[] = [];
  loading = false;

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit() {
    this.loading = true;
    this.productsService.fetchItems().subscribe((res) => {
      this.loading = false;
      this.products = res;
      this.filteredProducts = res;
      this.categories = [...new Set(res.map((item) => item.category))];
    });
  }

  filter() {
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.productName.toLowerCase())
    );
    console.log(this.selectedCategory);
    this.filteredProducts = this.filteredProducts.filter(
      (product) =>
        !this.selectedCategory || product.category === this.selectedCategory
    );
  }
}
