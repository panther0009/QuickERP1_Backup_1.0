import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSubGroupComponent } from './itemsubgroup.component';

const routes: Routes = [
  {path:'', component:ItemSubGroupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemSubGroupRoutingModule { }
