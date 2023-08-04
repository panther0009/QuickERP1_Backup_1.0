import { Component, OnInit } from '@angular/core';
import { GlbVarService } from '../../CommonTS/Glb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor(public gbl: GlbVarService) { }

  ngOnInit(): void {
  }
  toggleme() {
    this.gbl.toggle = !this.gbl.toggle
    if (this.gbl.toggle) {
      this.gbl.toggleWidth = 100
    }
  }

}
