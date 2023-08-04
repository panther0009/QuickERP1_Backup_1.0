import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { Model_User } from './userteam.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ServicesPathService } from 'src/app/Common/CommonTS/servicespath.service';
import { ServicesHttpService } from 'src/app/Common/CommonTS/serviceshttp.service';

@Component({
  selector: 'app-department',
  templateUrl: './userteam.component.html',
  styleUrls: ['./userteam.component.scss']
})
export class UserTeamComponent implements OnChanges, OnInit {
  FG_userteam: FormGroup;
  model = new Model_User();
  @ViewChild('stepper') stepper: MatStepper;
  DepartmentList: any;
  stepper1 :any=0;
  stepIndex :any

  constructor(public gbl: GlbVarService, private _formBuilder: FormBuilder, private path: ServicesPathService, private api: ServicesHttpService) {
    console.log('UserTeamComponent loaded')
  }

  ngOnInit(): void {
    this.FG_userteam = this._formBuilder.group({
      Department: [null, Validators.required],
      'User Team Code': [null, Validators.required],
      'User Team Name': [null, Validators.required],
      'User Team Head': [null, Validators.required],
      'Users Number': [null, Validators.required]
    });

    this.gbl.InValidForm_Mess = 'Department name is required.';
    this.gbl.getModulesDTL();
    if (this.gbl.flag_edit) {
      this.model = this.gbl.model[0];
      this.model.Action = 'UPDT';
      this.gbl.InValidForm_Mess = '';
    }
    this.gbl.flag_edit = false;
    this.gbl.model = this.model;
    this.stepIndex = 2;
    this.getDepartment();

  }

  public goBack() {
    
    this.stepper.selectedIndex = this.stepper.selectedIndex - 1;
    // this.stepper.previous();
  }

  public goForward() {
    this.stepper.selectedIndex = this.stepper.selectedIndex + 1;
    //this.stepper.next();
  }

 


  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    console.log(JSON.stringify(changes));
  }

  chk_validation() {
    this.gbl.InValidForm_Mess = '';
    for (let item in this.FG_userteam.controls) {
      if (this.FG_userteam.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' name is required.';
        return
      }
    }
  }

  getDepartment() {
    this.api.getGrid(this.path._rootApi + 'CommonApi/GetDropDownList?Action=DPRTMNT&filter=').subscribe({
      next: (res) => {
        this.DepartmentList = res;
      }
    })
  }

}
