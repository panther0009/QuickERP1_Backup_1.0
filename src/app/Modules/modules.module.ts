//****************************************************************************************//
//Based import//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutesModule } from './modules-routes.module';

//****************************************************************************************//
//API reference for Angular Material//
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
//import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { ModuleHeaderComponent } from '../Common/CommonComponent/moduleheader/moduleheader.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

//****************************************************************************************//
//Popup reference for ERP Project//
import { ConfirmPopupComponent } from '../Common/CommonComponent/PopUp/deleteConfirmPopup/confirmPopup.component';

//****************************************************************************************//
//Componenet reference for ERP Project//
import { AllowUserComponent } from '../components/User/AllowUser/allowuser.component';
import { UsersComponent } from '../components/User/Users/users.component';
import { CurrencyComponent } from '../components/MasterSettings/Currency/currency.component';
import { UnitComponent } from '../components/MasterSettings/Unit/unit.component';
import { DepartmentComponent } from '../components/User/Department/department.component';
import { UserTeamComponent } from '../components/User/UserTeam/userteam.component';
import { HomeComponent } from '../Common/CommonComponent/home/home.component';
import { HeaderComponent } from '../Common/CommonComponent/Header/header.component';
import { FooterComponent } from '../Common/CommonComponent/Footer/footer.component';
import { SideBarComponent } from '../Common/CommonComponent/SideBar/sidebar.component';
import { BuyerComponent } from '../components/MasterData/buyer/buyer.component';
import { VendorComponent } from '../components/MasterData/vendor/vendor.component';
import { GridComponent } from '../Common/CommonComponent/grid/grid.component';
import { DashboardComponent } from '../Common/CommonComponent/dashboard/dashboard.component';
import { CRMComponent } from '../components/CRM/CRM/crm.component';
import { ItemGroupComponent } from '../components/MasterData/ItemGroup/itemgroup.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemSubGroupComponent } from '../components/MasterData/ItemSubGroup/itemsubgroup.component';
import { ItemCategoryComponent } from '../components/MasterSettings/ItemCategory/itemcategory.component';
import { ItemSubCategoryComponent } from '../components/MasterSettings/ItemSubCategory/itemsubcategory.component';
import { FinishedGoodsComponent } from '../components/MasterData/finishedgoods/finishedgoods.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    GridComponent,
    DashboardComponent,
    BuyerComponent,
    VendorComponent,
    ModuleHeaderComponent,
    AllowUserComponent,
    UsersComponent,
    CurrencyComponent,
    ConfirmPopupComponent,
    UnitComponent,
    DepartmentComponent,
    UserTeamComponent,
    CRMComponent,
    ItemGroupComponent,
    ItemSubGroupComponent,
    ItemCategoryComponent,
    ItemSubCategoryComponent,
    FinishedGoodsComponent

  ],
  imports: [
    CommonModule,
    ModulesRoutesModule,
    MatButtonModule,
    NgbModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    DragDropModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    //MatSortModule
    MatExpansionModule,
    FormsModule,
    MatStepperModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    FlexLayoutModule
  ],
  providers: [UserTeamComponent],
  
})
export class ModulesModule { }
