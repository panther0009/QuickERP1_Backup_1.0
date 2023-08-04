import { Component, OnInit } from '@angular/core';
import { GlbVarService } from '../../CommonTS/Glb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public gbl:GlbVarService) { }

  ngOnInit(): void {
    this.gbl.module='Dashboard';
    this.gbl.icon='dashboard';
    this.gbl.controller= 'dashboard';
    this.gbl.API_Name = 'DashboardApi';
  }
  

}
