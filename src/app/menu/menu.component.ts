import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/services/api.service"
import {CartService} from "src/services/cart.service"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public productList : any ;
  public filterCategory : any;
   public categorys :any=[];
   public filtecategorys :any

  //public categorys : any =["All","sweets","meals","cakes","Casseroles"];
  constructor(private api : ApiService, private CartService : CartService) { }

  
  ngOnInit(): void {

    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.categry ==="All" || a.categry ==="All"){
          a.categry ="All"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
    // this.cartService.search.subscribe((val:any)=>{
    //   this.searchKey = val;
    // })


    this.api.getcategory()

      .subscribe(res=>{
        console.log(res);
       this.categorys=res.category
       console.log(this.categorys);
       console.log(typeof res);
      })
    
  }

    addtocart(item: any){
      this.CartService.addtoCart(item);
    }
    
    filter(categry:string){
      this.filterCategory = this.productList
      .filter((a:any)=>{
        if(a.categry == categry || categry=='All'){
          return a;
        }
      })
    }

    


    
  



  }
