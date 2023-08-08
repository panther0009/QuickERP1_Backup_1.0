import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemGroupComponent } from './itemgroup.component';

const routes: Routes = [
  {path:'', component:ItemGroupComponent,
  children: [
    {path:'Add', component: ItemGroupComponent},
    {path:'Edit', component: ItemGroupComponent},
    {path:'Show', component: ItemGroupComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemGroupRoutingModule { }
