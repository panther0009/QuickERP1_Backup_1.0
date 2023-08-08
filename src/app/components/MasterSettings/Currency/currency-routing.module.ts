import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency.component';

const routes: Routes = [
  {path:'', component:CurrencyComponent,
  children: [
    {path:'Add', component: CurrencyComponent},
    {path:'Edit', component: CurrencyComponent},
    {path:'Show', component: CurrencyComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
