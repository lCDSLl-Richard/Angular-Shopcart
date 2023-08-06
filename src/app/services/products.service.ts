import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  fetchItems(): Observable<Product[]> {
    return this.http.get<Product[]>(url);
  }

  getItem(id: string): Observable<Product> {
    return this.http.get<Product>(`${url}/${id}`);
  }
}
