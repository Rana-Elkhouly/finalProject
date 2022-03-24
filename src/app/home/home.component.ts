import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  img1="https://disdpbee9u48n.cloudfront.net/png/food.png"
  img2="https://disdpbee9u48n.cloudfront.net/png/food.png"
  img3="https://disdpbee9u48n.cloudfront.net/img/icon_home_1.svg"

  ngOnInit(): void {
  }


       //this is a variable that hold number
       projectcount:number = 0;
       //same process
       accuratecount:number = 0;
       clientcount:number = 0;
      customerfeedback:number = 0;

    //we have created setinterval function with arrow function and
    //and set them in a variable that is projectcountstop.
    projectcountstop:any = setInterval(()=>{
      this.projectcount++;
      //we need to stop this at  particular point; will use if condition
      if(this.projectcount ==250)
      {
        //clearinterval will stop tha function
        clearInterval(this.projectcountstop);
      }

    },10) //10 is milisecond you can control it


    accuratecountstop:any = setInterval(()=>{
      this.accuratecount++;
      if(this.accuratecount == 97)
      {
        
        clearInterval(this.accuratecountstop);
      }
    },10) 


    clientcountstop:any = setInterval(()=>{
      this.clientcount++;
      if(this.clientcount == 350)
      {
        
        clearInterval(this.clientcountstop);
      }
    },10)

    customerfeedbackstop:any = setInterval(()=>{
      this.customerfeedback++;
      if(this.customerfeedback == 100)
      {
        
        clearInterval(this.customerfeedbackstop);
      }
    },10)

    //conclusion: we have use
    //string interpolation
    //setInterval function
    //()=> arrow function
    //clearInterval 
    //creating variable



}













