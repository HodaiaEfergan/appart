import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SearchComponent} from "./components/search/search.component";
import {AuthGuardService} from "../service/guard/auth-guard.service";
import {MainComponent} from "./components/main/main.component";

//ניווט לקומפוננטה
// const routes: Routes = [
//
//   {path: '', component: LoginComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'search', component: SearchComponent},
// ];

const routes: Routes = [

  {
    path: '', component: MainComponent, canActivate: [AuthGuardService], children: [
      {path: '', component: SearchComponent},
    ]
  },
  {path: 'login', component: LoginComponent},




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
