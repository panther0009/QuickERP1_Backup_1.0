import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/User/login/login.component';
import { ForgotpasswordComponent } from '../components/User/forgotpassword/forgotpassword.component';
import { NotFoundComponent } from '../components/User/not-found/not-found.component';
import { GridComponent } from '../Common/CommonComponent/grid/grid.component';
import { ServicesHttpService } from '../Common/CommonTS/serviceshttp.service';
import { ServicesPathService } from '../Common/CommonTS/servicespath.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    NotFoundComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    
    MatButtonModule,
    NgbModule,
    FontAwesomeModule
   
  ],
  providers: [HttpClient,ServicesHttpService,ServicesPathService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
