import { Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesHttpService } from './serviceshttp.service';
import { ServicesPathService } from './servicespath.service';
import { MatStepper } from '@angular/material/stepper';

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

  constructor(private router: Router, private path: ServicesPathService, private api: ServicesHttpService) {
  }

  ngOnInit(): void {


  }

  getModulesDTL() {
    this.flag_save = true;
    this.MainHeight = window.innerHeight - 146;
    this.href = this.router.url;
    this.url = this.href.substring(this.href.lastIndexOf("/") + 1, 50);
    this.api.getModulesDTL(this.path._modulesDTL + '?controller=' + this.url).subscribe({
      next: (res) => {
        this.module = res[0].Sub_Module;
        this.icon = res[0].icon;
        this.controller = res[0].controller;
        this.API_Name = res[0].API_Name;
      },
      error: (err) => {
        alert("Error while fetching the Records!")
      }
    })
  }
}
