import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlbVarService } from '../../CommonTS/Glb.service';
import { ServicesHttpService } from '../../CommonTS/serviceshttp.service';
import { ServicesPathService } from '../../CommonTS/servicespath.service';
import { Model_Modules } from './grid.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public href: string = "";
  public model: Model_Modules = new Model_Modules;
  displayedColumns: string[] = ['productnName', 'category', 'fresshness', 'price','comment','date' , 'Action'];
  dataSource!: MatTableDataSource<any>;
  icon_module:string='';
  name_module:string='';
  url:string='';
  controller='';

  constructor(private router : Router,public gbl:GlbVarService,private path : ServicesPathService, private api : ServicesHttpService) { 
    this.href = this.router.url;
    this.url =this.href.substring(this.href.lastIndexOf("/")+1,50)
  }

  ngOnInit(): void {
    this.getModulesDTL();
  }

  getModulesDTL(){
    this.api.getModulesDTL(this.path._modulesDTL+'?controller='+this.url).subscribe({next:(res)=>{
        
        this.name_module=this.gbl.module=res[0].Sub_Module;
        this.icon_module =this.gbl.icon= res[0].icon;
        this.controller =this.gbl.controller= res[0].controller;

        console.log(this.gbl.module);
      },
      error:(err)=>{
        alert("Error while fetching the Records!")
      }
    })
  }

}
