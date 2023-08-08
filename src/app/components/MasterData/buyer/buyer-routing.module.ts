import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer.component';

const routes: Routes = [
  {
    path: '', component: BuyerComponent,
    children: [
      {path:'Add', component: BuyerComponent},
      {path:'Edit', component: BuyerComponent},
      {path:'Show', component: BuyerComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
