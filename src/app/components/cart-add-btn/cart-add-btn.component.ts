import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-add-btn',
  templateUrl: './cart-add-btn.component.html',
  styleUrls: ['./cart-add-btn.component.css'],
})
export class CartAddBtnComponent {
  @Input('addCart') addCart!: void;

  addToCart() {
    console.log('adding product to the cart');
  }
}
