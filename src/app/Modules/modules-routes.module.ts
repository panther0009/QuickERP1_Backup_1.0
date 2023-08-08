import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Common/CommonComponent/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
    children:[
      {path:'dashboard', loadChildren:()=>
      import('../Common/CommonComponent/dashboard/dashboard.module').then((m)=>m.DashboardModule),},

      {path:'home', loadChildren:()=>
      import('../Common/CommonComponent/home/home.module').then((m)=>m.HomeModule),},

      //****************************************************************************************//
      //Start Master Data routing on 30/04/2023
      
      {path:'buyer', loadChildren:()=>
      import('../components/MasterData/buyer/buyer.module').then((m)=>m.BuyerModule),},
      {path:'buyerList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'vendor', loadChildren:()=>
      import('../components/MasterData/vendor/vendor.module').then((m)=>m.VendorModule),},
      {path:'vendorList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'finishedgoods', loadChildren:()=>
      import('../components/MasterData/finishedgoods/finishedgoods.module').then((m)=>m.FinishedGoodsModule),},
      {path:'finishedgoodsList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'CABOM', loadChildren:()=>
      import('../components/MasterData/CostAnalysisBOM/CostAnalysisBOM.module').then((m)=>m.CostAnalysisBOMModule),},
      {path:'CABOMList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'itemgroup', loadChildren:()=>
      import('../components/MasterData/ItemGroup/itemgroup.module').then((m)=>m.ItemGroupModule),},
      {path:'itemgroupList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'itemsubgroup', loadChildren:()=>
      import('../components/MasterData/ItemSubGroup/itemsubgroup.module').then((m)=>m.ItemSubGroupModule),},
      {path:'itemsubgroupList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      //****************************************************************************************//
      // Start master setting routing on 30/04/2023

      {path:'currency', loadChildren:()=>
      import('../components/MasterSettings/Currency/currency.module').then((m)=>m.CurrencyModule),},
      {path:'currencyList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'unit', loadChildren:()=>
      import('../components/MasterSettings/Unit/unit.module').then((m)=>m.UnitModule),},
      {path:'unitList',  loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'itemcategory', loadChildren:()=>
      import('../components/MasterSettings/ItemCategory/itemcategory.module').then((m)=>m.ItemCategoryModule),},
      {path:'itemcategoryList',  loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'itemsubcategory', loadChildren:()=>
      import('../components/MasterSettings/ItemSubCategory/itemsubcategory.module').then((m)=>m.ItemSubCategoryModule),},
      {path:'itemsubcategoryList',  loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},


      //****************************************************************************************//
      //Start User management routing on 30/04/2023

      {path:'users', loadChildren:()=>
      import('../components/User/Users/users.module').then((m)=>m.UserModule),},
      {path:'usersList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'allowuserList',  loadChildren:()=>
      import('../components/User/AllowUser/allowuser.module').then((m)=>m.AllowUserModule),},

      {path:'department',  loadChildren:()=>
      import('../components/User/Department/department.module').then((m)=>m.DepartmentModule),},
      {path:'departmentList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},

      {path:'userteam',  loadChildren:()=>
      import('../components/User/UserTeam/userteam.module').then((m)=>m.UserTeamModule),},
      {path:'userteamList', loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},
      
      //****************************************************************************************//
      // Start  CRM routing on 05/05/2023

      {path:'CRM', loadChildren:()=>
      import('../components/CRM/CRM/crm.module').then((m)=>m.CRMModule),},
      {path:'CRMList',  loadChildren:()=>
      import('../Common/CommonComponent/grid/grid.module').then((m)=>m.GridModule),},
    
      //{path:'', redirectTo:'/dashboard',pathMatch:'full'},
      // {path:'services', component:ServicesComponent},
      // {path:'contact', component:ContactComponent},
      //{path:'',redirectTo:'../Common/CommonComponent/home',pathMatch:'full'},
      {path:'**', loadChildren:()=>
      import('../Common/CommonComponent/not-found/not-found.module').then((m)=>m.NotFoundModule),},
    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutesModule { }
