import { Component, OnInit } from '@angular/core';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';

@Component({
  selector: 'app-moduleheader',
  templateUrl: './moduleheader.component.html',
  styleUrls: ['./moduleheader.component.scss']
})
export class ModuleHeaderComponent implements OnInit {

  constructor(public gbl:GlbVarService) { }

  ngOnInit(): void {
  }

}
