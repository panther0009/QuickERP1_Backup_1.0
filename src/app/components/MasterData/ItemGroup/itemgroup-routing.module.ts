import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemGroupComponent } from './itemgroup.component';

const routes: Routes = [
  {path:'', component:ItemGroupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemGroupRoutingModule { }
