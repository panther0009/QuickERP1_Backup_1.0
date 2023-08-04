import { Component, OnInit } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { Model_Itemgroup } from './itemgroup.model';

@Component({
  selector: 'app-itemgroup',
  templateUrl: './itemgroup.component.html',
  styleUrls: ['./itemgroup.component.scss']
})
export class ItemGroupComponent implements OnInit {
  model = new Model_Itemgroup();
  constructor(public gbl:GlbVarService) { }

  ngOnInit(): void {
    this.gbl.getModulesDTL();
    if(this.gbl.flag_edit){
      this.model = this.gbl.model[0];
      this.model.Action = 'UPDT';
    }
    this.gbl.flag_edit=false;
    this.gbl.model =this.model;
  }

}
