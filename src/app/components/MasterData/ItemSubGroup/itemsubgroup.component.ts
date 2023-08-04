import { Component, OnInit } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { Model_Itemsubgroup } from './itemsubgroup.model';

@Component({
  selector: 'app-itemsubgroup',
  templateUrl: './itemsubgroup.component.html',
  styleUrls: ['./itemsubgroup.component.scss']
})
export class ItemSubGroupComponent implements OnInit {
  model = new Model_Itemsubgroup();

  constructor(public gbl:GlbVarService) { }

  ngOnInit(): void {
     this.gbl.getModulesDTL();
    if(this.gbl.flag_edit){
      this.model = this.gbl.model[0];
      this.model.Action = 'UPDT';
    }
    this.gbl.flag_edit=false;
    this.gbl.model =this.model;
    console.log(this.gbl.model)
  }

}
