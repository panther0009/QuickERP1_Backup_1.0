import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/User/login/login.component';
import { NotFoundComponent } from '../Common/CommonComponent/not-found/not-found.component';
import { ServicesHttpService } from '../Common/CommonTS/serviceshttp.service';
import { ServicesPathService } from '../Common/CommonTS/servicespath.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Material imports here
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
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
    MatExpansionModule,
    MatSidenavModule,
    BrowserAnimationsModule
   
  ],
  providers: [HttpClient,ServicesHttpService,ServicesPathService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { } 
