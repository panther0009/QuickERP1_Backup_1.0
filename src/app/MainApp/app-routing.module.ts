import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/User/login/login.component';
import { GuardGuard } from '../myGuard/guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'forgot-password', loadChildren: () =>
      import('../components/User/forgotpassword/forgotpassword.module').then((m) => m.ForgotPasswordModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [GuardGuard],
    loadChildren: () =>
      import('../Modules/modules.module').then((m) => m.ModulesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
