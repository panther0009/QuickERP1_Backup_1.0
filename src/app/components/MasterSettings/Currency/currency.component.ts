import { AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { ServicesHttpService } from 'src/app/Common/CommonTS/serviceshttp.service';
import { ServicesPathService } from 'src/app/Common/CommonTS/servicespath.service';
import { Model_Currency } from './currency.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit  {
  model = new Model_Currency();
  FG_currency: FormGroup;

  constructor(private _formBuilder: FormBuilder, public gbl:GlbVarService, private router : Router,private path : ServicesPathService, private api : ServicesHttpService) {
  }

  ngOnInit(): void {
    this.FG_currency = this._formBuilder.group({
      'Currency Code': [null, Validators.required],
      'Currency Name': [null, Validators.required],
      'Exchange Rate': [null],
    });
    this.gbl.InValidForm_Mess = 'Currency Code is required.';
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
    for (let item in this.FG_currency.controls) {
      if (this.FG_currency.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' is required.';
        return
      }
    }
  }

}
