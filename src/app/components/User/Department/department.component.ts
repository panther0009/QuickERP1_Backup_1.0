import { Component, OnInit } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { Model_User } from './department.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  FG_department: FormGroup;
  model = new Model_User();
  constructor(public gbl:GlbVarService,private _formBuilder: FormBuilder) { 
    console.log('DepartmentComponent loaded')
  }

  ngOnInit(): void {
    this.FG_department = this._formBuilder.group({
      'Department Code': [null, Validators.required],
      'Department Name': [null, Validators.required],
      'Department Head': [null, Validators.required],
      'Users Number': [null],
    });
    this.gbl.InValidForm_Mess = 'Department Code is required.';
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
    for (let item in this.FG_department.controls) {
      if (this.FG_department.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' is required.';
        return
      }
    }
  }

}
