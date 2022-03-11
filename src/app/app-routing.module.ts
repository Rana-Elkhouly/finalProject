import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from, NotFoundError } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';




const routes: Routes = [
 {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'signin',component:SigninComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
