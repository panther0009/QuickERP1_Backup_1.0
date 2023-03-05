import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/User/login/login.component';
import { ForgotpasswordComponent } from '../components/User/forgotpassword/forgotpassword.component';
import { NotFoundComponent } from '../components/User/not-found/not-found.component';
import { HomeComponent } from '../Common/CommonComponent/home/home.component';
import { GuardGuard } from '../myGuard/guard.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forgot-password', component:ForgotpasswordComponent},
  //{path:'Home', component:HomeComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'Home', 
  canActivate:[GuardGuard],
  loadChildren:()=>
  import('../Modules/modules.module').then((m)=>m.ModulesModule),},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
