import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { CheckoutService } from 'src/services/checkout.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  public alltotle !: number;
  // public counter  : number=1;
  public totalItem : number = 0;
  public counter : number=1;

  constructor(private cartService : CartService,private checkoutService : CheckoutService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.alltotle = this.cartService.getallTotalPrice();
      this.totalItem = res.length;
      
    })

  
  }

  plu(){
    this.counter+=1
 }
 inc(){
    this.counter-=1
 }
  // Confirm(){
  //   this.checkoutService.myConfirm();
  // }

//   plu(){
//     this.count=this.count+1
//  }
//  inc(){
//     this.count=this.count-1
//  }
 
  // confirm(data:any){
  //   console.warn(data)
  //    this.checkoutService.savecheckout(data).subscribe((res)=>{
  //      console.warn(res)
  //    })
  // }
}
  
  

