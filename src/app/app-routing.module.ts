import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from, NotFoundError } from 'rxjs';

import { AboutComponent } from './about/about.component';
// import { CakesComponent } from './cakes/cakes.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

// import { CasserolesComponent } from './casseroles/casseroles.component';
 import { HomeComponent } from './home/home.component';
// import { MealsComponent } from './meals/meals.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
//import { SigninComponent } from './signin/signin.component';
// import { SweetsComponent } from './menu/menu.component';
//import { RegisterComponent } from './register/register.component';



const routes: Routes = [
 {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  // {path:'menu',component:MenuComponent},
//  {path:'Casseroles',component:CasserolesComponent},
//  {path:'cakes',component:CakesComponent},
//  {path:'Meals',component:MealsComponent},
  {path:'menu',component:MenuComponent},
  //{path:'signin',component:SigninComponent},
  {path:'cart',component:CartComponent},
  {path:"checkout",component:CheckoutComponent},

  //{path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
