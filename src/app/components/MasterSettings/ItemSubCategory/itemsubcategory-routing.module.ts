import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemSubCategoryComponent } from './itemsubcategory.component';

const routes: Routes = [
  {path:'', component:ItemSubCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemSubCategoryRoutingModule { }
