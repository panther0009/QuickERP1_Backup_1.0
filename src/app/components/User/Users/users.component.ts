import { Component, OnInit } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { Model_User } from './users.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  FG_user: FormGroup;
  model = new Model_User();
  constructor(public gbl:GlbVarService,private _formBuilder: FormBuilder) { 
    console.log('UsersComponent loaded')
  }

  ngOnInit(): void {
    this.FG_user = this._formBuilder.group({
      Department: [null, Validators.required],
      'User Name': [null, Validators.required],
      'Password': [null, Validators.required],
    });

    this.gbl.InValidForm_Mess = 'Department name is required.';
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
    for (let item in this.FG_user.controls) {
      if (this.FG_user.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' name is required.';
        return
      }
    }
  }

}
