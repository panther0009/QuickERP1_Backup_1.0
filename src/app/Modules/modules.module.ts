import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutesModule } from './modules-routes.module';
import { HomeComponent } from '../Common/CommonComponent/home/home.component';
import { HeaderComponent } from '../Common/CommonComponent/Header/header.component';
import { FooterComponent } from '../Common/CommonComponent/Footer/footer.component';
import { SideBarComponent } from '../Common/CommonComponent/SideBar/sidebar.component';
//Material imports here
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
import { GridComponent } from '../Common/CommonComponent/grid/grid.component';
import { DashboardComponent } from '../Common/CommonComponent/dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BuyerComponent } from '../components/MasterData/buyer/buyer.component';
import { VendorComponent } from '../components/MasterData/vendor/vendor.component';
//import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    GridComponent,
    DashboardComponent,
    BuyerComponent,
    VendorComponent

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
  ]
})
export class ModulesModule { }
