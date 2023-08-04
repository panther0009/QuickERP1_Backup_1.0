import { AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { ServicesHttpService } from 'src/app/Common/CommonTS/serviceshttp.service';
import { ServicesPathService } from 'src/app/Common/CommonTS/servicespath.service';
import { Model_User } from './crm.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CRMComponent implements OnInit  {
  model = new Model_User();
  FG_userteam:  FormGroup;
  

  constructor(public gbl:GlbVarService,private _formBuilder: FormBuilder, private router : Router,private path : ServicesPathService, private api : ServicesHttpService) {
  }

  ngOnInit(): void {
    this.FG_userteam = this._formBuilder.group({ 
      department : [null, Validators.required],
      team_code : [null,Validators.required],
      team_name : [null,Validators.required],
      team_head : [null,Validators.required],
      users_number : [null,Validators.required]
    });
    
    this.gbl.getModulesDTL();
    if(this.gbl.flag_edit){
      this.model = this.gbl.model[0];
      this.model.Action = 'UPDT';
    }
    this.gbl.flag_edit=false;
    this.gbl.model =this.model;
  }

}
