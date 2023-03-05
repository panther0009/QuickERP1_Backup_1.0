import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutesModule } from './modules-routes.module';
import { HomeComponent } from '../Common/CommonComponent/home/home.component';
import { HeaderComponent } from '../Common/CommonComponent/Header/header.component';
import { FooterComponent } from '../Common/CommonComponent/Footer/footer.component';
import { SideBarComponent } from '../Common/CommonComponent/SideBar/sidebar.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent

  ],
  imports: [
    CommonModule,
    ModulesRoutesModule
  ]
})
export class ModulesModule { }
