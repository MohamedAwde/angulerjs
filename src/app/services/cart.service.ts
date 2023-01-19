import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor(private http: HttpClient) {}

  cartAdd(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  cartGet() {
    return this.http.get<Product[]>('http://localhost:3000/cart');
  }
}
