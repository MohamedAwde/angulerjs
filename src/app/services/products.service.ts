import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  productAddCart(product: Product): Observable<Product> {
    return this.cartService.cartAdd(product);
  }

  productsGet(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
}
