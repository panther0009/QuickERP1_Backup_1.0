import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCategoryComponent } from './itemcategory.component';

const routes: Routes = [
  {path:'', component:ItemCategoryComponent,
  children: [
    {path:'Add', component: ItemCategoryComponent},
    {path:'Edit', component: ItemCategoryComponent},
    {path:'Show', component: ItemCategoryComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCategoryRoutingModule { }
