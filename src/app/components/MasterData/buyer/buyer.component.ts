import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlbVarService } from 'src/app/Common/CommonTS/Glb.service';
import { ServicesHttpService } from 'src/app/Common/CommonTS/serviceshttp.service';
import { ServicesPathService } from 'src/app/Common/CommonTS/servicespath.service';
import { Model_Buyer, Model_contact } from './buyer.model';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
  FG_buyer: FormGroup;
  model = new Model_Buyer();
  Model_contact = new Model_contact();
  stepIndex: any
  @ViewChild('fileInput') el: ElementRef;
  editFile: boolean = true;
  removeUpload: boolean = false;
  pic_pth: any = '../../assets/Image/c.png';
  // displayedColumns: string[] = ['Contact Person Name', 'Contact Person Designation', 'Conatct Person Contact No.'];
  displayedColumns: string[] = ['Contact_Person_Name', 'Contact_Person_Designation', 'Conatct_Person_Contact_No', 'Action'];
  dataSource!: MatTableDataSource<any>;
  contactBTN: string = 'Add Contact';
  selectedFile: File | null = null;


  constructor(public gbl: GlbVarService, private _formBuilder: FormBuilder, private path: ServicesPathService,
    private api: ServicesHttpService, private http: HttpClient) { }


  ngOnInit(): void {
    this.pic_pth = '../../assets/Image/c.png'
    this.FG_buyer = this._formBuilder.group({
      'Buyer Code': [null, Validators.required],
      'Buyer Name': [null, Validators.required],
      'Address': [null, Validators.required], 'Address2': [null], 'Address3': [null], 'Address4': [null],
      'Address5': [null],
      'Mobile Number': [null, Validators.required], 'City': [null], 'Country': [null],
      'Email': [null, Validators.required],
      'State': [null], 'PIN Code': [null],
      'Contact Person Name': [null],
      'Contact Person Designation': [null],
      'Conatct Person Contact No.': [null],
      'Bank Name': [null], 'IFSC Code': [null], 'A/C Number': [null]

    });

    this.gbl.InValidForm_Mess = 'Buyer Code is required.';
    this.gbl.getModulesDTL();
    if (this.gbl.flag_edit) {
      this.model = this.gbl.model[0];
      this.model.Action = 'UPDT';
      this.gbl.InValidForm_Mess = '';
    }
    this.gbl.flag_edit = false;
    this.gbl.model = this.model;

  }


  chk_validation() {
    this.gbl.InValidForm_Mess = '';
    for (let item in this.FG_buyer.controls) {
      if (this.FG_buyer.controls[item].invalid) {
        this.gbl.InValidForm_Mess = item + ' is required.';
        return
      }
    }
  }

  onFileSelected(event: any) {
    if (event.length === 0) {
      return;
    }
    const file: File = event.target.files[0];

    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Only images are supported.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      this.pic_pth = reader.result;
    };
   
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const imageBytes = new Uint8Array(fileReader.result as ArrayBuffer);
      const base64String = btoa(String.fromCharCode(...imageBytes));
      this.model.Image = base64String;
    };
    fileReader.readAsArrayBuffer(file);
  }

  delete() {
    this.pic_pth = null;
  }

  contactList() {
    if (this.Model_contact.Contact_Person_Name == '' || this.Model_contact.Contact_Person_Name == null) {
      alert('Contact Person Name not null.')
      return;
    }
    let isPresent = this.model.Model_contact.some((data) => { return data.Contact_Person_Name == this.Model_contact.Contact_Person_Name });
    if (isPresent && this.contactBTN == 'Add Contact') {
      alert('Duplicate Contact Person Name not allowed.')
      return;
    }
    if (this.contactBTN == 'Add Contact')
      this.model.Model_contact.push(this.Model_contact);
    else {
      let dataIndex = this.model.Model_contact.findIndex(data => data.Contact_Person_Name == this.Model_contact.Contact_Person_Name);
      this.model.Model_contact[dataIndex] = this.Model_contact;
    }
    this.dataSource = new MatTableDataSource(this.model.Model_contact);
    this.Model_contact = new Model_contact();
    this.contactBTN = 'Add Contact';
  }

  editContact(name: any) {
    this.contactBTN = 'Update Contact';
    var removeIndex = this.model.Model_contact.map(data => data.Contact_Person_Name).indexOf(name);
    this.Model_contact = this.model.Model_contact[removeIndex];
  }


  deleteContact(name: any) {
    var removeIndex = this.model.Model_contact.map(data => data.Contact_Person_Name).indexOf(name);
    this.model.Model_contact.splice(removeIndex, 1);
    this.dataSource = new MatTableDataSource(this.model.Model_contact);
    this.Model_contact = new Model_contact();
  }


}
