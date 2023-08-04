import { Component, OnInit } from '@angular/core';
import { GlbVarService } from '../../CommonTS/Glb.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentDate = new Date();
  constructor(public gbl: GlbVarService) { }

  ngOnInit(): void {
  }

}
