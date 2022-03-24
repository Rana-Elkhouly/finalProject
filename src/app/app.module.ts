import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
// import { MenuComponent } from './menu/menu.component';
//import { SigninComponent } from './signin/signin.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { SweetsComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
// import { CasserolesComponent } from './casseroles/casseroles.component';
// import { MealsComponent } from './meals/meals.component';
// import { CakesComponent } from './cakes/cakes.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';


import { CheckoutComponent } from './checkout/checkout.component';
//import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    MenuComponent,
  
   // SigninComponent,
       NotfoundComponent,
      //  SweetsComponent,
      //  CasserolesComponent,
      //  MealsComponent,
      //  CakesComponent,
       CartComponent,
       MenuComponent,
     
  
       CheckoutComponent,
      //RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
