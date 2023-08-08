import { Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesHttpService } from './serviceshttp.service';
import { ServicesPathService } from './servicespath.service';
import { MatStepper } from '@angular/material/stepper';
import { commonMETHODS } from '../CommonComponent/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlbVarService {
  module: string = 'Dashboard';
  icon: string = 'dashboard';
  controller: string = 'dashboard';
  toggle: boolean = true;
  toggleWidth: number = 80;
  public href: string = "";
  url: string = '';
  API_Name: string = 'DashboardApi';
  model: any;
  flag_save: boolean = false;
  flag_edit: boolean = false;
  SaveCaption: string = 'Save';
  mode: boolean = true;
  InValidForm_Mess: string = '';
  @ViewChild('stepper') stepper: MatStepper;
  SideHeight: number = window.innerHeight - 92;
  MainHeight: number = window.innerHeight - 92;
  dateFormat:string='yyyy/MM/dd'
  
  constructor(private router: Router, private path: ServicesPathService, 
    private http:HttpClient) {
      //this.getModulesDTL();
      console.log('loading')
      this.loadservice1();  

      console.log('loaded')
  }
  loadservice1() {
    let a = this.get('./assets/testjson/abc.json').toPromise()
    console.log(a)
    
  }

  public get(controller: any): Observable<any> {
    return this.http.get<any>(controller);
  }
  
  ngOnInit(): void {

  }

  getModulesDTL() {
    // this.flag_save = true;
    // this.MainHeight = window.innerHeight - 146;
    // this.href = this.router.url;
    // this.url = this.href.substring(6,this.href.lastIndexOf("/"));
    // this.api.getModulesDTL(this.path._modulesDTL + '?controller=' + this.url).subscribe({
    //   next: (res) => {
    //     this.module = res[0].Sub_Module;
    //     this.icon = res[0].icon;
    //     this.controller = res[0].controller;
    //     this.API_Name = res[0].API_Name;
    //   },
    //   error: (err) => {
    //     alert("Error while fetching the Records!")
    //   }
    // })
  }
}
