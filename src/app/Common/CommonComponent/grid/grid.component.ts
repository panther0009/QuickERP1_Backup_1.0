const fs = require('fs');
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GlbVarService } from '../../CommonTS/Glb.service';
import { ServicesHttpService } from '../../CommonTS/serviceshttp.service';
import { ServicesPathService } from '../../CommonTS/servicespath.service';
import { ConfirmPopupComponent } from '../PopUp/deleteConfirmPopup/confirmPopup.component';
import { Model_Modules, Model_Search } from './grid.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public href: string = "";
  public model: Model_Modules = new Model_Modules;
  public Seacrchmodel: Model_Search = new Model_Search;
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;
  icon_module: string = '';  
  name_module: string = '';
  url: string = '';
  controller = '';
  API_Name: string = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  fpath: any='c:\download\aaa.pdf';
  data: any;

  constructor(private router: Router, public gbl: GlbVarService, private path: ServicesPathService, private api: ServicesHttpService, public dialog: MatDialog) {
    this.href = this.router.url;
    this.url = this.href.substring(this.href.lastIndexOf("/") + 1, 50)
  }

  ngOnInit(): void {
    this.getModulesDTL();
    console.log(fs.exists(this.fpath))

  }

  getModulesDTL() {
    this.api.getModulesDTL(this.path._modulesDTL + '?controller=' + this.url).subscribe({
      next: (res) => {
        this.name_module = this.gbl.module = res[0].Sub_Module;
        this.icon_module = this.gbl.icon = res[0].icon;
        this.controller = this.gbl.controller = res[0].controller;
        this.API_Name = this.gbl.API_Name = res[0].API_Name;
        if (this.API_Name.length > 0 && this.API_Name != "null")
          this.getGridRecords();
      },
      error: (err) => {
        alert("Error while fetching the Records!")
      }
    })
  }

  getGridRecords() {
    this.api.getGrid(this.path._rootApi + this.API_Name + '?filter=' + this.Seacrchmodel.filter).subscribe({
      next: (res) => {
        this.data=res;
        this.dataSource = new MatTableDataSource(res);
        if (res.length > 0) {
          this.displayedColumns = Object.keys(res[0]);
          const index: number = this.displayedColumns.indexOf('PID');
          if (index !== -1) {
            this.displayedColumns.splice(index, 1);
          }
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      error: (err) => {
        alert("Error while fetching the Records!")
      }
    })
  }

  onSearchChange(): void {
    this.getGridRecords();
  }

  showRecord(row: any) {
    console.log(row['PID']);
  }

  delete(PID: any) {

    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.api.deleteGrid(this.path._rootApi + this.API_Name + '?PID=' + PID).subscribe({
          next: (res) => {
            if (res[0].Result == 'OK') {
              this.getGridRecords();
            }
          },
          error: (err) => {
            alert("Error while fetching the Records!")
          }
        })
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }


  add() {
    this.gbl.flag_save = true;
    this.gbl.SaveCaption = 'Save';
    this.gbl.mode = true;
    this.gbl.MainHeight = window.innerHeight - 146;
    this.router.navigate(['home/' + this.gbl.controller]);
  }

  edit(PID: any, mode: boolean) {
    this.gbl.flag_edit = true;
    this.gbl.SaveCaption = 'Update';
    this.gbl.mode = mode;
    this.gbl.MainHeight = window.innerHeight - 146;
    this.api.get(this.path._rootApi + this.API_Name + '/getByPID?PID=' + PID +'&Action=SHOW').subscribe({
      next: (res) => {
        this.gbl.model = res;
        this.router.navigate(['home/' + this.gbl.controller]);
      },
      error: (err) => {
        alert("Error while fetching the Records!")
      }
    })

  }

  print(PID: any) {
    this.api.getReport(this.path._rootApi + this.API_Name + '/printByID?PID=' + PID).subscribe({
      next: (res) => {
        console.log(res);
        var type = res.type;
        var file = new Blob([res], { type })
        // var fileURL = URL.createObjectURL(file);
        // window.open(fileURL);
        // var a = document.createElement('a');
        // a.href = fileURL;
        // a.target = '_blank';
        // a.download = 'bill.pdf';
        // document.body.appendChild(a);
        // a.click();

        // if (fs.existsSync('C:\Users\dell\Downloads\aaa.pdf')) {
        //   alert('File exist')
        //   console.log(fs.)
        // } else {
        //   alert( "File doesn't exist in path")
        // }

        let url = URL.createObjectURL(file);
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'aaa';
        a.click();
        URL.revokeObjectURL(url);
        a.remove();

      },
      error: (err) => {
        alert("Error while fetching the Records!")
      }
    })
  }

  // downloadFile(data: Response) {
  //   const blob = new Blob([data], { type: '.xlsx' });
  //   const url= window.URL.createObjectURL(blob);
  //   window.open(url);
  // }
  getSortableColumns(columnName: string) {
    this.data.sort((a: { Department: { toLowerCase: () => number; }; }, b: { Department: { toLowerCase: () 
      => number; }; }) => a.Department.toLowerCase() > b.Department.toLowerCase() ? 1 : -1);
      this.dataSource = new MatTableDataSource(this.data);
  }
  
  

}
