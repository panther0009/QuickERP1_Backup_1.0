import { AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { ServicesHttpService } from 'src/app/Common/CommonTS/serviceshttp.service';
import { ServicesPathService } from 'src/app/Common/CommonTS/servicespath.service';
import { Model_AllowUser } from './allowuser.model';

@Component({
  selector: 'app-AllowUser',
  templateUrl: './allowuser.component.html',
  styleUrls: ['./allowuser.component.scss']
})
export class AllowUserComponent implements OnInit  {
  dataSource = new MatTableDataSource();
  displayedColumns = [ 'Requested By','IP Address','Request Date','Approved By','Approved Date','Approved Type','Action'];
  model = new Model_AllowUser();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public gbl:GlbVarService, private router : Router,private path : ServicesPathService, private api : ServicesHttpService) {
  }

  ngOnInit(): void {
    this.getAllowUser();
    this.gbl.getModulesDTL();
    //this.paginator._intl.itemsPerPageLabel="Test String";
    //this.gbl.flag_save=false;
    this.gbl.flag_save =false;
    this.gbl.SideHeight = this.gbl.MainHeight = window.innerHeight - 92;
  }

  getAllowUser(){
    this.api.getModulesDTL(this.path._allowUser+'/GetallowuserDTL').subscribe({next:(res)=>{
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the Records!")
      }
    })
  }
  requestAct(element: any,flg: boolean){
    console.log(element);
    console.log(element['PID']);
    this.model.Username = 'AKhil';
    this.model.PID = element['PID'];
    this.model.Act = flg;
    this.model.Action ='UPDT';
    if(element['Approved Type']!="null"){
      this.model.Allow = element['Approved Type'];
    }

    this.api.post(this.path._allowUser+'/AllowUserPost',this.model).subscribe({next:(res)=>{
      if(this.model.Act){alert("Approved success1");}
      else{alert("Request deleted!")}
      this.getAllowUser();
      },
      error:(err)=>{
        console.log(err)
        alert("Error while fetching the Records!")
      }
    })

  }

}
