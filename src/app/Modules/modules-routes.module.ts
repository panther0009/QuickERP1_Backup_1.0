import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Common/CommonComponent/home/home.component';
import { GridComponent } from '../Common/CommonComponent/grid/grid.component';
import { NotFoundComponent } from '../Common/CommonComponent/not-found/not-found.component';
import { DashboardComponent } from '../Common/CommonComponent/dashboard/dashboard.component';
import { BuyerComponent } from '../components/MasterData/buyer/buyer.component';
import { VendorComponent } from '../components/MasterData/vendor/vendor.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'home',component:HomeComponent},
    {path:'buyerList', component:GridComponent},
    {path:'vendorList', component:GridComponent},
    {path:'buyer', component:BuyerComponent},
    {path:'vendor', component:VendorComponent},
    //{path:'', redirectTo:'/dashboard',pathMatch:'full'},
    // {path:'services', component:ServicesComponent},
    // {path:'contact', component:ContactComponent},
    //{path:'',redirectTo:'../Common/CommonComponent/home',pathMatch:'full'},
    {path:'**', component:NotFoundComponent},
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutesModule { }
