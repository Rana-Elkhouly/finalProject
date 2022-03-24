import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://mocki.io/v1/e1889e3c-60e8-4ee2-8c75-df0ba0595cc9")
    .pipe(map((res:any)=>{
      
      return res;
    }))
  }


  getcategory(){
    return this.http.get<any>("https://mocki.io/v1/92d3c290-83ba-4417-aac2-23180e6a0136")
    .pipe(map((res:any)=>{
      // console.log(res);
      return res;
    }))
  }


  getcheckout(){
    return this.http.get<any>("https://mocki.io/v1/92d3c290-83ba-4417-aac2-23180e6a0136")
    .pipe(map((res:any)=>{
      // console.log(res);
      return res;
    }))
  }





}
// ("https://mocki.io/v1/e1889e3c-60e8-4ee2-8c75-df0ba0595cc9")