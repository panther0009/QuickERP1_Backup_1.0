import { Component, OnInit } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { Model_ItemCategory } from './itemcategory.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-itemcategory',
  templateUrl: './itemcategory.component.html',
  styleUrls: ['./itemcategory.component.scss']
})
export class ItemCategoryComponent implements OnInit {
  model = new Model_ItemCategory();
  cattestvar: string;
  FG_itemCategory: FormGroup;

  constructor(private _formBuilder: FormBuilder,public gbl:GlbVarService) { }

  ngOnInit(): void {
    this.FG_itemCategory = this._formBuilder.group({
      'Item Category Code': [null, Validators.required],
      'Item Category Name': [null, Validators.required],
    });
    this.gbl.InValidForm_Mess = 'Item Category Code is required.';
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
    for (let item in this.FG_itemCategory.controls) {
      if (this.FG_itemCategory.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' is required.';
        return
      }
    }
  }
  

}
