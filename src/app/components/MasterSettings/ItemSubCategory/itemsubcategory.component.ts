import { Component, OnInit } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { Model_ItemSubCategory } from './itemsubcategory.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-itemsubcategory',
  templateUrl: './itemsubcategory.component.html',
  styleUrls: ['./itemsubcategory.component.scss']
})
export class ItemSubCategoryComponent implements OnInit {
  model = new Model_ItemSubCategory();
  FG_itemSubCategory: FormGroup;

  constructor(private _formBuilder: FormBuilder, public gbl:GlbVarService) { }

  ngOnInit(): void {
    this.FG_itemSubCategory = this._formBuilder.group({
      'Item Sub Category Code': [null, Validators.required],
      'Item Sub Category Name': [null, Validators.required],
    });
    this.gbl.InValidForm_Mess = 'Item Sub Category Code is required.';
     this.gbl.getModulesDTL();
    if(this.gbl.flag_edit){
      this.model = this.gbl.model[0];
      this.model.Action = 'UPDT';
    }
    //this.gbl.flag_edit=false;
    this.gbl.model =this.model;
  }

  chk_validation() {
    this.gbl.InValidForm_Mess = '';
    for (let item in this.FG_itemSubCategory.controls) {
      if (this.FG_itemSubCategory.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' is required.';
        return
      }
    }
  }

}
