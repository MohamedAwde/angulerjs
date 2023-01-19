import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent implements OnInit {
  products: Product[] | null = null;
  productsSubscription?: Subscription;
  productAddingToCart?: Subscription;
  isLoadingProducts = true;
  isAddingToCart = true;
  error: string | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsSubscription = this.productsService.productsGet().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoadingProducts = false;
        this.error = null;
      },
      error: (error) => {
        this.isLoadingProducts = false;
        this.error = error;
      },
      complete: () => {
        this.isLoadingProducts = false;
      },
    });
  }

  productAddCart(product: Product) {
    this.productsService.productAddCart(product).subscribe({
      next: (_res) => {
        this.isAddingToCart = false;
        this.error = null;
      },
      error: (error) => {
        this.isAddingToCart = false;
        this.error = error;
      },
      complete: () => {
        this.isAddingToCart = false;
      },
    });
  }
}
