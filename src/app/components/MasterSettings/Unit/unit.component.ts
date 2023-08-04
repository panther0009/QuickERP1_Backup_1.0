import { AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { ServicesHttpService } from 'src/app/Common/CommonTS/serviceshttp.service';
import { ServicesPathService } from 'src/app/Common/CommonTS/servicespath.service';
import { Model_Unit } from './unit.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit  {
  model = new Model_Unit();
  FG_unit: FormGroup;
  
  constructor(private _formBuilder: FormBuilder,public gbl:GlbVarService, private router : Router,private path : ServicesPathService, private api : ServicesHttpService) {
  }

  ngOnInit(): void {
    this.FG_unit = this._formBuilder.group({
      'Unit Code': [null, Validators.required],
      'Unit Name': [null, Validators.required],
    });
    this.gbl.InValidForm_Mess = 'Unit Code is required.';
    this.gbl.getModulesDTL();
    if(this.gbl.flag_edit){
      this.model = this.gbl.model[0];
      this.model.Action = 'UPDT';
    }
    this.gbl.flag_edit=false;
    this.gbl.model =this.model;
    
  }

  chk_validation() {
    this.gbl.InValidForm_Mess = '';
    for (let item in this.FG_unit.controls) {
      if (this.FG_unit.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' is required.';
        return
      }
    }
  }

}
