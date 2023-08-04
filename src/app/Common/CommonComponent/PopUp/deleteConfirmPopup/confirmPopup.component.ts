import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmPopup',
  templateUrl: './confirmPopup.component.html',
  styleUrls: ['./confirmPopup.component.scss']
  
})
export class ConfirmPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) 
  { }
  
  ngOnInit() {
  }
}