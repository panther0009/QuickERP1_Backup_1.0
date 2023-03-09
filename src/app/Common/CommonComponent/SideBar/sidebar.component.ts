import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ServicesPathService } from '../../CommonTS/servicespath.service';
import { ServicesHttpService } from '../../CommonTS/serviceshttp.service';
import { Router } from '@angular/router';
import { Model } from './sidebar.model';
import { GlbVarService } from '../../CommonTS/Glb.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit {
  modules : any;
  public model : Model | undefined;
  
  constructor(private path : ServicesPathService, private api : ServicesHttpService,
    private router:Router,public gbl:GlbVarService) { }


  ngOnInit(): void {
    this.Module();
  }

  Module(){
    this.api.get(this.path._modules).subscribe({next:(res)=>{
        this.modules = res;
        console.log(res)
        this.model=res[4];
      },
      error:(err)=>{
        alert("Error while fetching the Records!")
      }
    })
  }

  // handleClick(subModule:any) {
  //   this.gbl.module = subModule.Sub_Module;
  //   //console.log(this.gbl.module)
  // }

}
