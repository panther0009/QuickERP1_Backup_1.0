import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitComponent } from './unit.component';

const routes: Routes = [
  {path:'', component:UnitComponent,
  children: [
    {path:'Add', component: UnitComponent},
    {path:'Edit', component: UnitComponent},
    {path:'Show', component: UnitComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitRoutingModule { }
