import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart-model';
import { User } from 'src/app/models/user-model';
import { CartUtil } from 'src/app/utils/cart-util';
import { Security } from 'src/app/utils/security-util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public user: User = new User('', '', '', '');
  private cart: Cart = new Cart;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = Security.getUser();
    this.loadCart();
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public quantityItems() {
    return this.cart.items.length;
  }

  logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }

}
