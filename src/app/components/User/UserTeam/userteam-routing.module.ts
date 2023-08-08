import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTeamComponent } from './userteam.component';

const routes: Routes = [
  {path:'', component:UserTeamComponent,
  children: [
    {path:'Add', component: UserTeamComponent},
    {path:'Edit', component: UserTeamComponent},
    {path:'Show', component: UserTeamComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTeamRoutingModule { }
