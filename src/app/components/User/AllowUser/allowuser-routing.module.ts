import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllowUserComponent } from './allowuser.component';

const routes: Routes = [
  {path:'', component:AllowUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllowUserRoutingModule { }
