import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cart: Product[] | any = [1];
  cartSubscription: Subscription | null = null;
  isLoadingCartInfo = true;
  error: string | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartGet().subscribe({
      next: (product) => {
        this.cart = product;
        this.isLoadingCartInfo = false;
        this.error = null;
      },
      error: (error) => {
        this.isLoadingCartInfo = false;
        this.error = error;
      },
      complete: () => {
        this.isLoadingCartInfo = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }
}
