import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorComponent } from './vendor.component';

const routes: Routes = [
  {path:'', component:VendorComponent,
  children: [
    {path:'Add', component: VendorComponent},
    {path:'Edit', component: VendorComponent},
    {path:'Show', component: VendorComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
