import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { Model_FinishedGoods } from './finishedgoods.model';
import { ServicesPathService } from 'src/app/Common/CommonTS/servicespath.service';
import { ServicesHttpService } from 'src/app/Common/CommonTS/serviceshttp.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './finishedgoods.component.html',
  styleUrls: ['./finishedgoods.component.scss']
})
export class FinishedGoodsComponent implements OnInit {
  FG_userteam: FormGroup;
  model = new Model_FinishedGoods();
  @ViewChild('stepper') stepper: MatStepper;
  DepartmentList: any;
  stepper1 :any=0;
  stepIndex :any
  ItemSubCategoryList: any;
  ItemCategoryList: any;
  ItemSubGroupList: any;
  ItemGroupList: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(public gbl:GlbVarService, private _formBuilder: FormBuilder, private path: ServicesPathService, private api: ServicesHttpService) { }

  ngOnInit(): void {
    this.FG_userteam = this._formBuilder.group({
      'Item Code': [null, Validators.required],
      'Old Item Code': [null],
      'Sample Item Code': [null],
      'Item Name': [null, Validators.required],
      'Sub Item Name 1':[null], 'Sub Item Name 2':[null], 'Sub Item Name 3':[null],
      'Sub Item Name 4':[null],
      'Item Group':[null, Validators.required], 'Item Sub Group':[null, Validators.required],
      'Item Category':[null],'Item sub Category':[null],
      'Brand':[null], 'Color Finish':[null],
      'Bar Code Name':[null], 'Minimum Quantity':[null]    
    });

    this.gbl.InValidForm_Mess = 'Item Code is required.';
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
    this.getItemGroup();
    this.getItemSubGroup();
    this.getItemCategory();
    this.getItemSubCategory();
  }

  getDepartment() {
    this.api.getGrid(this.path._rootApi + 'CommonApi/GetDropDownList?Action=DPRTMNT&filter=').subscribe({
      next: (res) => {
        this.DepartmentList = res;
      }
    })
  }

  chk_validation() {
    this.gbl.InValidForm_Mess = '';
    for (let item in this.FG_userteam.controls) {
      if (this.FG_userteam.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' is required.';
        return
      }
    }
  }

  public goBack() {
    this.stepper.selectedIndex = this.stepper.selectedIndex - 1;
  }

  public goForward() {
    this.stepper.selectedIndex = this.stepper.selectedIndex + 1;
  }
  getItemGroup() {
    this.api.getGrid(this.path._rootApi + 'CommonApi/GetDropDownList?Action=ITMG&filter=').subscribe({
      next: (res) => {
        this.ItemGroupList = res;
      }
    })
  }
  getItemSubGroup() {
    this.api.getGrid(this.path._rootApi + 'CommonApi/GetDropDownList?Action=ITMSG&filter=').subscribe({
      next: (res) => {
        this.ItemSubGroupList = res;
      }
    })
  }
  getItemCategory() {
    this.api.getGrid(this.path._rootApi + 'CommonApi/GetDropDownList?Action=ITMC&filter=').subscribe({
      next: (res) => {
        this.ItemCategoryList = res;
      }
    })
  }
  getItemSubCategory() {
    this.api.getGrid(this.path._rootApi + 'CommonApi/GetDropDownList?Action=ITMSC&filter=').subscribe({
      next: (res) => {
        this.ItemSubCategoryList = res;
      }
    })
  }

}
