import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishedGoodsComponent } from './finishedgoods.component';

const routes: Routes = [
  {path:'', component:FinishedGoodsComponent,
  children: [
    {path:'Add', component: FinishedGoodsComponent},
    {path:'Edit', component: FinishedGoodsComponent},
    {path:'Show', component: FinishedGoodsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinishedGoodsRoutingModule { }
