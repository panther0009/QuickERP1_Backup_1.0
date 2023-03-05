import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Common/CommonComponent/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'home',component:HomeComponent},
    // {path:'about', component:AboutComponent},
    // {path:'services', component:ServicesComponent},
    // {path:'contact', component:ContactComponent},
    {path:'',redirectTo:'../Common/CommonComponent/home',pathMatch:'full'},
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutesModule { }
