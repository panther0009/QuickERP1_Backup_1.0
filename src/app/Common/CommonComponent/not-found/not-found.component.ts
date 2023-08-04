import { Component, OnInit } from '@angular/core';
import { GlbVarService } from '../../CommonTS/Glb.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public gbl:GlbVarService) { }

  ngOnInit(): void {
  }
  

}
