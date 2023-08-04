import { Component, OnInit } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';

@Component({
  selector: 'app-CostAnalysisBOM',
  templateUrl: './CostAnalysisBOM.component.html',
  styleUrls: ['./CostAnalysisBOM.component.scss']
})
export class CostAnalysisBOMComponent implements OnInit {

  constructor(public gbl:GlbVarService) { }

  ngOnInit(): void {
    this.gbl.getModulesDTL();
  }

}
