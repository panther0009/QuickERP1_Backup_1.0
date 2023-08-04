import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTeamComponent } from './userteam.component';

const routes: Routes = [
  {path:'', component:UserTeamComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTeamRoutingModule { }
