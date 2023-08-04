import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlbVarService } from '../../CommonTS/Glb.service';
import { ServicesHttpService } from '../../CommonTS/serviceshttp.service';
import { ServicesPathService } from '../../CommonTS/servicespath.service';
import swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';
import { UserTeamComponent } from 'src/app/components/User/UserTeam/userteam.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  getScreenWidth: number;
  getScreenHeight: number;
  SideHeight: number;
  MainHeight: number;

  constructor(public gbl: GlbVarService, private router: Router, private path: ServicesPathService,
    private api: ServicesHttpService, private ut: UserTeamComponent) {
  }

  ngOnInit(): void {
  }

  Save() {
    console.log(this.gbl.model)
    if (this.gbl.InValidForm_Mess) {
      alert(this.gbl.InValidForm_Mess);
      return;
    }
    if (!this.gbl.mode) {
      alert('This action that you choose only for show details!');
      return;
    }
    this.api.post(this.path._rootApi + this.gbl.API_Name, this.gbl.model).subscribe({
      next: (res) => {
        if (res[0].Result == 'OK'){
          this.gbl.SideHeight = this.gbl.MainHeight = window.innerHeight - 92;
          this.router.navigate(['home/' + this.gbl.controller + 'List']);
        }
        else {
          this.router.navigate(['**']);
        }
      },
      error: (err) => {
        alert(err)
        this.gbl.flag_save = true;
        this.gbl.MainHeight = window.innerHeight - 146;
      }
    })
    this.gbl.flag_save = false;
    this.gbl.SideHeight = this.gbl.MainHeight = window.innerHeight - 92;
  }

  Cancel() {
    this.router.navigate(['home/' + this.gbl.controller + 'List']);
    this.gbl.flag_save = false;
    this.gbl.SideHeight = this.gbl.MainHeight = window.innerHeight - 92;
  }

  Stepper() {
    //this.gbl.flag_edit=true;
    //this.router.navigate(['home/'+this.gbl.controller]);
  }



}
