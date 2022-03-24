import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/services/cart.service';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public checkoutItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public count = 0;
    url ="https://mocki.io/v1/8d03d1a9-ac01-48c0-9230-b3f0103fe5ed";

  constructor( private cartService : CartService,private http:HttpClient) { }

  getcheckProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.checkoutItemList.push(...product);
    this.productList.next(product);
  }
  // addtoCart(product : any){
  //   this.checkoutItemList.push(product);
  //   this.productList.next(this.checkoutItemList);
  //   this.getTotalPrice();
  //   console.log(this.checkoutItemList)
  // }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.checkoutItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }

  getallTotalPrice() : number{
    let alltotle =0;
    this.checkoutItemList.map((a:any)=>{
      alltotle =a.quantity;
    })
      return alltotle;   
  }
  savecheckout(data:any){
      return this.http.post<any>("https://mocki.io/v1/8d03d1a9-ac01-48c0-9230-b3f0103fe5ed",data)
      .pipe(map((res:any)=>{
        // console.log(res);
        return res;
      }))
  }
  myConfirm(){
    // this.checkoutItemList.push();
    // this.productList.next(this.checkoutItemList);
    // this.getTotalPrice();
    // console.log(this.checkoutItemList)
    console.log("welcome")
  }
  


}
