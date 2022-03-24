import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public alltotle !: number;
  public counter : number=1;
  

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.alltotle = this.cartService.getallTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  plu(){
     this.counter+=1
  }
  inc(){
     this.counter-=1
  }

  // increment() {
  //   this.counter += 1;
  // }

  // decrement() {
  //   this.counter -= 1;
  // }
  // public getCount() {
  //   return this.cartService.count
  // }
  // public incCount(){
  //   this.cartService.count += 1;
  // }

}


//////
// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service';
// import { Cart } from 'src/app/shared/models/Cart';
// import { CartItem } from 'src/app/shared/models/CartItem';

// @Component({
//   selector: 'app-cart-page',
//   templateUrl: './cart-page.component.html',
//   styleUrls: ['./cart-page.component.css']
// })
// export class CartPageComponent implements OnInit {
//   cart!: Cart;
//   constructor(private cartService: CartService) {
//     this.cartService.getCartObservable().subscribe((cart) => {
//       this.cart = cart;
//     })
//    }

//   ngOnInit(): void {
//   }

//   removeFromCart(cartItem:CartItem){
//     this.cartService.removeFromCart(cartItem.food.id);
//   }

//   changeQuantity(cartItem:CartItem,quantityInString:string){
//     const quantity = parseInt(quantityInString);
//     this.cartService.changeQuantity(cartItem.food.id, quantity);
//   }

// }