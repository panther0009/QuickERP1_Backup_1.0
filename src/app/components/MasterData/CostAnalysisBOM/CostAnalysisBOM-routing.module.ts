import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostAnalysisBOMComponent } from './CostAnalysisBOM.component';

const routes: Routes = [
  {path:'', component:CostAnalysisBOMComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostAnalysisBOMRoutingModule { }
