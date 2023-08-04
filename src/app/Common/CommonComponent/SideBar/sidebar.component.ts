import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ServicesPathService } from '../../CommonTS/servicespath.service';
import { ServicesHttpService } from '../../CommonTS/serviceshttp.service';
import { Router } from '@angular/router';
import { Model } from './sidebar.model';
import { GlbVarService } from '../../CommonTS/Glb.service';
import { MatExpansionPanel } from '@angular/material/expansion';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class SideBarComponent implements OnInit {
  modules: any;
  public model: Model | undefined;
  search: string = '';
  flag_icon: boolean = false;
  flag_route: boolean = false;

  constructor(private path: ServicesPathService, private api: ServicesHttpService,
    private router: Router, public gbl: GlbVarService) { }


  ngOnInit(): void {
    this.Module();
    //this.gbl.flag_save = false;
  }

  Module() {
    this.api.get(this.path._modules + '?Username=h&filter=' + this.search).subscribe({
      next: (res) => {
        this.modules = res;
      },
      error: (err) => {
        alert("Error while fetching the Records!")
      }
    })
  }

  onSearchChange(): void {
    console.log(this.search);
    if (this.search.length > 0) {
      this.flag_icon = true;
    }
    else {
      this.flag_icon = false;
    }
    this.Module();
  }

  clear_search() {
    this.search = '';
    this.flag_icon = false;
    this.Module();
  }
  openGrid() {
    this.gbl.flag_save = false;
    this.gbl.SideHeight = this.gbl.MainHeight = window.innerHeight - 92;
  }

  isActive(url: any): boolean {
    return this.router.url.includes(url);
  }

  dashboard() {
    this.gbl.module = 'Dashboard';
    this.gbl.icon = 'dashboard';
    this.gbl.controller = 'dashboard';
    this.gbl.API_Name = 'DashboardApi';
  }

}
