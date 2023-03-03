import { Component } from '@angular/core';
import { Cart } from '../../../../../../frontend/src/app/shared/models/Cart';
import { CartItem } from '../../../../../../frontend/src/app/shared/models/CartItem';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  public removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  public changeQuantity(cartItem: CartItem, quantityInString: string): void {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
